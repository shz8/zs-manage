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
            form:{},
            message:'zs-form'
        }
    },
    computed: {
    },
    beforeMount(){
        console.log(this.form)
        for(let idx = 0;idx < this.formdata.items.length;idx++)
        {
            let item = this.formdata.items[idx];
            let self = this;
            this.$set(this.form,item.key,'');
            if(item.el == 'checkbox' || (item.el =='select' && item.multiple)) 
            {
                console.log(item.key);
                setTimeout(function() {
                     self.form[item.key] = [];
                }, 0);
            }
        }
        console.log(this.form)
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