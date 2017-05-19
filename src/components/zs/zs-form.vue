<template>
    <el-form ref="form" :rules="formdata.rules" :model="form" label-width="80px">
        <ZsFormItem :item='d' :form='form' :key="d.key" v-for="d in formdata.items" />
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button type="primary" @click="onReset">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    name: 'ZsForm',
    props: ['submitApi', 'formApi'],
    data() {
        return {
            form: {},
            message: 'zs-form',
            formdata: []
        }
    },
    computed: {
    },
    beforeMount() {
        if (this.formApi) {
            let self = this;
            this.$api.data.apipost('pro/' + this.formApi, {}, function (d) {
                self.formdata = d;
                for (let idx = 0; idx < self.formdata.items.length; idx++) {
                    let item = self.formdata.items[idx];
                    if (item.el == 'rate')
                        self.$set(self.form, item.key, 0);
                    else
                        self.$set(self.form, item.key, '');
                    if (item.el == 'checkbox' || (item.el == 'select' && item.multiple)) {
                        setTimeout(function () {
                            self.form[item.key] = [];
                        }, 0);
                    }
                }
            });
        }
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
        },
        onReset() {
            this.$refs['form'].resetFields();
        }
    }
};
</script>