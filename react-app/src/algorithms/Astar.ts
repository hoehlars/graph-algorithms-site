import PriorityQueue from '../helpers/PriorityQueue';
import INode from '../model/Node';
import Algorithm from './Algorithm'

class Astar extends Algorithm {

    findPath(graph: INode[][]): INode[][] {
        const nodes = [...graph];
        const startNode = this.findStartNode(nodes);
        const endNode = this.findEndNode(nodes);
        const adjList = this.getAdjList(nodes);


        const prioQueue: PriorityQueue<INode> = new PriorityQueue();
        const closedList: Set<INode> = new Set();
        
        nodes.forEach(arr => {
            arr.forEach(node => {
                node.distance = 0;
                node.prevNode = undefined;
            })
        }) 

        startNode.distance = 0;
        prioQueue.enqueue(0, startNode);

        do {
            const curr = prioQueue.dequeue()!;

            if(curr.x === endNode.x && curr.y === endNode.y) {
                break;
            }

            curr.visited = true; 

            adjList[curr.x][curr.y].forEach((neighbour) => {
                if(!neighbour.visited) {

                    // g value for neighbour
                    const value = curr.distance! + this.distance(curr,neighbour);

                    // path is not better
                    if(!(prioQueue.contains(neighbour) && value >= neighbour.distance!)) {
                        neighbour.prevNode = curr;

                    }

                    // update
                    neighbour.distance = value;

                    const f = value + this.h(neighbour, endNode)

                    if(prioQueue.contains(neighbour)) {
                        // distance value has been updated, just sort prioQueue new
                        prioQueue.updateKey(f, neighbour);
                    } else {
                        prioQueue.enqueue(f, neighbour)
                    }
                }
            })

        } while(!prioQueue.isEmpty())

        // find path

        // create shortest path
        let path: INode[] = [endNode];
        let curr = endNode;
        while (curr.prevNode != undefined) {
            curr = curr.prevNode;
            path = [curr, ...path];
        }

        let order: number = 1;
        // iterate through path and assign order & visited
        for(let i = 0; i < path.length; i++) {
            // no path found
            if(endNode != path[0]) {
                path[i].visited = true;
                path[i].order = order;
                order++;
            }
        }
        return nodes;
    }

    private distance(a: INode, b: INode) {
        const distX = a.x - b.x;
        const distY = a.y - b.y;
        return Math.sqrt(Math.pow(distX,2) + Math.pow(distY,2));
    }


    private h(neighbour: INode, endNode: INode): number {
        // luftlinie
        const distX = neighbour.x - endNode.x;
        const distY = neighbour.y - endNode.y;
        return Math.sqrt(Math.pow(distX,2) + Math.pow(distY,2));
    }
    
    public toString(): string {
        return "A*";
    }
}

export default Astar;