<template>
    <div>
        {{spandata}}
    </div>
</template>

<script>
export default {
    name: 'ApiSpan',
    props: ['api', 'cache','data'],
    data() {
        return {
            spandata:''
        }
    },
    computed: {},
    mounted() {
        //根据api获取数据，显示首行首列
        let self = this;
        if(this.api){   
            if(this.cache)
            {
                let v = this.$uti.sessionStore(this.api);
                if(v) {
                    this.spandata = v;
                    return;
                }
            }
            this.$api.data.apipost('pro/' + this.api,this.data||{},function(d) {
                let v = self.$uti.getFirst(d);
                self.spandata = v;
                if(self.cache)self.$uti.sessionStore(self.api,v);
            })
            }
        }
    };
</script>