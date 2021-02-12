import INode from "../model/Node";

abstract class Algorithm {
    abstract findPath(graph: INode[][]): INode[][];

    protected findStartNode(graph: INode[][]): INode {
        let startNode: INode;

        for(let i = 0; i < graph.length; i++) {
            for(let j = 0; j < graph[i].length; j++) {
                if(graph[i][j].start) {
                    startNode = graph[i][j];
                    break;
                }
            }
        }
        return startNode!;
    }

    protected findEndNode(graph: INode[][]): INode {
        let endNode: INode;

        for(let i = 0; i < graph.length; i++) {
            for(let j = 0; j < graph[i].length; j++) {
                if(graph[i][j].end) {
                    endNode = graph[i][j];
                    break;
                }
            }
        }
        return endNode!;
    }

    protected getAdjList(graph: INode[][]): INode[][][] {
        const adjList: INode[][][] = [];

        for(let i = 0; i < graph.length; i++) {
            adjList[i] = []
            for(let j = 0; j < graph[i].length; j++) {
                adjList[i][j] = []
                // exclude wall
                if(!graph[i][j].wall) {

                    // upper neighbour
                    if(graph[i-1] && graph[i-1][j] && !graph[i-1][j].wall) {
                        adjList[i][j].push(graph[i-1][j]);
                    }

                    // left neighbour
                    if(graph[i][j-1] && !graph[i][j-1].wall) {
                        adjList[i][j].push(graph[i][j-1]);
                    } 

                    // lower neighbour
                    if(graph[i+1] && graph[i+1][j] && !graph[i+1][j].wall) {
                        adjList[i][j].push(graph[i+1][j]);
                    }

                    // right neighbour
                    if(graph[i][j+1] && !graph[i][j+1].wall) {
                        adjList[i][j].push(graph[i][j+1]);
                    }
                }
            }
        }

        return adjList;
    }
}

export default Algorithm;