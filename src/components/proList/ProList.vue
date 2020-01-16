<template>
    <div>
        <el-row class="top-box">
            <el-col :span="4">
                <div class="top-box__print">
                    <el-button size="small" type="primary" plain @click="exportToExcel">下载表格</el-button>
                </div>

            </el-col>
        </el-row>
        <div class="pro-list">
            <el-table
                :data="proList"
                height="500"
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
                    prop="leaderName"
                    label="组长姓名"
                    width="80">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="leaderID"
                        label="组长学号"
                        width="100"
                >
                </el-table-column>

                <el-table-column
                    align="center"
                    prop="proName"
                    label="项目名称"
                >
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="maxCount"
                        label="人数"
                        width="60"
                >
                </el-table-column>

                <el-table-column
                        align="center"
                        label="组员信息"
                        width="180"
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
                        <el-button size="small" type="primary" plain @click="addMember(scope.row)">添加队友</el-button>
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
                addMemberRow: null
            }
        },
        components: {
            Join
        },
        created () {
            this.getProList()
        },
        methods: {
            getProList () {
                const obj = {}
                this.$http.post('/user/getList', obj).then((res) => {
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
                    const tHeader = ['专业', '组长姓名', '组长学号', '项目名称']
                    const filterVal = ['major', 'leaderName', 'leaderID', 'proName']
                    const list = this.proList
                    const data = this.formatJson(filterVal, list)
                    export_json_to_excel(tHeader, data, '项目列表excel')
                })
            },
            formatJson (filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            }
        }
    }
</script>

<style lang="scss">
    .top-box {
        margin: 0 5%;
        /*border:1px solid blue;*/
        border-radius: 5px;

        &__option {
            width: 120px;
            text-align: center;

            &__1, &__2 {
                text-align: center;
            }
        }
        &__print{
            text-align:center;
            position: absolute;
            right:0;
            .el-button--primary.is-plain{
                padding: 5px 10px !important;
            }
        }

        &__btn:hover, &__option:hover {
            background-color: #C6E2FF;
        }
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

    .pro-list {
        margin: 30px 5% 0 5%;

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
