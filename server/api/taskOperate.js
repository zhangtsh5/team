const Task = require('../database/models/task')


// 获取任务列表
module.exports.getTaskList = function (req, res, next) {
    Task.find({}, (err, docs) => {
        if (err) {
            res.json({
                code: '1',
                msg: err.message
            })
        } else {
            res.json({
                code: '0',
                msg: '',
                total: docs.length,
                list: docs
            })
        }
    })
}





