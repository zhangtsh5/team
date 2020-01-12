<template>
    <div class="my-pro">
        <el-table
                :data="myProList"
                height="400"
                border
                style="width: 100%">

            <el-table-column
                    align="center"
                    prop="major"
                    label="专业">
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="leaderName"
                    label="组长姓名"
                    width="90">
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="leaderID"
                    label="组长学号"
                    width="100">
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="proName"
                    label="项目名称">
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="proDesc"
                    label="项目描述">
            </el-table-column>

            <el-table-column
                align="center"
                class="pro-members"
                width="240"
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
                width="160"
                label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" plain @click="addMember(scope.row)">添加队友</el-button>
                    <el-button size="small" type="danger" plain @click="deletePro(scope.row)">删除项目</el-button>
                </template>
            </el-table-column>

        </el-table>
        <join v-if="dialogShow" @whtchChild2="getMyProList"></join>

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
                myProList: [],
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
                addMemberRow: null
            }
        },
        components: {
            Join
        },
        mounted () {
            this.getCookie()
            this.getMyProList()
        },
        methods: {
            // 获取自己创建的项目
            getMyProList () {
                const leaderID = {
                    leaderID: this.username
                }
                this.$http.post('user/getMyPro', leaderID).then((res) => {
                    if (res.data.code === 1) {
                        this.$message({
                            message: '请求项目列表失败',
                            type: 'warning'
                        })
                    } else {
                        this.myProList = res.data.list
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
                            this.getMyProList()
                            this.getProList()
                        }
                    })
                })
            },
            // 删除项目
            deletePro (row) {
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
            },
            getCookie () {
                if (document.cookie.length > 0) {
                    let arr = document.cookie.split('; ') // 这里显示的格式需要切割一下自己可输出看下
                    for (let i = 0; i < arr.length; i++) {
                        let arr2 = arr[i].split('=') // 再次切割
                        // 判断查找相对应的值
                        if (String(arr2[0]) === 'userName') {
                            this.username = arr2[1] // 保存到保存数据的地方
                        } else if (String(arr2[0]) === 'userPwd') {
                            this.password = arr2[1]
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .delete {
        margin: 5px 20px;
        padding: 2px 10px;
    }

    ul, li {
        padding: 0;
        margin: 0;
        list-style: none
    }

    .my-pro {
        margin: 20px 5%;
        /*border:2px solid #5f4237;*/

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
