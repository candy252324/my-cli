const fs = require("fs")
const path = require("path")

/**
 * 获取某个路径下的全部文件
 * @param path 路径
 * @param whiteList 白名单
 * @param fileArr 内部递归使用
 */
export async function getAllFile(filePath: string, whiteList = [], fileArr = []): Promise<any[]> {
  return new Promise(async (reslove, reject) => {
    fs.readdir(filePath, async function (err, msg) {
      if (!err) {
        for (const item of msg) {
          if (whiteList.includes(item)) continue
          const absPath = path.join(filePath, item);
          if (fs.statSync(absPath).isDirectory()) {
            await getAllFile(absPath, whiteList, fileArr);
          } else {
            fileArr.push({
              content: fs.readFileSync(absPath),
              fileName: item,
              dirPath: filePath
            });
          }
        }
        reslove(fileArr);
      } else {
        reject(err);
      }
    });
  });
}