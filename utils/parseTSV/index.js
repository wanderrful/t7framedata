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
    const data = readFileSync(`./input/${CHARACTER}.tsv`, "utf8");
    const frameData = fn_parseTSV(data);
    writeFileSync(`./output/${CHARACTER}.json`, JSON.stringify(frameData, null, 2));
})();