<template>
<div class="hello">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <img src="../assets/logo.png">
    <br>
    <h1>{{ msg }}</h1>
    <h2>
        <router-link v-wechat-title="$route.meta.title" to="loginpage">进入</router-link>
    </h2>

</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: '成功搭建，开始进入任务6'
        }
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1,
h2 {
    font-weight: normal;
}

a {
    color: #42b983;
}
</style>
