<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="当前科室">
                <el-select v-model="form.dept" filterable placeholder="请选择科室">
                    <el-option v-for="item in options" :key="item.id" :label="item.text" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="医院">
                <el-radio-group v-model="form.hospital">
                    <el-radio label="0">中山医院</el-radio>
                    <el-radio label="1">逸仙医院</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {dept:'',hospital:''},
        options:[],
      }
    },
    methods: {
      onSubmit() {
          this.$uti.baseCfg(this.form);
          this.$message.success('保存成功！');
      }
    },
    mounted() {
        let self = this;
        let f =this.$uti.baseCfg();
        if(f)
           this.form = f;
        this.$api.data.findDept(function(d){
            self.options = d;
        });
    }
  }
</script>