<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-submenu :index="'' + index" v-for="(m, index) in menus" :key="'m_' + index">
                <template slot="title">
                    <i :class="m.toicon"></i>{{m.navTitle}}</template>
                <el-menu-item :index="n.to" v-for="(n,idx) in m.Items" :key="'m_' + index + '_i_' + idx ">{{n.itemTitle}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    computed: {
        onRoutes() {
        },
        menus() {
            return this.$appcfg.menus;
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #2E363F;
}

.sidebar>ul {
    height: 100%;
}
</style>
