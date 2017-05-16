<template>
    <div>
        <ApiSpan api='API_GetConfig' cache=true></ApiSpan>
        <el-form ref="form" :model="form" v-if=false :rules="tData.rules" label-width="80px">
            <ZsFormItem :item='d' :form='form' :key="d.key" v-for="d in tData.items" />
            <el-form-item>
    
                <el-checkbox-group v-model="form.Region4">
                    <el-checkbox label="复选框 A"></el-checkbox>
                    <el-checkbox label="复选框 B"></el-checkbox>
                    <el-checkbox label="复选框 C"></el-checkbox>
                    <el-checkbox label="禁用" disabled></el-checkbox>
                    <el-checkbox label="选中且禁用" disabled></el-checkbox>
                </el-checkbox-group>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <ZsForm :formdata="tData"></ZsForm>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: { name: 'wxl', pwd: '12345' },
            form: {},
            tData: {},
            //rules: {
            //UserName: [{ required: true, message: '请输入用户名', trigger: 'blur' },{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
            //Password: [{ type: 'date', required: true, message: '请选择密码', trigger: 'change' }]}
        }
    },
    components: {
    },
    boforeMount(){
        
    },
    mounted() {
        this.form = { StartDate: '', Region: '', Region1: '', Region2: '', Region3: ['r1', 'r2'], Region4: [], IsOpen: '1' };
        this.tData = this.getTest();
    },
    methods: {
        getTest() {
            return {
                items: [{ key: 'UserName', label: '用户名', el: 'input' }, { key: 'StartDate', label: '密码', el: 'date' }, { key: 'BackColor', label: '背景色', el: 'color' }
                    , { key: 'Region', label: '区域', el: 'select', clearable: true, filterable: true, options: [{ text: '区域一', id: 'r1' }, { text: '区域二', id: 'r2' }, { text: '区域三', id: 'r3' }] }
                    , { key: 'Region2', label: '区域2', el: 'radio', options: [{ text: '区域一', id: 'r1' }, { text: '区域二', id: 'r2' }, { text: '区域三', id: 'r3' }], api: 'API_FindDept' }
                    , { key: 'Region3', label: '区域3', el: 'checkbox', options: [{ text: '区域一', id: 'r1' }, { text: '区域二', id: 'r2' }, { text: '区域三', id: 'r3' }], api: 'API_FindDept' }
                    , { key: 'Region1', label: '区域1', el: 'select', clearable: true, filterable: true, multiple: false, options: [], api: 'API_FindDept' }
                    , { key: 'IsOpen', label: '是否启用', el: 'switch', ontext: '启用', onvalue: '1', offtext: '停用', offvalue: '0' }]
                , rules: {
                    UserName: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
                    StartDate: [{ type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }]
                }
            };
        },
        onSubmit() {
            this.$refs['form'].validate((valid, a, b) => {
                if (valid) {
                    console.log(this.form);
                    this.$message.success('提交成功！');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            }, (errors, fields) => {
            });
        }
    }
}
</script>
