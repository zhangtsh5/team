/*
 定义一个 pro 的Schema
*/
const mongoose = require('../db.js')
const Schema = mongoose.Schema

const ProSchema = new Schema({
    taskName: {type: String}, // 待组队项目名称
    leaderName: {type: String}, // 组长姓名
    leaderID: {type: String}, // 组长学号
    major: {type: String}, // 专业名
    // proName: {type: String}, // 项目名称
    // proDesc: {type: String}, // 项目描述
    maxCount: {type: Number}, // 最大人数限制
    members: {type: Array}, // 组员信息
    password: {type: String}// 小组密码
})

/* model 是由schema生成的模型，具有对数据库操作的能力 */

const Group = module.exports = mongoose.model('Group', ProSchema)
