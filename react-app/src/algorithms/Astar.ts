import INode from '../model/Node';
import Algorithm from './Algorithm'

class Astar implements Algorithm {

    algorithm(path: INode[]): INode[] {
        throw new Error('Method not implemented.');
    }
    
    public toString(): string {
        return "A*";
    }
}

export default Astar;