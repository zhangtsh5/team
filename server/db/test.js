var User = require('./user.js')

/** * 插入 */
function insert () {
    console.log('1111')
    var user = new User({
        username: '12345678', // 用户账号
        userpwd: 'abcd' // 密码
    })
    user.save(function (err, res) {
        if (err) {
            console.log('Error:' + err)
        } else {
            console.log('Res:' + res)
        }
    })
}

insert()
