<template>
    <div>
        <div class="task" :style="styleOpacity">
            <p class="task__header">
                Projects
            </p>
            <div class="task__list">
                <ul v-show="!isEmpty" @click="handleClick">
                    <li
                        v-for="(item, index) in taskList"
                        :key="index"
                        :data-index="index">
                        <div class="task__list__item">
                            <h2>{{ index + 1 }}</h2>
                            <p>{{ item.taskName }}</p>
                        </div>
                    </li>
                </ul>
                <p v-show="isEmpty" class="task__list__empty">当前暂时没有需要组队完成的项目！</p>
            </div>
        </div>
        <enter-task v-show="dialogShow" @toDetail="goDetail"></enter-task>
    </div>
</template>

<script>
    import Vue from 'vue'
    import EnterTask from '../components/dialog/EnterTask'
    export default {
        name: 'Tasks',
        data () {
            return {
                dialogShow: false,
                mockData: [
                    {
                        taskName: '计算机网络实验一'
                    },
                    {
                        taskName: '计算机网络实验二'
                    },
                    {
                        taskName: '计算机网络实验三'
                    },
                    {
                        taskName: '计算机网络实验四'
                    },
                    {
                        taskName: '计算机网络实验五'
                    },
                    {
                        taskName: '计算机网络实验六'
                    },
                    {
                        taskName: '计算机网络实验七'
                    },
                    {
                        taskName: '计算机网络实验八'
                    },
                    {
                        taskName: '计算机网络实验九'
                    },
                    {
                        taskName: '计算机网络实验十'
                    },
                    {
                        taskName: '计算机网络实验八'
                    },
                    {
                        taskName: '计算机网络实验九'
                    },
                    {
                        taskName: '计算机网络实验十'
                    },
                    {
                        taskName: '计算机网络实验十一'
                    },
                    {
                        taskName: '计算机网络实验十二'
                    },
                    {
                        taskName: '计算机网络实验十三'
                    },
                    {
                        taskName: '计算机网络实验十四'
                    },
                    {
                        taskName: '计算机网络实验十五'
                    }
                ],
                taskList: [],
                isEmpty: false,
                currentTask: '',
                currentTaskPassword: '',
                styleOpacity: {
                    opacity: '1'
                }
            }
        },
        components: {
            EnterTask
        },
        mounted () {
            this.getTasks()
        },
        methods: {
            getTasks () {
                const obj = {}
                this.$http.post('/task/getTaskList', obj).then((res) => {
                    if (res.data.code === 1) {
                        this.$message({
                            message: '请求任务列表失败',
                            type: 'warning'
                        })
                    } else {
                        this.taskList = res.data.list
                        if (Number(this.taskList.length) === 0) {
                            this.isEmpty = true
                        }
                    }
                })
            },
            handleClick (e) {
                const dom = e.target
                const index = dom.getAttribute('data-index')
                this.currentTask = this.taskList[index].taskName // 当前项目名
                this.currentTaskPassword = this.taskList[index].password
                console.log(this.currentTask)
                Vue.prototype.$curTask = this.currentTask
                this.open()
            },
            open () {
                this.styleOpacity.opacity = 0.4
                this.dialogShow = true
            },
            goDetail (inputPass) {
                if (String(inputPass) === String(this.currentTaskPassword)) {
                    this.$router.push({path: '/home'})
                } else {
                    this.$message({
                        message: '密码错误，您没有权限进入',
                        type: 'warning'
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .task{
        opacity: 0.3;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        background: url("../assets/images/bodybg.jpg") no-repeat;
        background-size: 100% 100%;
        &__header{
            margin:2% 10% 20px 10%;
            padding-left: 20px;
            height: 80px;
            display: flex;
            align-items: center;
            font-size: 40px;
            font-weight: bolder;
            font-style: italic;
            color: #ff7645;
            border-bottom: 2px solid #fff6d2;
        }
        &__list{
            margin:30px 10% 20px 10%;
            position: relative;
            height:520px;
            padding:5px 0;
            ul{
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                overflow-y:auto;
                li{
                    position: relative;
                    width:25%;
                    height:150px;
                    list-style: none;
                    /*border:1px solid red;*/
                    margin: 0;
                }
            }
            &__item{
                /*事件委托防止点击获取到的dom不是li*/
                z-index:-999;
                width:96%;
                height:90%;
                position: absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                text-align: center;
                background-image: linear-gradient(to bottom right, #f98152, #b2e5c6);
                border-radius: 10px;
                h2{
                    font-weight: bold;
                    color: #fff;
                    margin:5px auto;
                }
                p{
                    color: #fff;
                    font-weight: bold;
                }
            }
            &__item:hover, &__item:active{
                background: #60c0ff;
                cursor:pointer;
            }
            &__empty{
                color: #ff7645;
                font-size: 16px;
                font-weight: bolder;
            }
        }
    }
</style>
