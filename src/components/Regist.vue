<template>
    <div class="regist">
        <div class="regist-wrap">
            <div class="regist-wrap__title">
                <img src="../assets/images/logo.png" alt="中山大学logo">
                <p>中山大学课程项目组队信息管理网站</p>
            </div>
            <div class="regist-wrap__box">
                <el-form :model="student" ref="form" label-width="0px"
                         class="regist-wrap__box__content">
                    <div v-if="errorInfo" class="regist-wrap__box__content__err">
                        <span>{{errInfo}}</span>
                    </div>
                    <el-form-item prop="username">
                        <el-input v-model="student.username" placeholder="账号/学工号"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input type="password" placeholder="密码" v-model="student.password"></el-input>
                    </el-form-item>

                    <el-form-item prop="repeatPassword">
                        <el-input type="password" placeholder="确认密码" v-model="student.repeatPassword"></el-input>
                    </el-form-item>

                    <el-form-item prop="validate">
                        <el-input v-model="student.validate" class="validate-code" placeholder="验证码"></el-input>
                        <div class="code" @click="refreshCode">
                            <s-identify :identifyCode="identifyCode"></s-identify>
                        </div>
                    </el-form-item>
                    <div class="regist-wrap__box__content__btn">
                        <el-button type="primary" @click="regFunc">注册</el-button>
                    </div>
                    <p @click="back" class="regist-wrap__box__content__back">返回登录</p>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidentify from './identify/Identify'

    export default {
        name: 'regist',
        data () {
            return {
                identifyCodes: '1234567890',
                identifyCode: '',
                errorInfo: false,
                isRegSuccess: false,
                student: {
                    username: '',
                    password: '',
                    repeatPassword: '',
                    validate: ''
                }
            }
        },
        components: {
            's-identify': Sidentify
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
            regFunc () {
                if (!this.student.username) {
                    this.messageFunc('warning', '用户名不能为空')
                    return
                }
                if (!this.student.password) {
                    this.messageFunc('warning', '密码不能为空')
                    return
                }
                if (!this.student.validate) {
                    this.messageFunc('warning', '请输入验证码')
                    return
                }

                if (this.student.password.length < 6) {
                    this.messageFunc('warning', '密码的长度至少6位')
                    return
                }
                if (this.student.repeatPassword !== this.student.password) {
                    this.messageFunc('warning', '两次输入的密码不同，请重新输入')
                    return
                }
                const obj = {
                    username: this.student.username,
                    password: this.student.password
                }
                this.$http.post('/reglogin/regist', obj).then((res) => {
                    if (res.body.code === 0) {
                        const msg = res.body.msg || '注册成功！！'
                        this.messageFunc('success', msg)
                        this.isRegSuccess = true
                    } else {
                        const errorMsg = res.body.errorMsg || '注册失败!!'
                        this.messageFunc('warning', errorMsg)
                        this.isRegSuccess = false
                    }
                })
            },
            back () {
                this.$router.replace('/')
            },
            randomNum (min, max) {
                return Math.floor(Math.random() * (max - min) + min)
            },
            refreshCode () {
                this.identifyCode = ''
                this.makeCode(this.identifyCodes, 4)
            },
            makeCode (o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
                }
                console.log(this.identifyCode)
            }
        }
    }
</script>

<style lang="scss">
    .regist {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("../assets/images/bg.png") no-repeat;
        background-size: cover;

        .regist-wrap {
            opacity: 1;
            border:2px solid #f0f0f0;
            width: 500px;
            margin: 100px auto 0 auto;
            background-color: #e5e3e4;

            .el-form-item{
                margin-bottom:5px;
            }

            &__title {
                height:80px;
                display: flex;
                align-items: center;
                padding:0 60px;
                background-color: #CEECF5;
                margin-bottom:10px;

                img {
                    width: 50px;
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
                margin:0 10%;
                text-align: center;

                &__content {
                    &__err {
                        span {
                            color: red;
                        }
                    }

                    &__btn {
                        text-align: center;
                        margin:10px 0 20px 0;

                        .el-button {
                            width: 100%;
                            height: 36px;
                        }
                    }
                    &__back{
                        margin-bottom:10px;
                        color: #ffa04c;
                        text-decoration: underline;
                        cursor: pointer;
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
