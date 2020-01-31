<template>
    <div class="my-pro">
        <el-table
                :data="myGroupList"
                border
                style="width: 100%">
            <el-table-column
                    align="center"
                    prop="taskName"
                    label="项目">
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="major"
                    label="专业">
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="leaderName"
                    label="组长姓名"
                    width="100">
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="leaderID"
                    label="组长学号"
                    width="100">
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="maxCount"
                    label="人数上限"
                    width="120"
            >
            </el-table-column>

            <!--            <el-table-column-->
<!--                    align="center"-->
<!--                    prop="proName"-->
<!--                    label="项目名称">-->
<!--            </el-table-column>-->

<!--            <el-table-column-->
<!--                    align="center"-->
<!--                    prop="proDesc"-->
<!--                    label="项目描述">-->
<!--            </el-table-column>-->

            <el-table-column
                align="center"
                class="pro-members"
                width="220"
                label="组员信息">
                <template slot-scope="scope">
                    <ul>
                        <li
                            :key="index"
                            v-for="(item, index) in scope.row.members">
                            <span class="pro-members__id">{{ item.studentID }}</span>
                            <span class="pro-members__name">{{ item.studentName }}</span>
                            <span class="pro-members__delete-btn">
                                <el-button type="primary" icon="el-icon-delete" class="delete" plain @click="deleteMember(scope.row, index)"></el-button>
                            </span>
                        </li>
                    </ul>
                </template>
            </el-table-column>

            <el-table-column
                align="center"
                width="180"
                label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" plain @click="addMember(scope.row)">添加组员</el-button>
                    <el-button size="small" type="danger" plain @click="deleteGroup(scope.row)">删除小组</el-button>
                </template>
            </el-table-column>

        </el-table>
        <join v-if="dialogShow" @whtchChild2="getMyGroupList"></join>

    </div>
</template>

<script>
    import Join from '../dialog/Join'
    export default {
        name: 'MyPro',
        data () {
            return {
                username: '',
                password: '',
                myGroupList: [],
                currentMembers: [],
                delMemberRow: null, // 删除队员项目所在行
                currentIndex: 0,
                delRow: null, // 要删除的项目所在行
                // 新增组员信息
                newMember: {
                    studentName: '',
                    studentID: ''
                },
                // 删除的组员信息
                delMember: {
                    studentName: '',
                    studentID: ''
                },
                dialogShow: false,
                dialogLabelPosition: 'right',
                // 要添加组员的项目所在行
                addMemberRow: null,
                currentTaskName: ''
            }
        },
        components: {
            Join
        },
        mounted () {
            this.getMyGroupList()
        },
        methods: {
            // 获取自己创建的小组
            getMyGroupList () {
                const leaderID = {
                    leaderID: sessionStorage.getItem('username')
                }
                this.$http.post('user/getMyGroup', leaderID).then((res) => {
                    if (res.data.code === 1) {
                        this.$message({
                            message: '请求项目列表失败',
                            type: 'warning'
                        })
                    } else {
                        this.myGroupList = res.data.list
                    }
                })
            },
            // 删除选定项目的选定组员
            deleteMember (row, index) {
                this.$confirm('确认从项目中移除该组员?', '提示', {
                    confirmButtonText: '确认',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.delMemberRow = row // 选中的项目行
                    this.currentMembers = row.members
                    this.currentIndex = index // 选中的组员索引
                    this.delMember.studentID = this.currentMembers[this.currentIndex].studentID

                    const obj = {
                        'id': this.delMemberRow._id,
                        'studentID': this.delMember.studentID
                    }

                    this.$http.post('/user/delMember', obj).then((res) => {
                        console.log('obj')
                        if (Number(res.data.code) === 1) {
                            this.$message({
                                message: res.data.errorMsg,
                                type: 'warning'
                            })
                        } else {
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            })
                            this.getMyGroupList()
                            this.getProList()
                        }
                    })
                })
            },
            // 删除项目
            deleteGroup (row) {
                this.$confirm('确认删除当前项目?', '提示', {
                    confirmButtonText: '确认',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.delRow = row
                    const obj = {
                        'id': this.delRow._id
                    }
                    this.$http.post('/user/del', obj).then((res) => {
                        console.log(res.data)
                        if (Number(res.data.code) === 1) {
                            this.$message({
                                message: res.body.errorMsg,
                                type: 'warning'
                            })
                        } else {
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            })
                            this.getProList()
                        }
                    })
                })
            },
            // 保存当前项目行
            addMember (row) {
                this.dialogShow = true
                this.addMemberRow = row
            }
        }
    }
</script>

<style lang="scss">
    .delete {
        margin: 5px 20px;
        padding: 2px 10px;
    }

    ul, li {
        padding: 0;
        margin: 0;
        list-style: none
    }
    .el-table{
        height:360px;
    }

    .my-pro {
        margin: 15px 5% 0 5%;
        overflow-x: auto;
        overflow-y: auto;
        .el-table th>.cell{
            height:40px !important;
            line-height: 40px !important;
            background: #aeaeae;
            color:#fff;
        }
        .el-table th{
            padding: 0;
        }

    }
    .el-table th{
        text-align: center;
    }
    .el-table .cell{
        padding-right: 0;
        ul li{
            position: relative;
            height:22px;
            line-height: 22px;
        }
    }
    .operate{
        width:80px;
        height:80px;
        border:1px solid red;
    }
    .el-table td, .el-table th{
        padding: 5px 0;
    }

    .el-button{
        /*margin:px 0 !important;*/
        margin: 0 2px !important;
    }
    .el-button--small{
        border-radius: 5px;
        padding: 8px 12px;
        width:70px;
        font-size: 10px;
        margin:5px 0;
    }
    ul, li {
        padding: 0;
        margin: 0;
        list-style: none
    }
    .pro-members{
        height:18px;
        line-height: 18px;
        ul li{
            position: relative;
        }
        &__id{
            display: inline-block;
            width:70px;
            height:20px;
            position: absolute;
            left:0;
        }
        &__name{
            display: inline-block;
            width:70px;
            height:20px;
            position: absolute;
            left:80px;

        }
        &__delete-btn{
            left:160px;
            position: absolute;
        }
    }

</style>
