# my-cli

#### es6编译成es5
1. `npm install babel-cli babel-preset-es2015 --save`  
2. 添加.babelrc配置文件
```
{
    "presets":[
        "es2015"  // 对应安装的babel-preset-es2015
    ],
    "plugins":[]
}
```
3. package.json中配置命令
```
  "scripts": {
    "compile-es6": "node ./node_modules/babel-cli/bin/babel.js index.js -o .dist.js"
  },
```
4. 执行 `npm run compile-es6` 即可将indes.js中的es6语法编译成es5并输出