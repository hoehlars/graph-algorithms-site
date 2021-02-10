import INode from '../model/Node';
import Algorithm from './Algorithm'

class Dijkstra implements Algorithm {

    algorithm(path: INode[]): INode[] {
        throw new Error('Method not implemented.');
    }

    public toString(): string {
        return "Dijkstra";
    }
}

export default Dijkstra;