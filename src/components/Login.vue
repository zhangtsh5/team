<template>
    <div class="login">
        <div class="login-wrap">
            <div class="login-wrap__title">
                <img src="../assets/images/logo.png" alt="中山大学logo">
            </div>
            <div class="login-wrap__box">
                <el-form :model="student" :rules="rules" ref="student" label-width="0px"
                         class="login-wrap__box__content">
                    <div v-if="errorInfo" class="login-wrap__box__content__err">
                        <span>{{errInfo}}</span>
                    </div>
                    <el-form-item prop="name">
                        <el-input v-model="student.name" placeholder="账号/学工号" ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="密码" v-model="student.password" @keyup.enter.native="submitForm('student')"></el-input>
                    </el-form-item>
                    <el-form-item  prop="validate">
                        <el-input v-model="student.validate" class="validate-code" placeholder="验证码" ></el-input>
                        <div class="code" @click="refreshCode">
                            <s-identify :identifyCode="identifyCode"></s-identify>
                        </div>
                    </el-form-item>
                    <div class="login-wrap__box__content__btn">
                        <el-button type="primary" @click="submitForm('student')">登录</el-button>
                    </div>
                    <p class="login-wrap__box__content__register"
                       @click="handleCommand()">新用户注册</p>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import Sidentify from './identify/Identify'
export default {
  name: 'login',
  data () {
    return {
      identifyCodes: '1234567890',
      identifyCode: '',
      errorInfo: false,
      student: {
        name: '',
        password: '',
        validate: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        validate: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
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
    submitForm (formName) {
      this.$router.replace('/home') // 需验证再跳转，此处仅为演示效果
      const self = this
      self.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem('ms_username', self.student.name)
          localStorage.setItem('ms_user', JSON.stringify(self.student))
          console.log(JSON.stringify(self.student))
          self.$http.post('/api/user/login', JSON.stringify(self.student))
            .then((response) => {
              console.log(response)
              if (response.data === -1) {
                self.errorInfo = true
                self.errInfo = '该用户不存在'
                console.log('该用户不存在')
              } else if (response.data === 0) {
                console.log('密码错误')
                self.errorInfo = true
                self.errInfo = '密码错误'
              } else if (response.status === 200) {
                self.$router.push('/readme')
              }
            }).then((error) => {
              console.log(error)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleCommand () {
      this.$router.push('/register')
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

<style lang="scss" scoped>
    .login{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: url("../assets/images/bg2.jpeg") no-repeat;
        background-size:cover;
        .login-wrap{
            opacity: 1;
            /*border:2px solid #000;*/
            width:500px;
            margin:5% auto;
            &__title{
                margin:30px 0 10px 0;
                img{
                    width:120px;
                    border-radius: 50%;
                }
            }
            &__box{
                width:80%;
                margin:0 10%;
                text-align:center;
                &__content{
                    &__err{
                        span{
                            color:red;
                        }
                    }
                    &__btn{
                        text-align:center;
                        .el-button{
                            width:80%;
                            height:36px;
                        }
                    }
                    &__register{
                        font-size:16px;
                        line-height:20px;
                        color:#f9f9f9;
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
            margin-right:5px;
            border-radius: 2px;
        }
        .validate-code {
            width: 180px;
            float: left;
        }
    }
</style>
