"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
const fuzzy_search_1 = __importDefault(require("./src/fuzzy_search"));
const fuzzySearch = new fuzzy_search_1.default();
readline_1.default.createInterface({
    input: fs_1.default.createReadStream('data.csv'),
}).on('line', (line) => {
    fuzzySearch.add(line);
}).on('close', () => {
    console.time('search');
    console.log(fuzzySearch.search('pmatrix'));
    console.timeEnd('search');
});
