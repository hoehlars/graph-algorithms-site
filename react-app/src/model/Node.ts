interface INode {
    x: number;
    y: number;
    start: boolean;
    end: boolean;
    wall: boolean;
    visited?: boolean;
    order?: number;
    distance?: number;
    prevNode?: INode;
}

export default INode;