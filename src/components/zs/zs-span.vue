<template>
     <span> {{onRoutes}}</span>
</template>

<script>
export default {
    name: 'ZsSpan',
    props: ['header', 'bodyStyle', 'test','id','tml'],
    data() {
        return {
        }
    },
    computed: {
        onRoutes() {
            return 'computed' + this.tml +  JSON.stringify(this.test);
        }
    }
};
</script>