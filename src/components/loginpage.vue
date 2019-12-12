<template>
<body>
    <div class="login-box flex-box flex-down">
        <div class="title">后台登录</div>
        <div class="input-bar flex-box ">
            <div class="bg-zhanghao"></div>
            <div class="vertical-line"></div>
            <input type="text" class="input-box" placeholder="用户名" v-model="username">
        </div>
        <div class="input-bar flex-box ">
            <div class="bg-zhanghao"></div>
            <div class="vertical-line"></div>
            <input type="password" class="input-box" placeholder="密码" v-model="password">
        </div>
        <el-row>
            <el-button type="primary btnone" @click="btn()">登录</el-button>
        </el-row>

    </div>

    <!-- <router-link v-wechat-title="$route.meta.title" to="backstage"></router-link> -->
</body>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }

    },

    methods: {
        btn() {
            if (this.username === '' || this.password === '') {
                alert('账号或密码不能为空');
            } else {
                let data = {
                    "name": this.username,
                    "pwd": this.password
                };
                console.log(data)
                console.log(this.username)
                console.log(this.password)
                this.$axios.post('/a/a/login', this.$qs.stringify(data), )

                    .then(res => {
                        if (res.data.code == 0) {
                            this.$router.push({path:'/backstage'});
                        } else {
                            alert("账号或密码错误")
                        }
                        console.log(res.manager)
                    })
                    .catch(err => {
                        alert('登录错误')
                    })

            }
        }

    }

}
</script>

<style src="../assets/reset.css"></style><style scoped>
html {
    height: 100%;
    font-size: 62.5%
}

body {
    background: url(../assets/beijing.png);
    width: 100%;
    height: 100vmin;
    display: flex;
    justify-content: center;
    align-items: center;

}

/* 通用部分*/
.flex-box {
    display: flex
}

.flex-center {
    justify-content: center;
    align-items: center;
}

.flex-space {
    justify-content: space-between;
    align-items: center;
}

.flex-down {
    flex-direction: column;
}

.backgr {
    background: #29bde0;
    width: 100%;
}

.flex-wrap {
    flex-wrap: wrap;
}

/* 页面布局*/
.login-box {
    width: 53rem;
    height: 39rem;
    background: #d0d4d9;
    align-items: center;
}

.title {
    color: #03a9f4;
    font-size: 3rem;
    margin: 3.5rem 0 0 0;
}

.input-bar {
    margin: 4rem 0 0 0;
    width: 43rem;
    height: 6rem;
    background: #fff;
    align-items: center;
}

.input-box {
    width: 20rem;
    height: 4rem;
    margin: 0 0 0 1.7rem;
    border: none;
    font-size: 1.7rem;
}

.bg-zhanghao {
    width: 18px;
    height: 17px;
    background: url('../assets/css_sprites-6-1.png') -10px -10px;
    margin: 0 1.7rem;
}

.bg-mima {
    width: 15px;
    height: 18px;
    background: url('../assets/css_sprites-6-1.png') -10px -47px;
    margin: 0 1.7rem;
}

.vertical-line {
    width: 0;
    height: 2.2rem;
    border: 0.5px solid #d0d4d9;
}

.btnone {
    margin: 4rem 0 0 0;
    width: 35rem;
    height: 5rem;
}
</style>
