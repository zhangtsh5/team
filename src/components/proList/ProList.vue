<template>
    <div>
        <el-row class="top-box">
            <el-col :span="20">
                <div>
                    <el-input placeholder="请输入内容" v-model="searchInput">
                        <el-select v-model="select" slot="prepend" placeholder="请选择" class="top-box__option">
                            <el-option class="top-box__option__1" label="项目编号" value="1"></el-option>
                            <el-option class="top-box__option__2" label="组长姓名" value="2"></el-option>
                        </el-select>
                        <el-button type="primary" class="top-box__btn" slot="append" icon="el-icon-search">搜索
                        </el-button>
                    </el-input>
                </div>

            </el-col>
            <el-col :span="4">
                <div class="top-box__print">
                    <el-button type="primary" plain>打印表格</el-button>
                </div>

            </el-col>
        </el-row>

        <div class="pro-list">
            <el-table
                :data="testData"
                height="400"
                border
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
                    width="80">
                </el-table-column>

                <el-table-column
                    align="center"
                    label="组员信息"
                    width="180">
                    <template slot-scope="scope">
                        <ul>
                            <li v-for="(item, index) in scope.row.group"
                                :key="index">
                                {{ item.studentID }} - {{ item.studentName }}
                            </li>
                        </ul>
                    </template>
                </el-table-column>

                <el-table-column
                    align="center"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" plain>加入该组</el-button>
                    </template>

                </el-table-column>

            </el-table>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ProList',
        data () {
            return {
                searchInput: '',
                select: '',
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
                            }
                        ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '002',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究二',
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
                            }
                        ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '003',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究三',
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
                            }
                        ]

                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '004',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究四',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '005',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]

                    },
                    {
                        courseName: '计算机网络实验',
                        id: '006',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究二',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '007',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究三',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '008',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究四',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '009',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]

                    },
                    {
                        courseName: '计算机网络实验',
                        id: '010',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究二',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '011',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究三',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '012',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究四',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '013',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]

                    },
                    {
                        courseName: '计算机网络实验',
                        id: '014',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究二',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '015',
                        leaderName: '张xx',
                        leaderID: '12345678',
                        proName: '网络传输速率研究三',
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
                            }
                        ]
                        // group: [
                        //   {'15352001': '张三'},
                        //   {'15352002': '李四'},
                        //   {'15352003': '王五'},
                        //   {'15352004': '赵六'}
                        // ]
                    },
                    {
                        courseName: '计算机网络实验',
                        id: '016',
                        leaderName: '张xx',
                        leaderID: '12345678',
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
            text-align:right;
        }

        &__btn:hover, &__option:hover {
            background-color: #C6E2FF;
        }
    }

    ul, li {
        padding: 0;
        margin: 0;
        list-style: none
    }

    .pro-list {
        margin: 10px 5% 0 5%;
        /*border:2px solid blue;*/

    }

</style>
