<template>
    <div>
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
    created() {
        this.tData = this.getTest();
    },
    mounted() {
    },
    methods: {
        getTest() {
            return {
                items: [{ key: 'UserName', label: '用户名', el: 'input' }, { key: 'StartDate', label: '开始时间', el: 'datetime' }
                    , { key: 'EndDate', label: '结束日期', el: 'date' }, { key: 'BackColor', label: '背景色', el: 'color' }
                    , { key: 'rate1', label: '评分', el: 'rate' }
                    , { key: 'Region', label: '区域', el: 'select', clearable: true, filterable: true, api: 'API_FindDept', options: [{ text: '区域一', id: 'r1' }, { text: '区域二', id: 'r2' }, { text: '区域三', id: 'r3' }] }
                    , { key: 'Region2', label: '区域2', el: 'radio', api: 'API_FindDept', options: [{ text: '区域一', id: 'r1' }, { text: '区域二', id: 'r2' }, { text: '区域三', id: 'r3' }], api: 'API_FindDept' }
                    , { key: 'Region3', label: '区域3', el: 'checkbox', options: [{ text: '区域一', id: 'r1' }, { text: '区域二', id: 'r2' }, { text: '区域三', id: 'r3' }], api: 'API_FindDept' }
                    , { key: 'Region1', label: '区域1', el: 'select', clearable: true, filterable: true, multiple: true, options: [], api: 'API_FindDept' }
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
