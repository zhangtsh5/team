<template>
  <div class="create-wrap">
      <el-form
          ref="newPro"
          :model="newPro"
          :rules="rules"
          status-icon
          label-width="120px"
          :label-position="labelPosition">

          <el-row>
              <el-col :span="12">
                  <div>
                      <el-form-item label="组长姓名:" prop="studentName">
                          <el-input v-model="newPro.studentName"></el-input>
                      </el-form-item>
                  </div>
              </el-col>
              <el-col :span="12">
                  <div>
                      <el-form-item label="组长学号:" prop="studentID">
                          <el-input v-model="newPro.studentID"></el-input>
                      </el-form-item>
                  </div>
              </el-col>
          </el-row>

          <el-form-item label="课程名称:" prop="courseName">
              <el-input v-model="newPro.courseName"></el-input>
          </el-form-item>

          <el-form-item label="项目名称:" prop="proName">
              <el-input v-model="newPro.proName" placeholder="用于课程组队PC端网站设计" ></el-input>
          </el-form-item>

          <el-form-item label="项目描述" prop="proDesc">
              <el-input type="textarea" v-model="newPro.proDesc" placeholder="项目主要采用vue.js......"></el-input>
          </el-form-item>

          <el-row>
              <el-col :span="12">
                  <div>
                      <el-form-item label="项目密码:" prop="pass">
                          <el-input type="password" placeholder="请输入密码" v-model="newPro.pass" autocomplete="off"></el-input>
                      </el-form-item>
                  </div>
              </el-col>
              <el-col :span="12">
                  <div>
                      <el-form-item label="确认密码:" prop="checkPass">
                          <el-input type="password" v-model="newPro.checkPass" placeholder="请再次输入密码" autocomplete="off"></el-input>
                      </el-form-item>
                  </div>
              </el-col>
          </el-row>

          <el-form-item label="截止时间" required>
              <el-col :span="11">
                  <el-form-item prop="date1">
                      <el-date-picker type="date" placeholder="选择日期" v-model="newPro.date1" style="width: 100%;"></el-date-picker>
                  </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                  <el-form-item prop="date2">
                      <el-time-picker placeholder="选择时间" v-model="newPro.date2" style="width: 100%;"></el-time-picker>
                  </el-form-item>
              </el-col>
          </el-form-item>

          <el-form-item>
              <el-button type="primary" @click="submitForm('newPro')">立即创建</el-button>
              <el-button type="danger" @click="resetForm('newPro')">重置</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name: 'NewPro',
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.newPro.checkPass !== '') {
          this.$refs.newPro.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.newPro.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'right',
      newPro: {
        studentName: '',
        studentID: '',
        courseName: '',
        proName: '',
        date1: '',
        date2: '',
        proDesc: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        studentName: [
          { type: 'string', required: true, message: '请输入组长姓名', trigger: 'blur' }

        ],
        studentID: [
          { type: 'number', required: true, message: '请输入组长学号', trigger: 'blur' }

        ],
        courseName: [
          { type: 'string', required: true, message: '请输入课程名', trigger: 'blur' }
        ],
        proName: [
          { type: 'string', required: true, message: '请输入项目名称', trigger: 'blur' }

        ],
        data1: [
          { type: 'string', required: true, trigger: 'blur' }

        ],
        data2: [
          { type: 'string', required: true, trigger: 'blur' }

        ],
        proDesc: [
          { type: 'string', required: true, message: '请输入项目描述', trigger: 'blur' }

        ],
        pass: [
          {validator: validatePass, required: true, rigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, required: true, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
    .create-wrap{
        border-radius: 5px;
        margin:10px 5%;
        width:auto;
        /*background-color: #FFFFF0;*/
        .el-form{
            padding: 10px 15% 5px 15%;
        }
  }
</style>
