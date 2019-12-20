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

                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm release-timel">
                    <el-form-item label="标题名称" prop="name" class="flex-box">
                        <el-input v-model="ruleForm.name" style="width: 500px;"></el-input>
                    </el-form-item>
                    <el-form-item label="类型" prop="region" class="flex-box">
                        <el-select v-model="ruleForm.region" placeholder="请选择类型" style="margin: 0rem">
                            <el-option label="首页banner" value="0"></el-option>
                            <el-option label="找职位banner" value="1"></el-option>
                            <el-option label="找精英banner" value="2"></el-option>
                            <el-option label="行业大图" value=4></el-option>
                        </el-select>
                        <div prop="regiono">
                            <el-select v-if="ruleForm.region == 4" v-model="ruleForm.regiono" placeholder="请选择活动区域">
                                <el-option label="移动互联网" value="0"></el-option>
                                <el-option label="电子商务" value="1"></el-option>
                                <el-option label="企业服务" value="2"></el-option>
                                <el-option label="教育" value="3"></el-option>
                            </el-select>
                        </div>
                    </el-form-item>

                    <el-form-item label="说明" prop="desc">
                        <div style="height: 300px; margin: 0 10rem;">
                            <quill-editor type="textarea" v-model="ruleForm.desc" ref="myQuillEditor" style="height: 180px;;" :options="editorOption">
                            </quill-editor>
                        </div>
                    </el-form-item>

                    <el-form-item label="跳转链接" prop="linkl" class="flex-box">
                        <el-input v-model="ruleForm.linkl" style=" width: 300px;"></el-input>
                    </el-form-item>

                    <el-form-item label="配图" prop="Layout" class="flex-box">
                        <div class=" flex-box" style=" align-items: center; ">
                            <el-upload class="upload-demo " v-model="ruleForm.Layout" ref="upload" action="/a/a/u/img/3" :limit='1' :on-remove="handleRemove" :on-change='zhanshi' :on-exceed="handleExceed" :on-success='Uploadsuccess' :on-error='Uploadfailure' :auto-upload="false" list-type="picture">
                                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

                            </el-upload>
                        </div>
                    </el-form-item>

                    <div class=" flex-box" style=" align-items: center; margin: 3rem 6rem 0 6rem;">

                        <template>
                            <el-table :data="tableData" style="width: 100%">
                                <el-table-column prop="name" label="图片名" width="180">

                                </el-table-column>
                                <el-table-column prop="size" label="文件大小" width="180">
                                </el-table-column>
                                <el-table-column prop="Speed" label="进度" :percentage="percentage" width="180">
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.date }}</span>
                                        <el-progress :text-inside="true" :stroke-width="20" :percentage="percentage" v-if="c"></el-progress>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="operation" label="操作" width="180">
                                    <template slot-scope="scope">
                                        <i class="el-icon-check" v-if="a == 1"></i>
                                        <i class="el-icon-close" v-if="b == 1"></i>
                                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="operationl" label="操作">

                                    <el-button type="success" v-if="aa == 1" @click="submitUpload">上传</el-button>
                                    <el-button type="danger" v-if="aa == 1" @click="Deletepictures">删除</el-button>

                                </el-table-column>

                            </el-table>
                        </template>
                    </div>

                    <el-form-item class="flex-box release-timel">
                        <el-button type="primary" @click="submitForm('ruleForm')">立即上线</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                        <el-button v-on:click="btnlll">取消</el-button>
                    </el-form-item>
                </el-form>

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

            //表单
            ruleForm: {
                name: '',
                region: '',
                regiono: '',
                desc: '',
                linkl: '',
                Layout: '',
            },
            rules: {
                name: [{
                    required: true,
                    message: '请输入活动名称',
                    trigger: 'blur'
                }, ],
                region: [{
                    required: true,
                    message: '请选择类型',
                    trigger: 'change'
                }],
                regiono: [{
                    required: true,
                    message: '请选择类型二',
                    trigger: 'change'
                }],

                type: [{
                    type: 'array',
                    required: true,
                    message: '请至少选择一个活动性质',
                    trigger: 'change'
                }],
                resource: [{
                    required: true,
                    message: '请选择活动资源',
                    trigger: 'change'
                }],
                desc: [{
                    required: true,
                    message: '请填写说明',
                    trigger: 'blur'
                }],
                linkl: [{
                    required: true,
                    message: '请填写链接',
                    trigger: 'blur'
                }],

            },

            value: '', //类型选择一
            valueo: '', //类型选择二

            aa: '', //判断是否展示上传与删除
            a: '', //判断是否展示图片上传成功图标
            b: '', //判断是否展示图片上传失败图标
            c: false, //判断是否展示控制条
            xian: true,
            percentage: 0,

            //富文本编辑器

            editorOption: {},

            //需要新增发送的数据
            from: {
                id: '',
                img: '', //配图
                title: '', //名称
                type: '', //类型
                subType: '', //类型子类
                url: '', //跳转链接
                status: '', //状态
            }

        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },

    methods: {
        //表单验证
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert(this.ruleForm.name);
                    this.from.title = this.ruleForm.name
                    this.from.type = this.ruleForm.region
                    this.from.subType = this.ruleForm.regiono
                    this.from.url = this.ruleForm.linkl
                    this.from.status = 2

                    this.$axios.post('/a/a/u/article/', this.$qs.stringify(this.from))
                        .then(res => {
                            console.log(this.from)
                            if (res.data.code == 0) {
                                alert('新增成功')
                                this.$router.push({
                                    path: '/articlelist'
                                });
                            }
                        })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //表单重置
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        //文件列表移除文件时的钩子
        handleRemove(file, fileList) {
            console.log(file, fileList);
            this.tableData[0].name = ''
            this.tableData[0].size = ''
            this.aa = '' // aa=''  不显示上传于删除按钮
            this.c = false //不展示控制条
            this.a = false
            this.percentage = 0; //显示进度条

        },
        //文件上传成功时的钩子
        Uploadsuccess(res, file) {
            this.a = 1 //显示上传成功图标
            this.percentage = 100; //显示进度条
            console.log(res.data.url)
            this.from.img = res.data.url
            console.log(this.from)

        },
        //文件上传失败时的钩子
        Uploadfailure(file) {
            this.b = 1 //显示上传失败图标
            this.percentage = 0; //显示进度条

        },
        // 文件点击上传的自定义按钮
        submitUpload(file) {
            this.$refs.upload.submit();

        },
        //文件点击删除的自定义按钮
        Deletepictures() {
            this.$refs.upload.clearFiles();
            this.tableData[0].name = ''
            this.tableData[0].size = ''
            this.aa = '' // aa=''  不显示上传于删除按钮
            this.c = false //不展示控制条
            this.a = false
            this.percentage = 0; //显示进度条

        },

        //选取文件钩子事件
        zhanshi(file) {
            this.tableData[0].name = file.name //展示文件名称
            //文件大小转换
            if (file.size < 0.1 * 1024) { //如果小于0.1KB转化成B   //如果小于0.1MB转化成KB    //如果小于0.1GB转化成MB   //其他转化成GB  
                this.tableData[0].size = file.size.toFixed(2) + "B";
            } else if (file.size < 0.1 * 1024 * 1024) {
                this.tableData[0].size = (file.size / 1024).toFixed(2) + "KB";
            } else if (file.size < 0.1 * 1024 * 1024 * 1024) {
                this.tableData[0].size = (file.size / (1024 * 1024)).toFixed(2) + "MB";
            } else {
                this.tableData[0].size = (file.size / (1024 * 1024 * 1024)).toFixed(2) + "GB";
            }
            this.aa = 1 // aa=1 显示上传于删除按钮
            this.c = true

        },
        //判断是否可以点击上传事件
        doThis(dianji) {
            if (this.starttime.value == '') {
                xian: false

            }
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
            var r = confirm("确认放弃新增编辑吗？");
            if (r == true) {
                x = this.$router.push({
                    path: '/articlelist'
                });;
            } else {
                x = "";
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
    font-size: 1.7rem;
    border-bottom: 1px solid #DCDFE6;
}

.upload-demo {
    display: flex;
    flex-direction: column;
    align-items: flex-start
}

.release-timel {
    margin: 3rem 0
}
</style>
