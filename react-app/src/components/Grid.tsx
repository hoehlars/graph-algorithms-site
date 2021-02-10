import React from "react";
import './Grid.css'
import Node from "../components/Node"
import { Button } from "react-bootstrap";
import INode from "../model/Node";

interface GridProps {
    width: number;
    height: number;
}

interface GridState {
    nodes: INode[];
}


class Grid extends React.Component<GridProps, GridState> {

    constructor(props: Readonly<GridProps>) {
      super(props);

      this.state = {
          nodes: this.initNodes()
      }
    }

    private initNodes(): INode[] {
        const nodes: INode[] = []

        for(let i = 0; i < this.props.height; i++) {
            for(let j = 0; j < this.props.width; j++) {

                const node: INode = {
                    x: i,
                    y: j,
                    start: false,
                    end: false,
                    wall: false
                }
                
                // start at x = 10, y = 13
                if(i == 13 && j == 10) {
                    node.start = true;
                // end at x = 40, y = 13
                } else if(i == 13 && j == 40) {
                    node.end = true;
                } 
                nodes.push(node);    
            }
        }
        return nodes;
    }

    private clearWalls() {
        const newNodes = [...this.state.nodes];
        newNodes.forEach((node) => {
            node.wall = false;
        })
        this.setState({
            nodes: newNodes
        })
    }

    private changeBackgroundWall(x: number, y: number) {
        const newNodes = [...this.state.nodes];

        // find index
        const nodeToChangeIdx = newNodes.findIndex((node) => {
            return x === node.x && y === node.y
        })

        const newNode: INode = {
            ...newNodes[nodeToChangeIdx]!,
            wall: true
        }

        newNodes.splice(nodeToChangeIdx, 1, newNode)

        this.setState({
            nodes: newNodes
        })
        
    }

    render() {

        const gridStyle: React.CSSProperties = {
            gridTemplateColumns: `repeat(${this.props.width}, minmax(10px, 1fr))`,
            gridTemplateRows: `repeat(${this.props.height}, minmax(10px, 1fr))`
        }

        return (
            
            <div className="gridBtn">
                <div className="buttons">
                    <Button id="btn" className="btn btn-warning" onClick={() => this.clearWalls()}>Clear Walls</Button>
                    <Button id="btn" className="btn btn-danger">Clear everything</Button>
                </div>
                <div className="grid-container" style={gridStyle}>
                {this.state.nodes.map((node) => (
                    <Node key={`${node.x},${node.y}`} node={node} onMouseOver={this.changeBackgroundWall.bind(this)} />
                ))}
                </div>
            </div>
            
        )
    }
}

export default Grid;