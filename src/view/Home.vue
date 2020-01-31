<template>
    <div class="home">
        <el-menu
            :default-active="activeIndex"
            class="menu-box"
            mode="horizontal"
            router
            background-color="#489cf6"
            text-color="#fff"
            active-text-color="#ffd04b">
            <div class="menu-box__info">
                <img src="../assets/images/icon-tou.png" alt="当前用户">
                <p class="menu-box__info__user">用户：<span>{{ currentUser }}</span></p>
                <p class="menu-box__info__task"><span>{{ taskName }}</span></p>

            </div>
            <div class="menu-box__tab">
                <el-menu-item class="menu-box__tab__new" index="/home/newGroup" @click="hideHint">新建小组</el-menu-item>
                <el-menu-item class="menu-box__tab__list" index="/home/groupList" @click="hideHint">小组列表</el-menu-item>
                <el-menu-item class="menu-box__tab__mine" index="/home/myGroup" @click="hideHint">我的小组</el-menu-item>
            </div>
        </el-menu>
        <div class="hint" v-show="isHintShow">
            <p class="hint__header">操作指引</p>
            <div class="hint__content">
                <ul>
                    <li>
                        <p>1.点击新建小组，填写相关信息，即可创建一个队伍，并且成为该组组长</p>
                    </li>
                    <li>
                        <p>2.点击小组列表，可查看已有的小组列表，选择自己想加入的小组，向组长获取到该小组的密码，即可自由加入或者离开该小组；每人只能加入一个小组</p>
                    </li>
                    <li>
                        <p>3.点击我的小组，可查看自己所在的所有小组</p>
                    </li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {
                currentUser: '',
                activeIndex: '',
                isHintShow: true,
                taskName: ''
            }
        },
        mounted () {
            this.isHintShow = String(this.$route.path) === '/home'
            this.getCurInfo()
        },
        methods: {
            hideHint () {
                this.isHintShow = false
            },
            getCurInfo () {
                this.currentUser = sessionStorage.getItem('username')
                this.taskName = sessionStorage.getItem('curTask')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("../assets/images/bodybg.jpg") no-repeat;
        background-size: 100% 100%;
    }
    .menu-box {
        width:100%;
        position: relative;
        background-image: linear-gradient(to bottom right, #2ba4e5, #a5ff8b);

        &__info{
            height:48px;
            float: left;
            padding-left: 20px;
            /*background-image: linear-gradient(to bottom right, #2ba4e5, #ff8e79);*/

            img{
                height:42px;
                position: relative;
                margin:3px 5px;
            }
            &__user{
                color:#fff;
                display: inline-block;
                margin-right:20px;
                position: relative;
                top:-20px;
            }
            &__task{
                color:#fff;
                display: inline-block;
                position: relative;
                top:-20px;
            }

        }
        &__tab{
            float: right;
            width:auto;
            padding: 0 15px;
            &__new, &__list, &__mine {
                width:110px;
                display: inline-block;
                text-align: center;
                font-weight: bold;
                color: #000 !important;
                font-size: 16px;
                border-radius: 30px;
            }
            .el-menu-item{
                background: none !important;
                /*background-image: linear-gradient(to bottom right, #2ba4e5, #ff8e79);*/
            }
            .el-menu-item:active, .el-menu-item:hover, .el-menu-item:visited{
                cursor: pointer;
                background-image: linear-gradient(to bottom right, #81e5a0, #e3adff) !important;
            }

        }
    }

    .hint {
        border: 1px solid #f0f0f0;
        border-radius: 20px;
        margin:50px auto 0 auto;
        width:calc(200px + 30%);
        background-image: linear-gradient(to bottom right, #2ba4e5, #ff8e79);
        padding-bottom: 20px;
        font-weight: bold;

        &__header {
            font-size: 30px;
            font-weight: 600;
            text-align: center;
            border-bottom: 1px solid #f9f9f9;
            padding-bottom: 20px;
        }

        &__content {
            font-size: 16px;
            margin: 0 10px 5px 5px;
        }
    }

</style>
