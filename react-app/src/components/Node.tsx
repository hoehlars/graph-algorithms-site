import React from "react";
import './Node.css'


interface NodeProps {
    start: boolean;
    end: boolean;
}

interface NodeState {
    wall: boolean;
}


class Node extends React.Component<NodeProps, NodeState> {

    constructor(props: Readonly<NodeProps>) {
      super(props);

      this.state = {
          wall: false
      }
    }

    private changeBackground() {
        if(!this.props.start && !this.props.end) {
            this.setState({ wall: true })
        }
        
    }

    render() {

        let backgroundStyle: React.CSSProperties = {}
        
        if(this.props.start) {
            backgroundStyle = {
                backgroundColor: "lightgreen"
            }
        } else if(this.props.end) {
            backgroundStyle = {
                backgroundColor: "red"
            }
        } else {
            backgroundStyle = {
                backgroundColor: "lightblue"
            }
        }

        if(this.state.wall) {
            backgroundStyle = {
                backgroundColor: "lightgrey"
            }
        }

        return (
            <div onMouseOver={() => this.changeBackground()} className="node" style={backgroundStyle}></div>
        )
    }
}

export default Node;