<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-setting"></i> 系统设置</el-breadcrumb-item>
                <el-breadcrumb-item>基本设置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3';
    export default {
        components: {
            IEcharts
        },
        data: () => ({})
    }
</script>

<style scoped>
.echarts {
    float: left;
    width: 500px;
    height: 400px;
}
</style>