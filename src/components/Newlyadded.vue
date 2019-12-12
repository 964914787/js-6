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

        <el-col :span="12" style="width:300px;background: #545c64 ">
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
                    <el-menu-item index="4" @click="btn">
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
            <div class="search-barl">
                <div class="title flex-box">
                    <p style="margin:1rem">Article新增</p>
                </div>
                <div class="release-timel flex-box" style=" align-items: center;">
                    <p>标题名称</p>
                    <el-input v-model="starttime" placeholder="请输入名称" style="width:800px;margin: 0 1rem"></el-input>
                </div>
                <div class="release-timel flex-box" style=" align-items: center;">
                    <p>类&#12288;&#12288;型</p>
                    <template>
                        <el-select v-model="value" placeholder="请选择" style="margin:0 1rem">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                    <template v-if="value == '选项4'">
                        <el-select v-model="valueo" placeholder="请选择" style="margin:0 1rem">
                            <el-option v-for="item in optionso" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </template>

                </div>
                <div class="release-timel flex-box" style=" align-items: center;">
                    <p>说&#12288;&#12288;明</p>
                    <div>
                        <el-card style="height: 280px; margin: 0 1rem">
                            <quill-editor v-model="content" ref="myQuillEditor" style="height: 200px;" :options="editorOption">
                            </quill-editor>
                        </el-card>
                    </div>

                </div>
                <div class="release-timel flex-box" style=" align-items: center;">
                    <p>跳转链接</p>
                    <el-input v-model="starttime2" placeholder="请输入名称" style="width:800px;margin: 0 1rem"></el-input>
                </div>

                <div class="release-timel flex-box" style=" align-items: center;">
                    <p>配&#12288;&#12288;图</p>

                </div>
                <div class="release-timel flex-box" style=" align-items: center; ">
                    <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" 
                    :limit='1' 
                    :on-remove="handleRemove" 
                    :on-change='zhanshi' 
                    :on-exceed="handleExceed"
                    :auto-upload="false" 
                    list-type="picture">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>

                    </el-upload>

                </div>
                <div class=" flex-box" style=" align-items: center; margin: 3rem 6rem 0 6rem;">
                    <template>
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="name" label="图片名" width="180">
                            </el-table-column>
                            <el-table-column prop="size" label="文件大小" width="180">
                            </el-table-column>
                            <el-table-column prop="Speed" label="进度" width="180">
                            </el-table-column>
                            <el-table-column prop="operation" label="操作" width="180">
                            </el-table-column>
                            <el-table-column prop="operationl" label="操作">
                                <el-button type="success" v-if="aa == 1">上传</el-button>
                                <el-button type="danger" v-if="aa == 1">删除</el-button>

                            </el-table-column>

                        </el-table>
                    </template>
                </div>
                <div class="flex-box" style=" align-items: center; margin: 3rem 6rem ">
                    <el-button type="success">立即上传</el-button>
                    <el-button type="success">存为草稿</el-button>
                    <el-button v-on:click="btnlll">取消</el-button>
                </div>

            </div>

        </div>
    </el-container>
</div>
</template>

<script>
//引入 ue 富文本编辑器
import {

    quillEditor
} from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
    components: {
        quillEditor
    },

    data() {
        return {
            tableData: [{
                name: '',
                size: '',
                Speed: '',
                operation: '',
                operationl: '',
            }, ],

            options: [{
                value: '选项1',
                label: '首页banner'
            }, {
                value: '选项2',
                label: '找职位banner'
            }, {
                value: '选项3',
                label: '找精英banner'
            }, {
                value: '选项4',
                label: '行业大图'
            }],
            optionso: [{
                value: '选项1',
                label: '移动互联网'
            }, {
                value: '选项2',
                label: '电子商务'
            }, {
                value: '选项3',
                label: '企业服务'
            }, {
                value: '选项4',
                label: '020'
            }, {
                value: '选项5',
                label: '教育'
            }],
            value: '', //类型选择一
            valueo: '', //类型选择二
            starttime: '', //标题名称
            starttime2: '', //跳转链接
            aa: '',    //判断是否展示上传与删除

            //富文本编辑器
            content: null,
            editorOption: {},

        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },

    methods: {
        submitUpload() {
            this.$refs.upload.submit();
        },
        //文件列表移除文件时的钩子
        handleRemove(file, fileList) {
            console.log(file, fileList);
           this.tableData[0].name = ''
           this.tableData[0].size = ''
           this.aa = ''   // aa=''  不显示上传于删除按钮

        },
       
        //选取文件钩子事件
        zhanshi(file) {
            this.tableData[0].name = file.name   //展示文件名称
            //文件大小转换
            if (file.size < 0.1 * 1024) { //如果小于0.1KB转化成B
                this.tableData[0].size = file.size.toFixed(2) + "B";
            } else if (file.size < 0.1 * 1024 * 1024) { //如果小于0.1MB转化成KB  		                
            this.tableData[0].size = (file.size / 1024).toFixed(2) + "KB";
            } else if (file.size < 0.1 * 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB  		                
            this.tableData[0].size = (file.size / (1024 * 1024)).toFixed(2) + "MB";
            } else { //其他转化成GB  		                
            this.tableData[0].size = (file.size / (1024 * 1024 * 1024)).toFixed(2) + "GB";
            }
            this.aa = 1   // aa=1 显示上传于删除按钮
        },
        handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件。`);
        },
        btn() {
            this.$router.push({
                path: '/articlelist'
            });
        },

        btnlll() {
            var x;
	var r=confirm("确认放弃新增编辑吗？");
	if (r==true){
		x=this.$router.push({
                path: '/articlelist'
            });;
	}
	else{
		x="";
	}
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
.search-barl {
    width: 90%;

    border: 1px solid #DCDFE6;
    border-radius: 4px;
    font-size: 2rem;
    margin: 2rem 0;
}

.title {
    border-bottom: 1px solid #DCDFE6;
    font-size: 1.7rem;

}

.release-timel {
    margin: 3rem 0 0 6rem;
}

.side-bar {
    width: 30rem;
    height: 75.5em;
}
</style>
