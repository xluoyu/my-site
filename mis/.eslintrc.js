module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  /*
  * 解决引入ts文件import xxx (不带文件后缀) eslint报错问题
  * https://stackoverflow.com/questions/55198502/using-eslint-with-typescript-unable-to-resolve-path-to-module
  * */
  // settings: {
  //     "import/resolver": {
  //         "node": {
  //             "paths": ["src"],
  //             "extensions": [".js", ".jsx", ".ts", ".tsx"]
  //         }
  //     }
  // },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "arrowFunctions": true,
      "classes": true,
      "modules": true,
      "defaultParams": true
    },
  },
  plugins: ["react"],
  "rules": {
    semi: 0,
    'no-unused-vars': [
        1,
        {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_|^err|^ev' // _xxx, err, error, ev, event
        }
    ],
    'no-useless-escape': 2,
  }
}