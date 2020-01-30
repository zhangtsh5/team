<template>
    <div>
        <div class="print">
            <el-button type="primary" plain @click="exportToExcel">下载表格</el-button>
        </div>
        <div class="pro-list">
            <el-table
                :data="proList"
                border
                style="width: 100%">

                <el-table-column
                    align="center"
                    prop="major"
                    label="专业"
                >
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="taskName"
                        label="项目">
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
                        width="90"
                >
                </el-table-column>

<!--                <el-table-column-->
<!--                    align="center"-->
<!--                    prop="proName"-->
<!--                    label="项目名称"-->
<!--                >-->
<!--                </el-table-column>-->

                <el-table-column
                        align="center"
                        prop="maxCount"
                        label="人数上限"
                        width="80"
                >
                </el-table-column>

                <el-table-column
                        align="center"
                        label="组员信息"
                        width="220"
                >
                    <template slot-scope="scope">
                        <ul>
                            <li
                                class="pro-members"
                                :key="index"
                                v-for="(item, index) in scope.row.members">
                                <span class="pro-members__id">{{ item.studentID }}</span>
                                <span class="pro-members__name">{{ item.studentName }}</span>
                            </li>
                        </ul>
                    </template>
                </el-table-column>

                <el-table-column
                    align="center"
                    width="160"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button size="small" type="primary" plain @click="addMember(scope.row)">加入该组</el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>
        <join v-if="dialogShow" @watchChild1="getProList"></join>

    </div>
</template>

<script>
    import Join from '../dialog/Join'
    export default {
        name: 'ProList',
        data () {
            return {
                taskName: '',
                proList: [],
                searchInput: '',
                select: '',
                delRow: null,
                newMember: {
                    studentName: '',
                    studentID: ''
                },
                dialogShow: false,
                dialogLabelPosition: 'right',
                addMemberRow: null,
                currentTaskName: ''
            }
        },
        components: {
            Join
        },
        created () {
            this.taskName = this.$parent.taskName
            this.getCurrentTaskName()
            this.getProList()
        },
        updated () {
            this.$parent.getTaskName()
        },
        methods: {
            getCurrentTaskName () {
                this.currentTaskName = this.$parent.taskName
            },
            getProList () {
                const obj = {
                    taskName: this.currentTaskName
                }
                this.$http.post('/user/getGroupList', obj).then((res) => {
                    if (res.data.code === 1) {
                            this.$message({
                                message: '请求项目列表失败',
                                type: 'warning'
                            })
                    } else {
                        this.proList = res.data.list
                    }
                })
            },

            // 保存当前项目行
            addMember (row) {
                this.dialogShow = true
                this.addMemberRow = row
            },
            exportToExcel () {
                // excel数据导出
                require.ensure([], () => {
                    const {
                        // eslint-disable-next-line camelcase
                        export_json_to_excel
                    } = require('../../assets/js/Export2Excel')
                    const tHeader = ['专业', '项目名称', '组长姓名', '组长学号']
                    const filterVal = ['major', 'taskName', 'leaderName', 'leaderID']
                    const list = this.proList
                    const data = this.formatJson(filterVal, list)
                    export_json_to_excel(tHeader, data, '组队情况excel')
                })
            },
            formatJson (filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            }
        }
    }
</script>

<style lang="scss">
    body{
        overflow-y: auto;
        height:100%;
    }
    .group-list{
        height:100%;
        width:100%;
    }
    .print{
        position: absolute;
        left:50%;
        transform: translate(-50%,0);
        bottom:5px;
        .el-button{
            width:150px;
            background-image: linear-gradient(to bottom right, #e5754e, #e3adff) !important;
            border-radius: 30px;
            padding: 6px 15px;
            height:30px;
            font-size: 16px;
            font-weight: bolder;
            color: #9d4f33;
        }

    }
    .el-table{
        height:360px;
    }
    .el-table th{
        text-align: center;
    }
    .el-table .cell{
        padding-right: 0;
    }
    .operate{
        width:80px;
        height:80px;
        border:1px solid red;
    }
    .el-table td, .el-table th{
        padding: 5px 0;
    }

    ul, li {
        padding: 0;
        margin: 0;
        list-style: none
    }

    .pro-list {
        margin: 15px 5% 5% 5%;
        overflow-x: auto;
        overflow-y: auto;
        .el-table th > .cell{
            height:40px;
            line-height: 40px;
            background: #aeaeae;
            color:#fff;
        }
        .el-table th{
            padding: 0;
        }
    }
    .join-dialog {
        position: absolute;
        width:360px;
        left:50%;
        top:150px;
        transform: translate(-50%);
        background-color: #eeeeee;
        padding: 20px 0 0 0;
        text-align: center;
        border-radius: 5px;
        border: 2px solid #c8c9cc;
        .el-input__inner{
            width:120px;
        }
        .el-form-item__label{
            padding: 0;
        }
        .el-form-item{
            margin-bottom:10px;
        }

    }
    .pro-members{
        height:18px;
        line-height: 18px;
        position: relative;
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
            right:0;
        }
    }

</style>
