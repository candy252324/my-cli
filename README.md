# my-cli

### 项目说明
本项目是一个简易的cli工具，用于快速搭建一个需要支持es6语法和ts语法的项目框架。

### 如何使用
`npm install ecli -g`  
`ecli init`   // 根据提示输入信息后会自动生成项目目录  

生成的项目目录结构如下：  
```
|- projectName
  |- package.json
  |- tsconfig.json
  |- webpack.config.js
  |- .gitignore
  |- src
    |- index.ts 
      |- utils
        |- index.ts

```
`cd projectName`  // 进入项目目录  
`npm run dist`   // 生成dist打包文件