import INode from "../model/Node";

interface Algorithm {
    algorithm(path: INode[], start: INode, end: INode): INode[];
}

export default Algorithm;