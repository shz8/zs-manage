<template>
    <div>
        <ZsForm formApi="API_GetFormItems"></ZsForm>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: { name: 'wxl', pwd: '12345' },
            form: {},
            tData: {}
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
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
