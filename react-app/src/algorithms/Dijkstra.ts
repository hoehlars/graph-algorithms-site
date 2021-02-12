import { start } from 'repl';
import PriorityQueue from '../helpers/PriorityQueue';
import Queue from '../helpers/Queue';
import INode from '../model/Node';
import Algorithm from './Algorithm'

class Dijkstra extends Algorithm {

    findPath(graph: INode[][]): INode[][] {
        const nodes = [...graph];
        const startNode = this.findStartNode(nodes);
        const endNode = this.findEndNode(nodes);
        const adjList = this.getAdjList(nodes);
        

        const prioQueue: PriorityQueue<INode> = new PriorityQueue();

        nodes.forEach(arr => {
            arr.forEach(node => {
                node.distance = Infinity;
                node.prevNode = undefined;
            })
        }) 

        startNode.distance = 0;
        startNode.visited = true;

        prioQueue.enqueue(startNode.distance, startNode);

        while(!prioQueue.isEmpty()) {
            const curr = prioQueue.dequeue()!;
        
            adjList[curr.x][curr.y].forEach((neighbour) => {
                const alternativ = curr.distance! + this.distance(curr, neighbour);
                if(alternativ < neighbour.distance!) {

                    neighbour.distance = alternativ;
                    neighbour.prevNode = curr;
                    prioQueue.enqueue(neighbour.distance, neighbour);
                }
            })
        }

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

    private distance(a: INode, b: INode): number {
        const distX = a.x - b.x;
        const distY = a.y - b.y;
        return Math.sqrt(Math.pow(distX,2) + Math.pow(distY,2));
    }

    public toString(): string {
        return "Dijkstra";
    }
}

export default Dijkstra;