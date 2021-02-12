import { cursorTo } from 'readline';
import { visitEachChild } from 'typescript';
import Stack from '../helpers/Stack';
import INode from '../model/Node';
import Algorithm from './Algorithm'

class DFS extends Algorithm {

    findPath(graph: INode[][]): INode[][] {
        const nodes = [...graph];
        const startNode = this.findStartNode(nodes);
        const endNode = this.findEndNode(nodes);
        const adjList = this.getAdjList(nodes);

        const stack: Stack<INode> = new Stack();

        stack.push(startNode);
        let order: number = 1;

        while(!stack.isEmpty()) {
            const curr = stack.pop()!;

            // reached the end
            if(curr.x === endNode.x && curr.y === endNode.y) {
                endNode.order = order;
                break;
            }

            if(!curr.visited) {
                curr.visited = true;
                curr.order = order;
                order++;
                adjList[curr.x][curr.y].forEach((neighbour) => {
                    stack.push(neighbour);
                })

            }

            

        }
        return nodes;
    }

    public toString(): string {
        return "DFS";
    }
}

export default DFS;