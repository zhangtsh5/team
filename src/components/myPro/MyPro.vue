<template>
    <div class="my-pro">

        <el-table
            :data="testData"
            border
            height="400"
            style="width: 100%">

            <el-table-column
                align="center"
                prop="courseName"
                label="单位名称（课程名）"
                width="160">
            </el-table-column>

            <el-table-column
                align="center"
                prop="id"
                label="项目编号"
                width="80">
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
                    width="90">
            </el-table-column>

            <el-table-column
                align="center"
                prop="proName"
                label="项目名称"
                width="240">
            </el-table-column>

            <el-table-column
                align="center"
                prop="group.length"
                label="小组人数"
                width="60">
            </el-table-column>

            <el-table-column
                align="center"
                label="组员信息"
                width="240">
                <template slot-scope="scope">
                    <ul>
                        <li
                            :key="index"
                            v-for="(item, index) in scope.row.group">
                            <span>{{ item.studentID }}</span>
                            -
                            <span>{{ item.studentName }}</span>
                            <span>
                                <el-button type="primary" icon="el-icon-delete" class="delete" plain></el-button>
                            </span>
                        </li>
                    </ul>
                </template>
            </el-table-column>

            <el-table-column
                align="center"
                label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" plain>编辑</el-button>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'MyPro',
        data () {
            return {
                testData: [
                    {
                        courseName: '计算机网络实验',
                        id: '001',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究一',
                        group: [
                            {
                                studentID: '15352001',
                                studentName: '张三'
                            },
                            {
                                studentID: '15352002',
                                studentName: '李四'
                            },
                            {
                                studentID: '15352003',
                                studentName: '王五'
                            },
                            {
                                studentID: '15352003',
                                studentName: '赵六'
                            }
                        ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '016',
                        leaderName: '张xx',
                        proName: '网络传输速率研究四网络传输速率研究四',
                        group: [
                            {
                                studentID: '15352001',
                                studentName: '张三'
                            },
                            {
                                studentID: '15352002',
                                studentName: '李四'
                            },
                            {
                                studentID: '15352003',
                                studentName: '王五'
                            },
                            {
                                studentID: '15352003',
                                studentName: '赵六'
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]
                    }
                ]

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
</style>
