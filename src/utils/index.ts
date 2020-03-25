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

/**
 * 创建目录 createDir("foo/bar"),会依次去判断上层目录是否存在，不存在则创建
 * @param dir 路径 
 */
export function createDir(dir: string) {
  if (!dir) return
  if (!fs.existsSync(dir)) {
    /** 上级路劲 */
    let tempDir = path.parse(dir).dir;
    createDir(tempDir)
    fs.mkdirSync(dir, err => { err && console.log(err) })
  }
  return true
}
/**
 * 创建文件，如果目录不存在，会先创建目录
 * createFile('foo/bar/test.txt')
 * @param filePath 文件路径 
 * @param content 文件内容
 * @param cb 回掉函数
 */
export async function createFile(filePath: string, content: any, cb: Function) {
  /** 文件路径 */
  let fileDir = path.parse(filePath).dir;
  createDir(fileDir)
  fs.writeFile(filePath, content, err => {
    cb(err)
  })

}