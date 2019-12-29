<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="menu-box"
            mode="horizontal"
            router
            @select="handleSelect"
            background-color="#489cf6"
            text-color="#fff"
            active-text-color="#ffd04b">
            <div class="menu-box__doc">
                <img src="../assets/images/logo.png" alt="中山大学课程项目组队管理平台">
                <p>中山大学课程项目组队信息管理平台</p>
            </div>
            <el-menu-item class="menu-box__new" index="/home/NewPro" @click="hideHint">新建项目</el-menu-item>
            <el-menu-item class="menu-box__list" index="/home/ProList" @click="hideHint">项目列表</el-menu-item>
            <el-menu-item class="menu-box__mine" index="/home/MyPro" @click="hideHint">我的项目</el-menu-item>
        </el-menu>
        <div class="hint" v-show="isHintShow">
            <p class="hint__header">操作指引</p>
            <div class="hint__content">
                <ul>
                    <li>
                        <p>如果您有自己的想法，可以点击右上方菜单-新建项目，填写相关项目信息，建立一组</p>
                    </li>
                    <li>
                        <p>如果您暂时没有什么想法，可以点击右上方菜单-项目列表，查看已有的项目组队情况，选择您喜欢的队伍，联系该队伍的组长获取到该项目的密码，点击加入该组按钮，输入项目密码进行加入操作</p>
                    </li>
                    <li>
                        <p>点击右上方菜单-我的项目，可以查看您加入的或者创建的项目组队情况</p>
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
                activeIndex: '',
                isHintShow: true
            }
        },

        methods: {
            handleSelect (key, keyPath) {
                console.log(key, keyPath)
            },
            hideHint () {
                this.isHintShow = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu-box {
        margin: 0 5% 10px 5%;
        width: auto;
        height: 60px;
        display: flex;

        &__new, &__list, &__mine {
            flex: 1;
            font-size: 16px;
            text-align: center;
            font-weight: bold;
        }

        &__doc {
            width:70%;
            display: flex;
            align-items: center;
            font-size: 20px;
            /*margin-right: 50px;*/

            img {
                width: 50px;
                border-radius: 50%;
                margin: 0 20px;
            }
            p{
                font-weight:bold;
            }
        }
    }

    .hint {
        border: 1px solid #f0f0f0;
        margin: 50px 20% 0 20%;
        border-radius: 20px;
        background-color: #60C0FF;
        padding-bottom: 20px;

        &__header {
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid #f9f9f9;
            padding-bottom: 20px;
        }

        &__content {
            font-size: 18px;
            margin: 0 20px;
        }
    }

</style>
