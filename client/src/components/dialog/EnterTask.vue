<template>
    <div class="enter-task">
        <p class="enter-task__hint">请输入项目密码：</p>
        <el-input class="enter-task__input" v-model="taskPassword" type="password"></el-input>
        <div class="enter-task__btn">
            <el-button type="primary" @click="enterTask">确认</el-button>
            <el-button type="danger" @click="closeDialog">取消</el-button>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'EnterTask',
        data () {
            return {
                taskPassword: ''
            }
        },
        methods: {
            closeDialog () {
                this.$parent.dialogShow = false
                this.$parent.styleOpacity.opacity = 1
            },
            enterTask () {
                this.$emit('toDetail', this.taskPassword)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .enter-task{
        border-radius: 30px;
        width:calc(200px + 30%);
        height:160px;
        position: absolute;
        top:180px;
        left:50%;
        transform: translate(-50%,0);
        background-image: linear-gradient(to bottom right, #ff5b25, #4f8ee5) !important;
        text-align: center;
        &__hint{
            color:#fff;
        }
        &__input{
            width: 80%;
            .el-input{

                .el-input__inner{
                    padding: 0 10px;
                }
            }
        }
        &__btn{
            margin:15px 0;
            .el-button{
                margin:0 20px;
            }
        }
    }
</style>
