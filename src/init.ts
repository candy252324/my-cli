const path = require("path")
const fs = require("fs")
const inquirer = require('inquirer');
const handlebars = require('handlebars');

import { CWD } from './constant'
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
    getAllFile(path.relative(CWD, './src/template')).then(allfiles => {
        console.log(allfiles)
        for (const item of allfiles) {
            const relativePath = path.relative('./src/template', item.dirPath);
            const finalPath = path.join(projectName, relativePath, item.fileName)
            console.log(finalPath)
            // https://www.npmjs.com/package/handlebars
            var template = handlebars.compile(item.content.toString());
            createFile(finalPath, template(options), err => {
                console.log(err)
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