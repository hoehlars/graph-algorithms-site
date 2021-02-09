import React from "react";
import './Grid.css'
import Node from "../components/Node"
import { Button } from "react-bootstrap";

interface GridProps {
    width: number;
    height: number;
}

interface GridState {
    nodes: JSX.Element[];
}


class Grid extends React.Component<GridProps, GridState> {

    constructor(props: Readonly<GridProps>) {
      super(props);

      this.state = {
          nodes: this.initNodes()
      }
    }

    private initNodes(): JSX.Element[] {
        const nodes: JSX.Element[] = []

        for(let i = 0; i < this.props.height; i++) {
            for(let j = 0; j < this.props.width; j++) {
                
                // start at x = 10, y = 13
                if(i == 13 && j == 10) {
                    nodes.push(<Node key={`${i},${j}`} start={true} end={false} />)
                // end at x = 40, y = 13
                } else if(i == 13 && j == 40) {
                    nodes.push(<Node key={`${i},${j}`} start={false} end={true} />)
                } else {
                    nodes.push(<Node key={`${i},${j}`} start={false} end={false} />)
                }
                
            }
        }
        return nodes;
    }

    private clearWalls() {
        this.setState({
            nodes: this.initNodes()
        })
    }

    render() {

        const gridStyle: React.CSSProperties = {
            gridTemplateColumns: `repeat(${this.props.width}, minmax(10px, 1fr))`,
            gridTemplateRows: `repeat(${this.props.height}, minmax(10px, 1fr))`
        }

        return (
            

            <div className="grid-container" style={gridStyle}>
                <Button id="clearWallsBtn" className="btn btn-warning" onClick={() => this.clearWalls()}>Clear Walls</Button>
                <Button id="clearEverythingBtn" className="btn btn-danger">Clear everything</Button>
                {this.state.nodes}
            </div>
        )
    }
}

export default Grid;