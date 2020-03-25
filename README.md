# simple-cli

### 项目说明
本项目是一个简易的cli工具，用于快速搭建一个需要支持es6语法和ts语法的项目框架。  
已发布到npm，点击 [cxx-simple-cli](https://www.npmjs.com/package/cxx-simple-cli) 跳转

### 如何使用
`npm install ecli -g`  
`ecli init`  

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
#### 如何编译打包？  
`cd projectName`   
`npm run dist` 