<template>
<div>
    <header>
        <div class="headline">萝卜多后台管理系统</div>
        <div class="flex-box flex-center">
            <el-link href="https://element.eleme.io" target="_blank">猎头</el-link>
            <div class="vertical-line"></div>
            <i class="el-icon-switch-button" style="transform:scale(2);margin: 0 2rem 0 0;"></i>
        </div>
    </header>

    <el-container>

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
                    <el-menu-item index="4">

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

        <div class="flex-box flex-down flex-center" style="width:100%">
            <div class="search-bar">
                <div class="flex-box flex-space flex-wrap">
                    <div class="release-time flex-box" style=" align-items: center;">
                        <p>发布时间</p>
                        <div class="block" style="margin: 0 2rem;">              
                            <el-date-picker v-model="value3" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="timestamp">
                            </el-date-picker>
                        </div>
                        <p>——</p>
                        <div class="block" style="margin: 0 2rem;">
                            <el-date-picker v-model="value1" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="timestamp">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="release-time flex-box" style=" align-items: center;">
                        <p>类&#12288;&#12288;型</p>
                        <template>
                            <el-select v-model="value" placeholder="请选择" style="margin:0 1rem">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </template>

                    </div>
                </div>
                <div class="release-time flex-box" style=" align-items: center;">
                    <p>状&#12288;&#12288;态</p>
                    <template>
                        <el-select v-model="valuel" placeholder="请选择" style="margin:0 1rem">
                            <el-option v-for="item in optionsl" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </div>
                <div class="flex-box flex-space">
                    <div></div>
                    <el-row style="margin:0 2rem 2rem 0">
                        <el-button type="danger">清空</el-button>
                        <el-button @click="search" type="success">搜索</el-button>
                    </el-row>
                </div>
            </div>

            <div class="search-bar" style="margin: 1rem 0 0 0">
                <div class="flex-box flex-space" style=" border-bottom: 1px solid #DCDFE6">
                    <p style="margin:1rem 0 1rem 2rem">Article管理</p>
                    <el-button type="success" style="margin:1rem 2rem 1rem 0" @click="xinzeng">+新增</el-button>
                </div>
                <template>
                    <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">

                        <el-table-column prop="id" label="ID" width="180">
                        </el-table-column>
                        <el-table-column prop="title" label="名称" width="180">
                        </el-table-column>
                        <el-table-column prop="type" label="类型" width="180">
                            <template slot-scope="scope">{{ scope.row.type | dateFormat }}</template>
                        </el-table-column>
                        <el-table-column prop="createAt" label="发布时间" :formatter="timestampToTime" width="180">
                        </el-table-column>
                        <el-table-column prop="updateAt" label="修改时间" :formatter="timestampToTimel" width="180">
                        </el-table-column>
                        <el-table-column prop="author" label="发布者" width="180">
                        </el-table-column>
                        <el-table-column prop="status" label="状态" width="180">
                            <template slot-scope="scope">{{ DATA_MAP[scope.row.status] }}</template>
                        </el-table-column>
                        <el-table-column prop="operation" label="操作">
                            <el-link type="primary">下线</el-link>
                            <el-link type="primary">编辑</el-link>
                            <el-link type="primary">删除</el-link>
                        </el-table-column>

                    </el-table>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalNum">
                        </el-pagination>
                    </div>
                </template>
            </div>

        </div>
    </el-container>
</div>
</template>

<script>
export default {
    //周期钩子，进入到这个组件就执行
    created: function () {
        this.$axios.get("/a/a/article/search")
            .then(res => {
                if (res.data.code == 0) {
                    this.tableData = res.data.data.articleList
                    this.totalNum = this.tableData.length;

                }
                console.log(this.tableData.length)

            })
    },
    data() { //业务逻辑里面定义的数据
        return {
            options: [{
                value: '',
                label: '全部'
            }, {
                value: 0,
                label: '首页banner'
            }, {
                value: 1,
                label: '找职位banner'
            }, {
                value: 2,
                label: '找精英banner'
            }, {
                value: 3,
                label: '行业大图'
            }],

            optionsl: [{
                value: '',
                label: '全部'
            }, {
                value: 2,
                label: '上线'
            }, {
                value: 1,
                label: '草稿'
            }, ],
            value: '',
            valuel: '',
            value3: '', //搜索栏日期时间戳
            value1: '', //搜索栏日期时间戳
            tableData: [{
                id: '',
                title: '',
                type: '',
                createAt: '',
                updateAt: '',
                author: '',
                status: '',
                operation: '',
            }, ],
            currentPage: 1, //默认显示第一页
            pageSize: 7, //默认每页显示多少条
            totalNum: 0, //总页数

            //map方法转换对应值
            DATA_MAP: {
                1: '草稿',
                2: '上线',
            }

        }

    },

    methods: { //放方法的地方 
        //发布时间转换
        timestampToTime(row, column) {
            var date = new Date(row.createAt) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + '-'
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
            var D = date.getDate() + ' '
            var h = date.getHours() + ':'
            var m = date.getMinutes() + ':'
            var s = date.getSeconds()
            return Y + M + D + h + m + s

        },
        //修改时间转换
        timestampToTimel(row, column) {
            var date = new Date(row.updateAt) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + '-'
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
            var D = date.getDate() + ' '
            var h = date.getHours() + ':'
            var m = date.getMinutes() + ':'
            var s = date.getSeconds()
            return Y + M + D + h + m + s

        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val; //动态改变
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val; //动态改变
        },
        search() {

            this.$axios.get('/a/a/article/search', {
                    params: {
                        type: this.value,
                        status: this.valuel,
                        startAt:this.value3,
                        endAt: this.value1,
                    }
                })

                .then(res => {
                    if (res.data.code == 0) {
                        this.tableData = res.data.data.articleList
                        this.totalNum = this.tableData.length;
                        console.log(res.data)
                    }
                })

        },
         xinzeng() {
            this.$router.push({
                path: '/Newlyadded'
            });
        }

    },
    //类型转换对应值
    filters: {
        dateFormat(value) {
            switch (value) {
                case 0:
                    value = "首页banner";
                    break;
                case 1:
                    value = "找职位banner";
                    break;
                case 2:
                    value = "找精英banner";
                    break;
                case 3:
                    value = "行业大图";
                    break;
            }
            return value;
            console.log(value)
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

.flex-around {
    justify-content: space-around;
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

/* 框*/
.search-bar {
    width: 90%;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    font-size: 2rem;
}

.release-time {
    margin: 2rem;
}

.side-bar {
    width: 30rem;
    height: 75.5em;
}
</style>
