<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="menu-box"
      mode="horizontal"
      router
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item class="menu-box__new" index="/home/NewPro">新建项目</el-menu-item>
      <el-menu-item class="menu-box__list" index="/home/ProList">项目列表</el-menu-item>
      <el-menu-item class="menu-box__mine" index="/home/MyPro">我的项目</el-menu-item>
    </el-menu>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      activeIndex: '/home/MyPro'
    }
  },

  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
        .menu-box{
            margin:0 5% 50px 5%;
            width:auto;
            display:flex;
            &__new, &__list, &__mine{
                flex:1;
                font-size:16px;
            }
        }

</style>
