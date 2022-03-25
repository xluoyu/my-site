const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postRoot = path.resolve(__dirname, '../src/posts')

const main = () => {
  const res = {}

  const mdList = fs.readdirSync(postRoot).filter(e => e.endsWith('.md'))
  console.log(`检测到共计${mdList.length}篇文章`)
  mdList.forEach((name) => {
    const file = fs.readFileSync(path.join(postRoot, name))
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
