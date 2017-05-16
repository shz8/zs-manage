<template>
    <el-form ref="form" :rules="formdata.rules" :model="form" label-width="80px">
        <ZsFormItem :item='d' :form='form' :key="d.key" v-for="d in formdata.items" />
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    name: 'ZsForm',
    props: ['formdata'],
    data() {
        return {
            form:{Region2:'',Region3:[],IsOpen:'1'}
        }
    },
    computed: {
    },
    mounted() {
        let self = this;
        setTimeout(function() {
            self.formdata.items.forEach(function(item) {
                //self.form[item.key] = '';
            });
            console.log(self.form)
        }, 0); 

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
};
</script>