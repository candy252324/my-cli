const path = require("path")
const TerserPlugin = require('terser-webpack-plugin');   // https://www.npmjs.com/package/terser-webpack-plugin

module.exports = {
  target: 'node',  // webpack将在类似Node.js的环境中进行编译  https://webpack.js.org/concepts/targets/, 解决编译时commander中的fs,child_process等node模块resolve失败问题
  devtool: 'source-map',   // source-map
  node: {
    __filename: false,  // https://webpack.js.org/configuration/node/#node-__dirname
    __dirname: false,
  },
  entry: {
    index: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js", // [name], [hash],[chunk-hash]
  },
  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      Util: path.resolve(__dirname, 'src/js/'),  // 配置别名
    }
  },
  // optimization: {
  //   minimize: true,  // 是否压缩,默认true
  //   minimizer: [
  //     new TerserPlugin({
  //       // 当前版本 Webpack 默认使用的是 TerserWebpackPlugin，默认就开启了多进程和缓存，构建时，项目中可以看到 terser 的缓存文件: node_modules/.cache/terser-webpack-plugin
  //       // 当修改output的filename时，会发现打包生成的.map中的内容不正确，可能就是这个缓存导致的，设为false就好了
  //       cache: false,
  //       sourceMap: true,
  //       // cacheKeys: (defaultCacheKeys, file) => {
  //       //   defaultCacheKeys.myCacheKey = 'myCacheKeyValue';
  //       //   return defaultCacheKeys;
  //       // },
  //     }),
  //   ],
  // },
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