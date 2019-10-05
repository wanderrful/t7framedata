/** Parse TSV
 *  - Syntax: `node index.js FILENAME`
 * 
 *  Converts a TSV file into JSON data that we can use for our app!
 *  Made on July 17th, 2019
 */
const CHARACTER = process.argv[2];

const fn_parseTSV = data => {
    let output = [];
    let rows = data.split("\n");
    const headers = rows.shift().split("\t");
    let rowCount = 0;
    for (let row of rows) {
        const cells = row.split("\t");
        const dataRow = headers.reduce((acc, cur, idx) => {
            try {
                if (!!cells[idx]) acc[cur.trimEnd()] = cells[idx].trimEnd();
                else acc[cur.trimEnd()] = "";
                return acc;
            } catch (err) {
                throw new Error(`Row ${rowCount}, Column ${idx} isn't a string! Content: ${cur}`);
            }
        }, {});
        output.push(dataRow);
        rowCount++;
    }
    return output;
};

const { readFileSync, writeFileSync } = require("fs");

const main = (() => {
    const data = readFileSync(`utils/parseTSV/input/input.tsv`, "utf8");

    let uniqueCommands = [];
    const frameData = fn_parseTSV(data).map(x => {
        const { command } = x;
        if (uniqueCommands.includes(command.toLowerCase())) { return null; }
        else { uniqueCommands.push(command.toLowerCase()); return x; }
    }).filter(x => x !== null);

    writeFileSync(`src/app/data/frames/${CHARACTER}.data.ts`, `import { CharacterFrameData } from "../framedata.interface";\n\nexport const ${CHARACTER[0].toUpperCase() + CHARACTER.slice(1)}: CharacterFrameData[] = ${JSON.stringify(frameData, null, 2)};`);
})();