import React from "react";
import INode from "../model/Node";
import './Node.css'


interface NodeProps {
    node: INode;
    onMouseOver: (x: number, y: number) => void;
}


class Node extends React.Component<NodeProps> {

    constructor(props: Readonly<NodeProps>) {
      super(props);
    }

    render() {

        let backgroundStyle: React.CSSProperties = {}
        
        if(this.props.node.start) {
            backgroundStyle = {
                backgroundColor: "lightgreen"
            }
        } else if(this.props.node.end) {
            backgroundStyle = {
                backgroundColor: "red"
            }
        } else if(this.props.node.wall) {
            backgroundStyle = {
                backgroundColor: "lightgrey"
            }
        } else {
            backgroundStyle = {
                backgroundColor: "lightblue"
            }
        }

        return (
            <div onMouseOver={() => this.props.onMouseOver(this.props.node.x, this.props.node.y)} className="node" style={backgroundStyle}></div>
        )
    }
}

export default Node;