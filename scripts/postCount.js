const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postRoot = path.resolve(__dirname, '../src/posts')

/**
 * 查找目录下所有含有该后缀名的文件
 * @param {*} root 
 * @param {*} endsWith 
 */
const findFileList = (root, endsWith) => {
  const res = []
  const files = fs.readdirSync(root)
  files.forEach((file) => {
    const filePath = path.join(root, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      res.push(...findFileList(filePath, endsWith))
    } else if (file.endsWith(endsWith)) {
      res.push(filePath)
    }
  })
  return res
}

const main = () => {
  const res = {}

  const mdList = findFileList(postRoot, '.md')
  console.log(`检测到共计${mdList.length}篇文章`)
  mdList.forEach((name) => {
    const file = fs.readFileSync(name)
    const { data } = matter(file)
    if (!data.tags) return
    if (typeof data.tags == 'string') {
      data.tags = [data.tags]
    }
    data.tags.forEach((tag) => {
      if (res[tag]) {
        res[tag] += 1
      }
      else {
        res[tag] = 1
      }
    })
  })
  console.log('已生成标签统计: ', res)
  fs.writeFileSync(path.join(postRoot, 'tags.json'), JSON.stringify(res))
}

main()
