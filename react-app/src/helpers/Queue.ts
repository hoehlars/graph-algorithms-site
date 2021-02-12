class Queue<T> {
    private arr: T[] = [];

    constructor() {

    }

    enqueue(item: T) {
        this.arr.push(item);
    }

    dequeue(): T | undefined {
        return this.arr.shift();
    }

    isEmpty(): boolean {
        return this.arr.length === 0;
    }
}

export default Queue;