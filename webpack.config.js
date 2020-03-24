const path=require("path")
module.exports={
    devtool: 'source-map',   // source-map
    entry:"./src/index.ts",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    resolve:{
        extensions:[".js",".ts"],
        alias:{
          Util: path.resolve(__dirname, 'src/js/'),  // 配置别名
        }
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
               { 
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                },
            ]
          },
          {
            test: /\.tsx?$/,
            use: {
              loader: 'ts-loader'
            }
          }
        ]
      }
}