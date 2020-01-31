<template>
    <div class="create-wrap">

        <el-form
                ref="newGroup"
                :model="newGroup"
                :rules="rules"
                status-icon
                label-width="120px"
                :label-position="labelPosition">

            <el-row>
                <el-col :span="12">
                    <div>
                        <el-form-item label="组长姓名" prop="leaderName">
                            <el-input v-model="newGroup.leaderName"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div>
                        <el-form-item label="组长学号" prop="leaderID">
                            <el-input v-model="newGroup.leaderID"></el-input>
                        </el-form-item>
                    </div>
                </el-col>

            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="专业" prop="major">
                        <el-input v-model="newGroup.major"></el-input>
                    </el-form-item>

                </el-col>

                <el-col :span="12">
                    <div>
                        <el-form-item label="小组人数" prop="maxCount">
                            <el-input v-model="newGroup.maxCount"></el-input>
                        </el-form-item>
                    </div>
                </el-col>

            </el-row>

<!--            <el-form-item label="项目名称" prop="proName">-->
<!--                <el-input v-model="newGroup.proName" placeholder="例：用于课程组队PC端网站设计"></el-input>-->
<!--            </el-form-item>-->

<!--            <el-form-item label="项目描述" prop="proDesc">-->
<!--                <el-input type="textarea" v-model="newGroup.proDesc"-->
<!--                          placeholder="例：采用vue.js开发的一个商城网站......"></el-input>-->
<!--            </el-form-item>-->

            <el-row>
                <el-col :span="12">
                    <div>
                        <el-form-item label="加入密码" prop="password">
                            <el-input type="password" placeholder="请输入密码"
                                      v-model="newGroup.password"
                                      autocomplete="off"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="newGroup.checkPass"
                                      placeholder="请确认密码"
                                      autocomplete="off"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>

            <el-row class="create-wrap__btn">
                <el-button type="primary" @click="submitForm('newGroup')">立即创建</el-button>
                <el-button type="danger" @click="resetForm('newGroup')">重置输入</el-button>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'NewGroup',
        data () {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    if (this.newGroup.checkPass !== '') {
                        this.$refs.newGroup.validateField('checkPass')
                    }
                    callback()
                }
            }
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.newGroup.password) {
                    callback(new Error('两次输入密码不一致!'))
                } else {
                    callback()
                }
            }
            return {
                labelPosition: 'right',
                dialogVisible: false,
                newGroup: {
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
                    // proName: [
                    //     {type: 'string', required: true, message: '请输入项目名称', trigger: 'change'}
                    //
                    // ],
                    // proDesc: [
                    //     {type: 'string', required: true, message: '请输入项目描述', trigger: 'change'}
                    //
                    // ],
                    password: [
                        // eslint-disable-next-line standard/object-curly-even-spacing
                        { validator: validatePass, trigger: 'change', required: true}
                    ],
                    checkPass: [
                        // eslint-disable-next-line standard/object-curly-even-spacing
                        { validator: validatePass2, trigger: 'change', required: true}
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
                                taskName: this.$parent.taskName,
                                leaderName: this.newGroup.leaderName,
                                leaderID: this.newGroup.leaderID,
                                major: this.newGroup.major,
                                // proName: this.newGroup.proName,
                                members: this.newGroup.members,
                                maxCount: this.newGroup.maxCount,
                                // proDesc: this.newGroup.proDesc,
                                password: this.newGroup.password
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
        width:calc(160px + 50%);
        /*border:1px solid red;*/
        position: absolute;
        left:50%;
        top:180px;
        transform: translate(-50%,0);

        .el-form {
            .el-col{
                height:52px;
                .el-form-item{
                    margin: 0 0 5px 0;
                    .el-form-item__content{
                        margin-left: 70px !important;
                    }
                    .el-input{
                        width:100%;
                        .el-input__inner{
                            border-radius: 0;
                            border: none !important;
                            height:50px;
                            padding: 0 5px 0 10px !important;
                        }
                    }
                    .el-form-item__label {
                        text-align: center;
                        font-weight: bold;
                        line-height: 50px;
                        padding-right: 0 !important;
                        background-image: linear-gradient(to bottom right, #65b5e5, #ff9866);
                        width:70px !important;
                        /*width: 100%;*/
                        /*margin-left: 50px;*/
                    }

                    .el-form-item__error {
                        display: none;
                    }
                }
                .el-form-item__label:before{
                    display: none;
                }
            }
        }
        &__btn{
            width: 100%;
            text-align: center;
            padding: 15px 0;
        }

    }
</style>
