/** * 用户信息 */
const mongoose = require('./db.js')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String}, // 用户账号
    userpwd: {type: String} // 密码
})
module.exports = mongoose.model('User', UserSchema)

console.log("1111")

