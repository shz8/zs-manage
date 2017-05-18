<template>
    <el-form-item :label="item.label" :prop="item.key">
        <el-input v-if="item.el == 'input'" v-model="form[item.key]">
        </el-input>
        <el-date-picker v-if="item.el == 'date' || item.el == 'datetime'" :type="item.el" v-model="form[item.key]" style="width: 100%;"></el-date-picker>
        
        <el-select v-if="item.el == 'select'" v-model="form[item.key]" placeholder="请选择" :clearable="item.clearable" :filterable="item.filterable" :multiple="item.multiple">
            <el-option :label="opt.text" :value="opt.id" v-for="opt in item.options" :key="opt.id"></el-option>
        </el-select>
        <el-radio-group v-if="item.el == 'radio'" v-model="form[item.key]">
            <el-radio :label="opt.id" v-for="opt in item.options" :key="opt.id">{{opt.text}}</el-radio>
        </el-radio-group>
        <el-checkbox-group v-if="item.el == 'checkbox'" v-model="form[item.key]">
            <el-checkbox :label="opt.id" v-for="opt in item.options" :key="opt.id">{{opt.text}}</el-checkbox>
        </el-checkbox-group>
        <el-color-picker v-if="item.el == 'color'" v-model="form[item.key]" show-alpha></el-color-picker>
        <el-switch v-if="item.el == 'switch'" v-model="form[item.key]" :on-text="item.ontext" :off-text="item.offtext" :on-value="item.onvalue" :off-value="item.offvalue">
        </el-switch>
        <el-rate v-if="item.el == 'rate'" v-model="form[item.key]" :max="item.max||5"></el-rate>
    </el-form-item>
</template>
<script>
export default {
    name: 'ZsFormItem',
    props: ['form','item'],
    data() {
        return {
            message:'form-item'
        }
    },
    computed: {
    },
    created(){
    },
    mounted() {
        if(['checkbox','radio','select'].indexOf(this.item.el)> -1 && this.item.api)
        {
            let self = this;
             this.$api.data.apipost('pro/' + this.item.api, {}, function (d) {
                 self.item.options = d.Table||d;
             });
        }
    }
};
</script>