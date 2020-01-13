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
                    <el-form-item label="专业" prop="major">
                        <el-input v-model="newPro.major"></el-input>
                    </el-form-item>

                </el-col>

                <el-col :span="12">
                    <div>
                        <el-form-item label="项目人数限制" prop="maxCount">
                            <el-input v-model="newPro.maxCount"></el-input>
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
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    if (this.newPro.checkPass !== '') {
                        this.$refs.newPro.validateField('checkPass')
                    }
                    callback()
                }
            }
            var validatePass2 = (rule, value, callback) => {
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
                dialogVisible: false,
                newPro: {
                    leaderName: '',
                    leaderID: '',
                    maxCount: '',
                    major: '',
                    proName: '',
                    proDesc: '',
                    members: [],
                    password: '',
                    checkPass: ''
                },
                rules: {
                    leaderName: [
                        {type: 'string', required: true, trigger: 'change'}
                    ],
                    leaderID: [
                        {type: 'string', required: true, message: '请输入组长学号', trigger: 'change'}
                    ],
                    major: [
                        {type: 'string', required: true, message: '请输入专业名', trigger: 'change'}
                    ],
                    maxCount: [
                        {type: 'string', required: true, trigger: 'change'}
                    ],
                    proName: [
                        {type: 'string', required: true, message: '请输入项目名称', trigger: 'change'}

                    ],
                    proDesc: [
                        {type: 'string', required: true, message: '请输入项目描述', trigger: 'change'}

                    ],
                    password: [
                        { validator: validatePass, trigger: 'change' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交项目信息?', '提示', {
                            confirmButtonText: '确认',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            let params = {
                                leaderName: this.newPro.leaderName,
                                leaderID: this.newPro.leaderID,
                                major: this.newPro.major,
                                proName: this.newPro.proName,
                                members: this.newPro.members,
                                maxCount: this.newPro.maxCount,
                                proDesc: this.newPro.proDesc,
                                password: this.newPro.password
                            }
                            this.$http.post('/user/add', params).then((res) => {
                                    console.log(111)
                                    console.log(res)
                                    // 一个学号只能创建一个项目
                                    if (Number(res.data.code) === 2) {
                                        this.$message({
                                            message: res.data.errorMsg,
                                            type: 'warning'
                                        })
                                    } else if (res.data.code === 0) {
                                        this.$message({
                                            message: '提交成功,可前往项目列表查看',
                                            type: 'success'
                                        })
                                        // 成功后，触发重新查询下数据
                                        // this.query()
                                    } else {
                                        this.$message({
                                            message: res.data.errorMsg,
                                            type: 'warning'
                                        })
                                    }
                                    this.dialogVisible = false
                                }
                            )
                        })
                    } else {
                        console.log('输入格式错误!!')
                        return false
                    }
                })
            },
            // 清空表单
            resetForm (formName) {
                this.$confirm('此操作将情况所有输入框中内容?', '确认清除？', {
                    confirmButtonText: '确认',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$refs[formName].resetFields()
                })
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
