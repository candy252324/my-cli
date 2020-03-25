const path = require("path")
const inquirer = require('inquirer');
const handlebars = require('handlebars');
import { CWD, TEMPLATEDIR } from './constant'
import { getAllFile, createFile } from './utils/index'
import { UserInput } from './types/index'


const promptList = [{
    type: 'input',
    name: 'name',
    message: '请输入项目名称:',
    validate: (val) => {
        if (val) { return true }
        return "请输入项目名称"
    }
}, {
    type: 'input',
    name: 'version',
    message: '请输入版本号:',
    default: "1.0.0",
}, {
    type: 'input',
    name: 'description',
    message: '请输入描述:',
}];

/**
 * 生成项目文件
 * @param options 用户输入的信息
 */
function generator(options: UserInput) {
    const projectName = options.name
    getAllFile(TEMPLATEDIR).then(allfiles => {
        for (const item of allfiles) {
            const relativePath = path.relative(TEMPLATEDIR, item.dirPath);
            const finalPath = path.join(CWD, projectName, relativePath, item.fileName)
            // https://www.npmjs.com/package/handlebars
            var template = handlebars.compile(item.content.toString());
            createFile(finalPath, template(options), err => {
                err && console.log(err)
            })
        }
    })
}

module.exports = function () {
    inquirer
        .prompt(promptList)
        .then(answers => {
            generator(answers)
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });

}