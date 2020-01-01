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
                        <el-form-item label="组长姓名" prop="leaderName">
                            <el-input v-model="newPro.leaderName"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div>
                        <el-form-item label="组长学号" prop="leaderID">
                            <el-input v-model="newPro.leaderID"></el-input>
                        </el-form-item>
                    </div>
                </el-col>

            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="课程名称" prop="courseName">
                        <el-input v-model="newPro.courseName"></el-input>
                    </el-form-item>

                </el-col>

                <el-col :span="12">
                    <div>
                        <el-form-item label="项目人数限制" prop="groupCount">
                            <el-input v-model="newPro.groupCount"></el-input>
                        </el-form-item>
                    </div>
                </el-col>

            </el-row>

            <el-form-item label="项目名称" prop="proName">
                <el-input v-model="newPro.proName" placeholder="例：用于课程组队PC端网站设计"></el-input>
            </el-form-item>

            <el-form-item label="项目描述" prop="proDesc">
                <el-input type="textarea" v-model="newPro.proDesc"
                          placeholder="例：采用vue.js开发的一个商城网站......"></el-input>
            </el-form-item>

            <el-row>
                <el-col :span="12">
                    <div>
                        <el-form-item label="项目密码" prop="password">
                            <el-input type="password" placeholder="请输入密码"
                                      v-model="newPro.password"
                                      autocomplete="off"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="newPro.checkPass"
                                      placeholder="请再次输入密码"
                                      autocomplete="off"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>

            <el-form-item label="截止时间" required>
                <el-col :span="6">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="newPro.date1"
                                        style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="1" style='{text-align:center}'>-</el-col>
                <el-col :span="6">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="选择时间" v-model="newPro.date2"
                                        style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>

            <el-form-item class="create-wrap__btn">
                <el-button type="primary" @click="submitForm('newPro')">立即创建</el-button>
                <el-button type="danger" @click="resetForm('newPro')">重置输入</el-button>
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
                } else if (value !== this.newPro.password) {
                    callback(new Error('两次输入密码不一致!'))
                } else {
                    callback()
                }
            }

            return {

                labelPosition: 'right',
                newPro: {
                    leaderName: '',
                    leaderID: '',
                    groupCount: '',
                    courseName: '',
                    proName: '',
                    date1: '',
                    date2: '',
                    proDesc: '',
                    password: '',
                    checkPass: ''
                },
                rules: {
                    leaderName: [
                        {type: 'string', required: true, trigger: 'change'}
                    ],
                    leaderID: [
                        {type: 'number', required: true, message: '请输入组长学号', trigger: 'change'}

                    ],
                    courseName: [
                        {type: 'string', required: true, message: '请输入课程名', trigger: 'change'}
                    ],
                    groupCount: [
                        {type: 'number', required: true, trigger: 'change'}
                    ],
                    proName: [
                        {type: 'string', required: true, message: '请输入项目名称', trigger: 'change'}

                    ],
                    data1: [
                        {type: 'string', required: true, trigger: 'change'}

                    ],
                    data2: [
                        {type: 'string', required: true, trigger: 'change'}

                    ],
                    proDesc: [
                        {type: 'string', required: true, message: '请输入项目描述', trigger: 'change'}

                    ],
                    password: [
                        {validator: validatePass, required: true, rigger: 'change'}
                    ],
                    checkPass: [
                        {validator: validatePass2, required: true, trigger: 'change'}
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

<style lang="scss">
    .create-wrap {
        border-radius: 5px;
        margin: 10px 5%;
        width: auto;

        &__table {
            border: 1px solid #f0f0f0;

            td {
                border: 1px solid red;

            }
        }

        .el-form {
            padding: 10px 10% 5px 10%;

            .el-form-item {
                border: 1px solid #f0f0f0;
                text-align: center;
                margin-bottom: 5px;

                .el-form-item__label {
                    text-align: center;
                    border-right: 1px solid #f0f0f0;
                    font-weight: bold;
                    line-height: 50px;
                }

                .el-input__inner {
                    border: none;
                    height: 50px;
                }

                .el-textarea__inner {
                    border: none;
                }

                .el-form-item__error {
                    display: none;
                }

                .el-form-item__content {
                    border: none !important;
                }

                .el-date-editor--date {
                    border: none !important;
                }
            }
        }

        &__btn {
            margin: 20px 0;
            border: none !important;
            text-align: center;

            .el-form-item__content {
                margin: 0 !important;

                .el-button {
                    margin: 0 20px;
                }
            }
        }
    }
</style>
