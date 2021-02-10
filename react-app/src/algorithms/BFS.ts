import INode from '../model/Node';
import Algorithm from './Algorithm'

class BFS implements Algorithm {

    algorithm(path: INode[]): INode[] {
        throw new Error('Method not implemented.');
    }

    public toString(): string {
        return "BFS";
    }
}

export default BFS;