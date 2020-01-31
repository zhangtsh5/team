const mongoose = require('mongoose')
const DB_URL = 'mongodb://47.98.189.209:27017/team'

/* 链接 */
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

/* 链接成功 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL)
})

// 链接异常
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error:' + err)
})

// 链接断开

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected')
})

module.exports = mongoose
