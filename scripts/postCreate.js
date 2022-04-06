const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const dayjs = require('dayjs')
const packages = require('../package.json')
const postTags = require('../src/posts/tags.json')

const tags = Object.keys(postTags)
const promptList = [
  {
    type: 'input',
    message: '请输入要创建的文章名称(en)',
    name: 'name',
  },
  {
    type: 'confirm',
    message: '是否原创',
    name: 'isSelf',
  },
  {
    type: 'checkbox',
    message: '请选择要创建的文章标签',
    name: 'tags',
    choices: tags,
  },
]

inquirer.prompt(promptList).then((answers) => {
  const filePath = path.resolve(__dirname, `../src/posts/${answers.name}.md`)
  if (fs.existsSync(filePath)) {
    console.log(filePath, '文件已存在')
    return
  }

  if (answers.tags) {
    answers.tags = Array.isArray(answers.tags) ? answers.tags : [answers.tags]
  } else {
    answers.tags = []
  }

  const str = `---
title: ${answers.name}
author: ${answers.isSelf ? packages.author : 'unknown\nsource:'}
createTime: ${dayjs().format('YYYY-MM-DD HH:mm')}
tags: ${answers.tags}
online: false
---`

  fs.writeFileSync(filePath, str)

  console.log('创建成功')
})
