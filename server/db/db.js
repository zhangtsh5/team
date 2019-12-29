const mongoose = require('mongoose')

const DB_URL = 'mongodb://47.98.189.209:27017/team'
/** * 连接 */

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
/** * 连接成功 */
// const db = mongoose.connection
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL)
})
/** * 连接异常 */

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err)
})
/** * 连接断开 */

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected')
})

module.exports = mongoose
