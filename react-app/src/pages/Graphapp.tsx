import React from "react";
import './Graphapp.css'
import Button from 'react-bootstrap/Button'
import { Dropdown, DropdownButton } from "react-bootstrap";
import DFS from "../algorithms/DFS";
import BFS from "../algorithms/BFS";
import Dijkstra from "../algorithms/Dijkstra";
import Astar from "../algorithms/Astar";
import Algorithm from "../algorithms/Algorithm"
import Grid from "../components/Grid";



interface GraphappState {
    algorithm: Algorithm;
    
}

enum Algorithms {DFS, BFS, Astar, Dijkstra}

class Graphapp extends React.Component<{}, GraphappState> {
    private readonly WIDTH: number = 50;
    private readonly HEIGHT: number = 26;

    constructor(props: Readonly<{}>) {
      super(props);

      this.state = {
          algorithm: new DFS(),
      };
    }

    private changeAlgorithm(algorithm: Algorithms): void {
        switch(algorithm) {
            case Algorithms.DFS: {
                this.setState({ algorithm: new DFS()});
                break;
            }
            case Algorithms.BFS: {
                this.setState({ algorithm: new BFS()});
                break;
            }
            case Algorithms.Astar: {
                this.setState({ algorithm: new Astar()});
                break;
            }
            case Algorithms.Dijkstra: this.setState({ algorithm: new Dijkstra()})
        }
    }

    render() {
        return (
            <div className="site">
                <div className="buttonBar">
                    <DropdownButton id="dropdown-item-button" variant="secondary" title={`${this.state.algorithm.toString()}`}>
                        <Dropdown.Item as="button" onClick={() => this.changeAlgorithm(Algorithms.DFS)}>Depth-first-search (DFS)</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => this.changeAlgorithm(Algorithms.BFS)}>Breadth-first-search (BFS)</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => this.changeAlgorithm(Algorithms.Dijkstra)}>Dijkstra</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => this.changeAlgorithm(Algorithms.Astar)}>A*</Dropdown.Item>
                    </DropdownButton>
                    {this.state.algorithm ? <p className="algorithmText">Current algorithm: {this.state.algorithm.toString()}</p> : <p className="algorithmText">No algorithm chosen</p>}
                </div>

                <Grid width={this.WIDTH} height={this.HEIGHT} algorithm={this.state.algorithm} />
            </div>
        )
    }
}

export default Graphapp;