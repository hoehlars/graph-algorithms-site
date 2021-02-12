import Queue from "./Queue";


interface PrioItem<T> {
    prio: number;
    item: T;
}

class PriorityQueue<T> {
    arr: PrioItem<T>[] = [];

    constructor() {

    }

    enqueue(prio: number, item: T) {
        this.arr.push({prio, item});
        this.sort();
    }

    sort() {
        this.arr.sort((a: PrioItem<T>, b: PrioItem<T>) => {
            return a.prio - b.prio;
        })
    }

    dequeue(): T | undefined {
        return this.arr.shift()?.item;
    }

    isEmpty(): boolean {
        return this.arr.length === 0;
    }

    contains(item: T): boolean {
        let contains = false;
        this.arr.forEach((itemInQ) => {
            if(item == itemInQ.item) {
                contains = true;
                return;
            }
        })
        return contains;
    }

    updateKey(newPrio: number, item: T) {
        this.arr.forEach((itemInQ) => {
            if(item == itemInQ.item) {
                itemInQ.prio = newPrio;
                return;
            }
        })
        this.sort();
    }
}

export default PriorityQueue;