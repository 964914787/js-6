<template>
<el-row>
    <header>
        <div class="headline">萝卜多后台管理系统</div>
        <div class="flex-box flex-center">
            <el-link href="https://element.eleme.io" target="_blank">猎头</el-link>
            <div class="vertical-line"></div>
            <i class="el-icon-switch-button" style="transform:scale(2);margin: 0 2rem 0 0;"></i>
        </div>

    </header>
    <el-col :span="12" style="width:300px">
        <el-menu default-active="2" class="el-menu-vertical-demo side-bar" background-color="#545c64" style="width:300px" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span>信息管理</span>
                </template>
                <el-menu-item index="2" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">无</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span>Article管理</span>
                </template>
                <el-menu-item index="4" @click="btn()">
                    <span slot="title">Article列表</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span>人才管理</span>
                </template>
                <el-menu-item index="6" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">无</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="7">
                <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span>推荐管理</span>
                </template>
                <el-menu-item index="8" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">无</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="9">
                <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span>推荐管理</span>
                </template>
                <el-menu-item index="10" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">无</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="11">
                <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="12" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">无</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="13">
                <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span>内容管理</span>
                </template>
                <el-menu-item index="14" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">无</span>
                </el-menu-item>
            </el-submenu>

        </el-menu>
    </el-col>
</el-row>
</template>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        btn() {
            this.$router.push({
                path: '/articlelist'
            });
        }
    }
}
</script>

<style src="../assets/reset.css"></style><style>
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

/*正文部分*/
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 100%;
    border-bottom: 2px solid #DCDFE6;
}

.headline {
    height: 5rem;
    width: 300px;
    background: #545c64;
    color: #fff;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.vertical-line {
    width: 0;
    height: 2.2rem;
    border: 0.5px solid #d0d4d9;
    margin: 0 2rem;
}

.side-bar {
    width: 30rem;
    height: 75.5em;
}
</style>
