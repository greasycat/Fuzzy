"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = __importDefault(require("./priority_queue"));
const edit_distance_1 = require("./edit_distance");
class FuzzySearch {
    constructor() {
        this._data = [];
    }
    load(data) {
        this._data = data;
    }
    add(item) {
        this._data.push(item);
    }
    search(query, limit = 5) {
        const queue = new priority_queue_1.default((a, b) => a.distance > b.distance);
        this._data.forEach((item) => {
            queue.push({
                item,
                distance: (0, edit_distance_1.distanceRatio)(item, query)
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
exports.default = FuzzySearch;
