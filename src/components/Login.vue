<template>
    <section>
        <div v-if="isLogin" class="login">
            <div class="login-wrap">
                <div class="login-wrap__title">
                    <img src="../assets/images/logo.png" alt="中山大学logo">
                    <p>中山大学课程项目组队信息管理网站</p>
                </div>
                <div class="login-wrap__box">
                    <el-form ref="form" label-width="0px"
                             class="login-wrap__box__content">

                        <el-form-item prop="name">
                            <el-input v-model="username" placeholder="账号/学工号"></el-input>
                        </el-form-item>

                        <el-form-item prop="password">
                            <el-input type="password" placeholder="密码" v-model="password"></el-input>
                        </el-form-item>

                        <div class="login-wrap__box__content__btn">
                            <el-button type="primary" @click="login">登录</el-button>
                        </div>
                        <p class="login-wrap__box__content__register"
                           @click="isLogin = false">还没有注册？点击注册</p>
                    </el-form>
                </div>
            </div>
        </div>
        <register v-else @toLogin="toLogin"></register>
    </section>

</template>

<script>
    import Register from './Regist'
    export default {
        name: 'login',
        data () {
            return {
                isLogin: true,
                username: '',
                password: ''
            }
        },
        components: {
            Register
        },
        // 页面加载调用获取cookie值
        mounted () {
            this.getCookie()
        },
        methods: {
            messageFunc (status, msg) {
                this.$message({
                    type: status,
                    message: msg
                })
            },
            login () {
                if (!this.username) {
                    this.messageFunc('warning', '用户名不能为空')
                    return
                }
                if (!this.password) {
                    this.messageFunc('warning', '密码不能为空')
                    return
                }
                const obj = {
                    username: this.username,
                    password: this.password
                }
                this.$http.post('/reglogin/login', obj).then((res) => {
                    if (res.data.code === 0) {
                        // 登录成功
                        localStorage.setItem('ms_username', this.username)
                        // 保存用户名和密码到cookie
                        this.setCookie(this.username, this.password, 7)
                        const msg = res.data.msg || '登录成功!!!'
                        this.messageFunc('success', msg)
                        setTimeout(() => {
                            this.$router.push({
                                path: '/home'
                            })
                        }, 1000)
                    } else if (res.data.code === 2) {
                        // 用户名不存在
                        const msg = res.data.errorMsg
                        this.messageFunc('warning', msg)
                    } else {
                        // 登录失败
                        const errorMsg = res.data.errorMsg || '用户账号或密码错误'
                        this.messageFunc('warning', errorMsg)
                    }
                })
            },
            toLogin () {
                this.isLogin = true
            },
            // 设置cookie
            setCookie (cName, cPwd, exdays) {
                let exdate = new Date() // 获取时间
                exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) // 保存的天数
                // 字符串拼接cookie
                window.document.cookie = 'userName' + '=' + cName + ';path=/;expires=' + exdate.toGMTString()
                window.document.cookie = 'userPwd' + '=' + cPwd + ';path=/;expires=' + exdate.toGMTString()
            },
            // 读取cookie
            getCookie () {
                if (document.cookie.length > 0) {
                    let arr = document.cookie.split('; ') // 这里显示的格式需要切割一下自己可输出看下
                    for (let i = 0; i < arr.length; i++) {
                        let arr2 = arr[i].split('=') // 再次切割
                        // 判断查找相对应的值
                        if (String(arr2[0]) === 'userName') {
                            this.username = arr2[1] // 保存到保存数据的地方
                        } else if (String(arr2[0]) === 'userPwd') {
                            this.password = arr2[1]
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .login {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("../assets/images/bg.png") no-repeat;
        background-size: cover;

        .login-wrap {
            opacity: 1;
            border:2px solid #f0f0f0;
            width: 500px;
            margin: 100px auto 0 auto;
            background-color: #F5F6CE;

            .el-form-item{
                margin-bottom:5px;
            }

            &__title {
                height:100px;
                display: flex;
                align-items: center;
                padding:0 40px;
                background-color: #CEECF5;
                margin-bottom:10px;

                img {
                    width: 60px;
                    display: inline-block;
                    border-radius: 50%;
                }
                p{
                    display: inline-block;
                    font-size:20px;
                    margin-left:5px;
                    font-weight:bold;
                }
            }

            &__box {
                margin:20px 10%;
                text-align: center;

                &__content {
                    &__err {
                        span {
                            color: red;
                        }
                    }

                    &__btn {
                        text-align: center;

                        .el-button {
                            width: 100%;
                            height: 36px;
                        }
                    }

                    &__register {
                        font-size: 16px;
                        line-height: 20px;
                        color: #f97112;
                        cursor: pointer;
                        text-decoration: underline;
                    }
                }
            }
        }

        .code {
            width: 110px;
            height: 37px;
            border: 2px solid #ccc;
            float: right;
            margin-right: 5px;
        }

        .validate-code {
            width: 180px;
            float: left;
        }
    }
</style>
