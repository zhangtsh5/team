<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Login from './view/Login.vue'

    export default {
        name: 'App',
        components: {
            'v-login': Login
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        margin: 0;
        padding: 0;
    }
    body{
        zoom:1;
    }
</style>
