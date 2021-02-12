import React from "react";
import INode from "../model/Node";
import './Node.css'


interface NodeProps {
    node: INode;
    onMouseOver: (node: INode) => void;
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
                backgroundColor: "grey"
            }
        } else if(this.props.node.visited) {
            backgroundStyle = {
                backgroundColor: "green"
            }
        } else {
            backgroundStyle = {
                backgroundColor: "lightblue"
            }
        }

        return (
            <div onMouseOver={() => this.props.onMouseOver(this.props.node)} className="node" style={backgroundStyle}>
                {this.props.node.order || this.props.node.order === 0 ? <p className="orderText">{this.props.node.order}</p> : null}
            </div>
        )
    }
}

export default Node;