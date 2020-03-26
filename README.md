### 项目说明
本项目是一个简易的cli工具，用于快速搭建一个需要支持es6语法、ts语法及热重载的前端项目框架。  
已发布到npm， [cxx-simple-cli](https://www.npmjs.com/package/cxx-simple-cli) 

### 安装
```
npm install cxx-simple-cli -g
```
### 使用

初始化生成项目目录，按照提示输入项目名称等信息
```
ecli init
```

生成的项目目录结构如下：  
```
|- projectName
  |- package.json
  |- tsconfig.json
  |- webpack.config.js
  |- .gitignore
  |- README.md
  |- src
    |- index.ts 
      |- utils
        |- index.ts

```

进入目录
```
cd projectName
```

安装依赖
```
npm install
```
运行
```
npm run dev
```
打包
```
npm run dist
```