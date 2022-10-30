import PriorityQueue from './priority_queue';
import {distanceRatio} from './edit_distance';

export default class FuzzySearch {
    private _data: string[];

    constructor() {
        this._data = [];
    }

    
    load(data: string[]) {
        this._data = data;
    }

    add(item: string) {
        this._data.push(item);
    }

    search(query: string, limit: number = 5) {
        const queue = new PriorityQueue((a: any, b: any) => a.distance > b.distance);
        this._data.forEach((item) => {
            queue.push({
                item,
                distance: distanceRatio(item, query)
            });
        });
        const result = [];
        while (!queue.isEmpty() && limit > 0) {
            result.push(queue.pop());
            limit--;
        }
        return result;
    }
}
