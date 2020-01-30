// 引入express模块
const express = require('express')
// 引入session
const session = require('express-session')

const bodyParser = require('body-parser')
// 创建app对象
const app = express()

// 解析application/json
app.use(bodyParser.json())
// 解析application/X-www-form-urllencoded
app.use(bodyParser.urlencoded({extended: false}))

const addAndDelete = require('./routes/groupOperate')
const regAndLogin = require('./routes/regAndLogin')
const getTask = require('./routes/taskOperate')


const fs = require('fs')
const path = require('path')

// mongoose-morgan
const morgan = require('mongoose-morgan')


// Logger 添加数据库操作日志记录  https://www.npmjs.com/package/mongoose-morgan
app.use(morgan({
    connectionString: 'mongodb://47.98.189.209:27017/team'
}))

// 使用
app.use('/user', addAndDelete)
app.use('/reglogin', regAndLogin)
app.use('/task', getTask)

let MIME = {
    '.css': 'text/css',
    '.js': 'application/javascript'
}

app.use((req, res, next) => {
    const urlInfo = parseURL(__dirname, req.url)
    if (urlInfo) {
        // 合并文件
        combineFiles(urlInfo.pathnames, (err, data) => {
            if (err) {
                res.writeHead(404)
                res.end(err.message)
            } else {
                res.writeHead(200, {
                    'Content-Type': urlInfo.mime
                })
                res.end(data)
            }
        })
    }
})

// 解析文件路径
function parseURL (root, url) {
    let base,
        pastnames,
        separator
    if (url.indexOf('??') > -1) {
        separator = url.split('??')
        base = separator[0]

        pathnames = separator[1].split(',').map((value) => {
            return path.join(root, base, value)
        })
        return {
            mime: MIME[path.extname(pathnames[0])] || 'text/plain',
            pathnames: pathnames
        }
    }
    return null
};

// 合并文件
function combineFiles (pathnames, callback) {
    const output = [];
    (function nextFunc (l, len) {
        if (l < len) {
            fs.readFile(pathnames[l], (err, data) => {
                if (err) {
                    callback(err)
                } else {
                    output.push(data)
                    nextFunc(l + 1, len)
                }
            })
        } else {
            const data = Buffer.concat(output)
            callback(null, data)
        }
    })(0, pathnames.length)
}

// 定义服务器启动端口
app.listen(3001, () => {
    console.log('app listening on port 3001')
})
