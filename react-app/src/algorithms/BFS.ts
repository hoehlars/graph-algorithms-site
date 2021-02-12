import Queue from '../helpers/Queue';
import INode from '../model/Node';
import Algorithm from './Algorithm'

class BFS extends Algorithm {

    findPath(graph: INode[][]): INode[][] {
        const nodes = [...graph];
        const startNode = this.findStartNode(nodes);
        const endNode = this.findEndNode(nodes);
        const adjList = this.getAdjList(nodes);

        const queue: Queue<INode> = new Queue();

        startNode.visited = true;
        queue.enqueue(startNode);
        let order: number = 1;

        while(!queue.isEmpty()) {
            const curr = queue.dequeue()!;
            
            // reached the end
            if(curr.x === endNode.x && curr.y === endNode.y) {
                endNode.order = order;
                break;
            }

            adjList[curr.x][curr.y].forEach((neighbour) => {
                if(!neighbour.visited) {
                    neighbour.visited = true;
                    queue.enqueue(neighbour);
                    neighbour.order = order;
                    order++;
                }
            })

        }
        return nodes;
    }

    public toString(): string {
        return "BFS";
    }
}

export default BFS;