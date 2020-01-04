<template>
    <div class="login">
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
                       @click="handleCommand()">还没有注册？点击注册</p>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                username: '',
                password: ''
            }
        },
        mounted () {
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 4)
        },
        methods: {
            messageFunc (status, msg) {
                this.$message({
                    type: status,
                    message: msg
                })
            },
            login () {
                this.$router.push({path: '/home'})
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
                    if (res.body.code === 0) {
                        // 登录成功
                        const msg = res.body.msg || '登录成功!!!'
                        this.messageFunc('success', msg)
                        setTimeout(() => {
                            this.$router.replace({
                                path: '/home'
                            })
                        }, 2000)
                    } else {
                        // 登录失败
                        const errorMsg = res.body.errorMsg || '登录失败'
                        this.messageFunc('warning', errorMsg)
                    }
                })
            },
            handleCommand () {
                this.$router.replace('/regist')
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
