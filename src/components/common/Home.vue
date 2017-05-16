<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>
                        <i :class="breadItem&&breadItem.nav.toicon"></i> {{breadItem&&breadItem.nav.navTitle}}</el-breadcrumb-item>
                    <el-breadcrumb-item> {{breadItem&&breadItem.item.itemTitle}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
export default {
    components: {
        vHead, vSidebar
    },
    data: () => ({
        routerpath: ''
    }),
    mounted() {
        this.fetchData();
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.routerpath = this.$router.history.current.path.replace('/', '');
        }
    },
    computed: {
        breadItem() {
            let cfg = this.$appcfg.menus;
            document.title = this.$appcfg.appTitle;
            let p = this.routerpath.toLowerCase();
            for (let i = 0; i < cfg.length; i++) {
                for (let j = 0; j < cfg[i].Items.length; j++) {
                    if (cfg[i].Items[j].to.toLowerCase().indexOf(p) > -1) {
                        document.title = cfg[i].Items[j].itemTitle + '_' + this.$appcfg.appTitle;
                        return { nav: cfg[i], item: cfg[i].Items[j] };
                    }
                }
            }
            return null;
        }
    }
}
</script>
