class Stack<T> {
    private arr: T[] = []

    constructor() {

    }

    push(item: T) {
        this.arr.push(item);
    }

    pop(): T | undefined {
        return this.arr.pop();
    }

    isEmpty(): boolean {
        return this.arr.length === 0;
    }
}

export default Stack;