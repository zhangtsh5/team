<template>
    <section>
        <div v-if="isLogin" class="login">
            <div class="login-wrap">
                <div class="login-wrap__title">
                    <img src="../assets/images/caslog.jpeg" alt="中山大学logo">
                </div>
                <div class="login-wrap__box">
                    <p class="login-wrap__box__hint">即将访问：<span>组队信息管理平台</span></p>

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
                        // 登录成功 保存当前登录名
                        sessionStorage.setItem('username', obj.username)
                        sessionStorage.setItem('token', 'true')

                        const msg = res.data.msg || '登录成功!!!'
                        this.messageFunc('success', msg)
                        setTimeout(() => {
                            this.$router.push({
                                path: '/tasks'
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("../assets/images/bodybg.jpg") no-repeat;
        background-size: 100% 100%;

        .login-wrap {
            width: calc(240px + 10%);
            position: absolute;
            left:50%;
            top:100px;
            transform: translate(-50%,0);
            background-color: #fff;

            .el-form-item{
                margin-bottom:5px;
                .el-input__inner{
                    height: 30px;
                    line-height: 30px;
                }
            }

            &__title {
                height:70px;
                background-color: #006938;
                margin-bottom:10px;
                text-align: center;

                img {
                    height: 100%;
                    display: inline-block;
                }
            }

            &__box {
                margin:20px 10%;
                text-align: center;
                &__hint{
                    text-align: left;
                    span{
                        color: #f98c5e;
                    }
                }
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
                            height: 30px;
                            padding: 0;
                        }
                    }

                    &__register {
                        font-size: 12px;
                        line-height: 16px;
                        color: #f97112;
                        cursor: pointer;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>
