import React from "react";
import './Grid.css'
import Node from "../components/Node"
import { Button } from "react-bootstrap";
import INode from "../model/Node";
import Algorithm from "../algorithms/Algorithm"

interface GridProps {
    width: number;
    height: number;
    algorithm: Algorithm;
}

interface GridState {
    nodes: INode[][];
    nodesVisited?: number;
    holdMouseDown: boolean;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}


class Grid extends React.Component<GridProps, GridState> {
    private readonly STARTX: number = 10;
    private readonly STARTY: number = 13;
    private readonly ENDX: number = 40;
    private readonly ENDY: number = 13;

    constructor(props: Readonly<GridProps>) {
      super(props);

      this.state = {
        nodes: this.initNodes(),
        holdMouseDown: false,
        startX: this.STARTX,
        startY: this.STARTY,
        endX: this.ENDX,
        endY: this.ENDY
      }
    }

    private initNodes(): INode[][] {
        const nodes: INode[][] = [];

        for(let i = 0; i < this.props.height; i++) {
            nodes[i] = [];
            for(let j = 0; j < this.props.width; j++) {
                
                const node: INode = {
                    x: i,
                    y: j,
                    start: false,
                    end: false,
                    wall: false
                }

                
                // x and y are interchanged
                // state not defined yet use constants
                if(i == this.STARTY && j == this.STARTX) {
                    node.start = true;
                } else if(i == this.ENDY && j == this.ENDX) {
                    node.end = true;
                }   
                nodes[i][j] = node;
            }
        }
        return nodes;
    }

    private calculatePath(): void {
        this.clearOrder();
        this.clearVisited();
        this.setState({ nodesVisited: undefined})
        const graphWithPath = this.props.algorithm.findPath(this.state.nodes);
        this.setState({
            nodes: graphWithPath,
            nodesVisited: graphWithPath[this.state.endY][this.state.endX].order
        })
    }

    private clearWalls() {
        const newNodes = [...this.state.nodes];
        newNodes.forEach((arr) => {
            arr.forEach((node) => {
                node.wall = false;
            })
        })
        this.setState({
            nodes: newNodes
        })
    }

    private clearDistanceAndPrevNode() {
        const newNodes = [...this.state.nodes];
        newNodes.forEach((arr) => {
            arr.forEach((node) => {
                node.distance = undefined;
                node.prevNode = undefined;
            })
        })
        this.setState({
            nodes: newNodes,
            nodesVisited: undefined
        })
    }

    private clearOrder() {
        const newNodes = [...this.state.nodes];
        newNodes.forEach((arr) => {
            arr.forEach((node) => {
                node.order = undefined;
            })
        })
        this.setState({
            nodes: newNodes,
            nodesVisited: undefined
        })
    }

    private clearVisited() {
        const newNodes = [...this.state.nodes];
        newNodes.forEach((arr) => {
            arr.forEach((node) => {
                node.visited = false;
            })
        })
        this.setState({
            nodes: newNodes,
            nodesVisited: undefined
        })
    }

    private clearEverything() {
        this.clearWalls();
        this.clearVisited();
        this.clearOrder();
        this.clearDistanceAndPrevNode();
    }

    private clearPath() {
        this.clearVisited();
        this.clearOrder();
    }

    private changeBackgroundWall(node: INode) {
        if(this.state.holdMouseDown) {
            const newNodes = [...this.state.nodes];
            newNodes[node.x][node.y].wall = true;
            this.setState({
                nodes: newNodes
            })
        }
    }

    private changeStartNode(x: number, y: number): void {
        const newNodes = [...this.state.nodes];
        newNodes.forEach(arr => {
            arr.forEach(node => {
                // delete old start node
                if(node.start) {
                    node.start = false;
                }

                // set new startnode, x is height
                if(node.x === y && node.y === x) {
                    node.start = true;
                }
            })
        })
        this.setState({
            nodes: newNodes,
            startX: x,
            startY: y
        })
    }

    private changeEndNode(x: number, y: number): void {
        const newNodes = [...this.state.nodes];
        newNodes.forEach(arr => {
            arr.forEach(node => {
                // delete old start node
                if(node.end) {
                    node.end = false;
                }

                // set new startnode, x is height
                if(node.x === y && node.y === x) {
                    node.end = true;
                }
                

            })
        })
        this.setState({
            nodes: newNodes,
            endX: x,
            endY: y
        })
    }
    


    private resetStartAndEnd() {
        this.changeStartNode(this.STARTX, this.STARTY);
        this.changeEndNode(this.ENDX, this.ENDY);
    }


    render() {
        const gridStyle: React.CSSProperties = {
            gridTemplateColumns: `repeat(${this.props.width}, minmax(10px, 1fr))`,
            gridTemplateRows: `repeat(${this.props.height}, minmax(10px, 1fr))`
        }

        const nodesElements: JSX.Element[] = []

        for(let i = 0; i < this.props.height; i++) {
            for(let j = 0; j < this.props.width; j++) {
                nodesElements.push(<Node key={`${i},${j}`} node={this.state.nodes[i][j]} onMouseOver={this.changeBackgroundWall.bind(this)} />);
            }
        } 
        
        return (

            
            
            <div className="gridBtn">

                <div className="startEndInput">
                    <label htmlFor="start">
                        Start: <input type="number" min="0" max="50" name="start" placeholder="x" onChange={event => this.changeStartNode(Number.parseInt(event.target.value), this.state.startY)}></input>
                        <input type="number" min="0" max="25" placeholder="y" onChange={event => this.changeStartNode(this.state.startX, Number.parseInt(event.target.value))}></input>
                    </label>
                    
                    <label htmlFor="end" className="labelEnd">
                        End: <input type="number" min="0" max="50" placeholder="x" onChange={event => this.changeEndNode(Number.parseInt(event.target.value), this.state.endY)}></input>
                        <input  type="number" min="0" max="25" placeholder="y" onChange={event => this.changeEndNode(this.state.endX, Number.parseInt(event.target.value))}></input>
                    </label>

                    <Button className="btn btn-warning" onClick={() => this.resetStartAndEnd()}>Reset Start and End</Button>
                </div>
                

                <div className="buttons">
                    <Button className="btn btn-success" onClick={() => this.calculatePath()}>Calculate!</Button>
                    <Button className="btn btn-warning" onClick={() => this.clearWalls()}>Clear Walls</Button>
                    <Button className="btn btn-secondary" onClick={() => this.clearPath()}>Clear Path</Button>
                    <Button className="btn btn-danger"  onClick={() => this.clearEverything()}>Clear everything</Button>
                </div>
                <p id="infoText">Hold down the mouse on the grid to place walls!</p>
                <div onMouseDown={() => this.setState({holdMouseDown: true})} onMouseUp={() => this.setState({holdMouseDown: false})} className="grid-container" style={gridStyle}>
                {nodesElements}
                </div>
                {this.state.nodesVisited ? <p className="pathLengthText">Länge des gefundenen Pfades: {this.state.nodesVisited}</p> : 
                <p className="pathLengthText">Keinen Pfad zum Endknoten gefunden!</p>}
            </div>
            
        )
    }
}

export default Grid;