import fs from 'fs';
import readline from 'readline';
import FuzzySearch from './src/fuzzy_search';


const fuzzySearch = new FuzzySearch();

readline.createInterface({
    input: fs.createReadStream('data.csv'),
}).on('line', (line:any) => {
    fuzzySearch.add(line);
}).on('close', () => {
    console.time('search');
    console.log(fuzzySearch.search('pmatrix'));
    console.timeEnd('search');
});


