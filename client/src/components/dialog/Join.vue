<template>
    <div class="join-dialog">
        <div class="join-dialog__input">
            <el-form
                :rules="rules"
                status-icon
                label-width="45px"
                :label-position="dialogLabelPosition">

                <el-form-item>
                    <el-input v-model="newMember.studentName" placeholder="添加组员姓名"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-input v-model="newMember.studentID" placeholder="添加组员学号"></el-input>
                </el-form-item>

                <el-form-item class="join-dialog__input__password">
                    <el-input v-model="password" placeholder="请输入项目密码" type="password"></el-input>
                </el-form-item>

            </el-form>
        </div>
        <div class="join-dialog__btn">
            <el-button type="primary" @click="joinTeam">确认</el-button>
            <el-button type="danger" @click="closeDialog">取消</el-button>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Join',
        data () {
            return {
                newMember: {
                    studentID: '',
                    studentName: ''
                },
                password: ''
            }
        },
        methods: {
            closeDialog () {
                this.$parent.dialogShow = false
            },
            joinTeam () {
                if (!this.newMember.studentID) {
                    this.$message({
                        message: '请输入组员学号',
                        type: 'warning'
                    })
                }
                if (!this.newMember.studentName) {
                    this.$message({
                        message: '请输入组员姓名',
                        type: 'warning'
                    })
                }
                if (!this.password) {
                    this.$message({
                        message: '请输入项目密码',
                        type: 'warning'
                    })
                } else {
                    // 判断人数是否达到上限 队长也算一人
                    if (this.$parent.addMemberRow.members.length >= this.$parent.addMemberRow.maxCount - 1) {
                        this.$message({
                            message: '对不起，该组人数已达上限',
                            type: 'warning'
                        })
                    } else {
                        // 项目密码错误 无加入权限
                        if (String(this.password) !== this.$parent.addMemberRow.password) {
                            this.$message({
                                message: '项目密码错误，无法加入',
                                type: 'warning'
                            })
                        } else {
                            const obj = {
                                'id': this.$parent.addMemberRow._id,
                                'newMember': this.newMember,
                                'taskName': this.$parent.currentTaskName
                            }
                            this.$http.post('/user/join', obj).then((res) => {
                                console.log(res.data)
                                console.log('1111111111')
                                if (Number(res.data.code) === 0) {
                                    this.$message({
                                        message: '恭喜你，成功加入该组！',
                                        type: 'success'
                                    })
                                    setTimeout(() => {
                                        this.$parent.dialogShow = false
                                        this.$emit('watchChild1', '更新项目列表')
                                        this.$emit('watchChild2', '更新我的项目列表')
                                    }, 100)
                                } else if (Number(res.data.code) === 2) {
                                    this.$message({
                                        message: res.data.errorMsg,
                                        type: 'warning'
                                    })
                                } else {
                                    this.$message({
                                        message: res.data.errorMsg,
                                        type: 'warning'
                                    })
                                }
                            })
                        }
                    }
                }
            }

        }
    }
</script>

<style lang="scss" scoped>
    .join-dialog{
        width:350px;
        height:140px;
        position: absolute;
        top:180px;
        left:50%;
        transform: translate(-50%,0);
        &__input{
            display: inline-block;
            width:240px;
            height:100%;
            margin: 0;
            padding: 0;
            position: absolute;
            background-image: linear-gradient(to bottom right, #e3adff, #81e5a0) !important;
            top:0;
            left:0;
            .el-form{
                .el-form-item{
                    margin: 5px 15px;
                    .el-form-item__content{
                        margin:0 !important;
                    }
                }
                .el-input{
                    padding: 0;
                    line-height: 30px;
                    .el-input__inner{
                        height:30px;
                        width:200px;
                    }
                }
            }
            &__password{
                .el-input__inner{
                    width:140px !important;
                }
            }
        }
        &__btn{
            display: inline-block;
            width:120px;
            height:100%;
            background-image: linear-gradient(to bottom right, #81e5a0, #e3adff) !important;
            margin-left: -10px;
            padding: 0;
            position: absolute;
            right:0;
            top:0;
            .el-button{
                border-radius: 15px;
                padding: 10px 18px;
                margin:5px 25px !important;
                position: relative;
                top:20px;
            }
        }
    }
</style>
