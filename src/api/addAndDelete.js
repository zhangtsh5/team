const Pro = require('../../server/database/models/pro')

// 新增项目信息
module.exports.add = function (req, res, next) {
    const pro = new Pro({
        leaderName: req.body.leaderName,
        leaderID: req.body.leaderID,
        courseName: req.body.courseName,
        proName: req.body.proName,
        data1: req.body.data1,
        data2: req.body.data2,
        proDesc: req.body.proDesc,
        password: req.body.password
    })
    pro.save((err, docs) => {
        if (err) {
            res.send({'code': 1, 'errorMsg': '新增失败'})
        } else {
            res.send({'code': 0, 'message': '新增成功'})
        }
    })
    next()
}
// 查询项目信息
module.exports.query = function (req, res, next) {
    const leaderName = req.body.leaderName
    const leaderID = req.body.leaderID
    const courseName = req.body.courseName
    const proName = req.body.proName
    const data1 = req.body.data1
    const data2 = req.body.data2
    const proDesc = req.body.proDesc
    const password = req.body.password

    const obj = {}

    if (leaderName !== '') {
        obj['leaderName'] = leaderName
    }
    if (leaderID !== '') {
        obj['leaderID'] = leaderID
    }
    if (courseName !== '') {
        obj['courseName'] = courseName
    }
    if (proName !== '') {
        obj['proName'] = proName
    }
    if (data1 !== '') {
        obj['data1'] = data1
    }
    if (data2 !== '') {
        obj['data2'] = data2
    }
    if (proDesc !== '') {
        obj['proDesc'] = proDesc
    }
    if (password !== '') {
        obj['password'] = password
    }

    const pageSize = req.body.pageSize ? req.body.pageSize : 10
    const curPage = req.body.curPage ? req.body.curPage : 1
    const skipCount = (curPage - 1) * pageSize
    /*
    Pro.find(obj, (err, docs) => {
      if (err) {
        res.send({ 'code': 1, 'errorMsg': '查询失败' });
      } else {
        res.send(docs);
      }
    });
    */
    Pro.count(obj, (err1, total) => {
        Pro.find(obj).limit(pageSize).skip(skipCount).exec((err2, docs) => {
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

// 删除项目数据
module.exports.del = function (req, res, next) {
    const id = req.body.id
    // 根据自动分配的 _id 进行删除
    const whereid = {'_id': id}
    Pro.remove(whereid, (err, docs) => {
        if (err) {
            res.send({'code': 1, 'errorMsg': '删除失败'})
        } else {
            res.send(docs)
        }
    })
    next()
}

// 更新项目数据
module.exports.update = function (req, res, next) {
    console.log(req.body)
    // 需要更新的数据
    const id = req.body.id
    const leaderName = req.body.leaderName
    const leaderID = req.body.leaderID
    const courseName = req.body.courseName
    const proName = req.body.proName
    const data1 = req.body.data1
    const data2 = req.body.data2
    const proDesc = req.body.proDesc
    const password = req.body.password

    const updateStr = {
        leaderName: leaderName,
        leaderID: leaderID,
        courseName: courseName,
        proName: proName,
        data1: data1,
        data2: data2,
        proDesc: proDesc,
        password: password
    }

    const ids = {
        _id: id
    }
    console.log(ids)
    Pro.findByIdAndUpdate(ids, updateStr, (err, docs) => {
        if (err) {
            res.send({'code': 1, 'errorMsg': '更新失败'})
        } else {
            res.send(docs)
        }
    })
}
