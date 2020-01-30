const Group = require('../database/models/group')

// 新增项目信息
module.exports.add = function (req, res, next) {
    const group = new Group({
        taskName: req.body.taskName,
        leaderName: req.body.leaderName,
        leaderID: req.body.leaderID,
        major: req.body.major,
        // proName: req.body.proName,
        maxCount: req.body.maxCount,
        members: req.body.members,
        // proDesc: req.body.proDesc,
        password: req.body.password
    })

    Group.findOne({'leaderID': group.leaderID}, (err1, doc1) => {
        if (doc1) {
            res.send({'code': 2, 'errorMsg': '抱歉，您只能创建一个项目'})
        } else {
            group.save((err, docs) => {
                if (err) {
                    res.send({'code': 1, 'errorMsg': '新增失败'})
                } else {
                    res.send({'code': 0, 'message': '新增成功'})
                }
            })
        }
    })
    next()
}
// 查询项目信息
module.exports.query = function (req, res, next) {
    const taskName = req.body.taskName
    const leaderName = req.body.leaderName
    const leaderID = req.body.leaderID
    const major = req.body.major
    // const proName = req.body.proName
    const maxCount = req.body.maxCount
    const members = req.body.members
    // const proDesc = req.body.proDesc
    const password = req.body.password

    const obj = {}

    if (taskName !== '') {
        obj['taskName'] = taskName
    }
    if (leaderName !== '') {
        obj['leaderName'] = leaderName
    }
    if (leaderID !== '') {
        obj['leaderID'] = leaderID
    }
    if (major !== '') {
        obj['major'] = major
    }
    // if (proName !== '') {
    //     obj['proName'] = proName
    // }
    if (maxCount !== '') {
        obj['maxCount'] = maxCount
    }
    if (members !== '') {
        obj['members'] = members
    }
    // if (proDesc !== '') {
    //     obj['proDesc'] = proDesc
    // }
    if (password !== '') {
        obj['password'] = password
    }

    const pageSize = req.body.pageSize ? req.body.pageSize : 10
    const curPage = req.body.curPage ? req.body.curPage : 1
    const skipCount = (curPage - 1) * pageSize

    Group.find(obj, (err, docs) => {
        if (err) {
            res.send({'code': 1, 'errorMsg': '查询失败'})
        } else {
            res.send(docs)
        }
    })

    Group.count(obj, (err1, total) => {
        Group.find(obj).limit(pageSize).skip(skipCount).exec((err2, docs) => {
            if (err2) {
                res.send({'code': 1, 'errorMsg': '查询失败'})
            } else {
                res.send({
                    'code': 0,
                    'msg': '查询成功',
                    'pager': {totalCount: total, pageSize: pageSize, curPage: curPage},
                    'data': docs
                })
            }
        })
    })
    next()
}

// 获取对应项目的小组列表
module.exports.getGroupList = function (req, res, next) {
    const taskName = req.body.taskName
    Group.find({'taskName': taskName}, (err, docs) => {
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

// 获取我的小组
module.exports.getMyGroup = function (req, res, next) {
    const leaderID = req.body.leaderID
    Group.find({$or:[{'leaderID': leaderID},{'members': {$elemMatch:{'studentID': leaderID}}}]}, (err, docs) => {
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

// 删除小组
module.exports.del = function (req, res, next) {
    const id = req.body.id
    // 根据自动分配的 _id 进行删除
    const whereid = {'_id': id}
    Group.remove(whereid, (err, docs) => {
        if (err) {
            res.send({'code': 1, 'errorMsg': '删除失败'})
        } else {
            res.send(docs)
        }
    })
    next()
}


// 加入该项目组
module.exports.join = function (req, res, next) {
    console.log(req.body)
    const id = req.body.id
    const newMember = req.body.newMember // 待添加的组员信息
    const taskName = req.body.taskName

    const ids = {
        _id: id
    }
    // 判断用户是否已经加入该项目中的某支队伍 两种情况 不能是组长 也不能是组员
    Group.findOne({'leaderID': newMember.studentID, 'taskName': taskName}, (err3, doc3) => {
        if (doc3) {
            return res.send({'code': 2, 'errorMsg': '对不起，您只能加入一个小组'})
        } else {
            Group.findOne({'members.studentID': newMember.studentID, 'taskName': taskName}, (err1, doc1) => {
                if (err1) {
                    return res.send({'code': 1, 'errorMsg': '网络异常错误'})
                } else if (doc1) {
                    return res.send({'code': 2, 'errorMsg': '对不起，您只能加入一个小组'})
                } else {
                    // 新增队友
                    Group.update(ids, {$addToSet: {'members': newMember}}, (err2, doc2) => {
                        if (err2) {
                            res.send({'code': 1, 'errorMsg': '添加失败'})
                        } else {
                            return res.send({code: 0, msg: '加入成功'})
                        }
                    })
                }
            })
        }
    })
}

// 删除队员
module.exports.delMember = function (req, res, next) {
    const id = req.body.id
    const delStudentID = req.body.studentID // 待添加的组员信息

    const ids = {
        _id: id
    }

    Group.update(ids, {$pull: {'members': {'studentID': delStudentID}}}, (err, docs) => {
        if (err) {
            res.send({'code': 1, 'errorMsg': '删除失败'})
        } else {
            res.send(docs)
        }
    })
}
