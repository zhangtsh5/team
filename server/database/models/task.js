/*
 定义一个task的Schema
*/
const mongoose = require('../db.js')
const Schema = mongoose.Schema

// 创建一个模型
const TaskSchema = new Schema({
    taskName: {type: String, required: true}, // 组队任务名
    password: {type: Number, required: true} // 密码
})

// 导出model模块
const Task = module.exports = mongoose.model('Task', TaskSchema)
