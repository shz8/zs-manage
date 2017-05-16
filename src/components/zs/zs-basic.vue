<template>
    <div class="el-card">
        <div class="el-card__header" v-if="$slots.header || header">
            <slot name="header">{{ header }}</slot>
        </div>
        <div class="el-card__body" :style="bodyStyle">
            <slot></slot>
        </div>
        {{onRoutes}}
    </div>
</template>

<script>
export default {
    name: 'ZSBasic',
    props: ['header', 'bodyStyle', 'test'],
    computed: {
        onRoutes() {
            return 'computed';
        },
        menus() {
            return this.$appcfg.menus;
        }
    },
};
</script>