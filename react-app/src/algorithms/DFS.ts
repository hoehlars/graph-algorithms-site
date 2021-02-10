import INode from '../model/Node';
import Algorithm from './Algorithm'

class DFS implements Algorithm {

    algorithm(path: INode[], start: INode, end: INode): INode[] {
        throw new Error('Method not implemented.');
    }

    public toString(): string {
        return "DFS";
    }
}

export default DFS;