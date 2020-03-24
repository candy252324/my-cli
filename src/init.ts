const path = require("path")
const fs = require("fs")
import { CWD } from './constant'
import { getAllFile } from './utils/index'
_init()
function _init() {
    getAllFile(path.relative(CWD, './src/template')).then(allfiles => {
        for (const item of allfiles) {
            const absPath = path.join(item.dirPath, item.fileName);
            const relativePath = path.relative('./src/template', absPath);
            fs.writeFile(
                relativePath,
                item.content,
                (err) => {
                    if (err) console.log(err);
                }
            );
        }
    })
}
module.exports = _init