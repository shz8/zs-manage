<script>
export default {
    render: function (createElement) {
    let tagName = this.tag ||'div';
    //let htm = ejs.render(this.tml,{aaaa:'ddd'});
    //console.log(htm);
    return createElement(
      tagName,  
      this.showdata 
    )
    },
    name: 'ZSTest',
    props: ['api','ele','cache','data','tml'],
    data() {
        return {
            showdata:''
        }
    },
    mounted() {
        //根据api获取数据，显示首行首列
        let self = this;
        if(this.api){   
            if(1==2 && this.cache)
            {
                let v = this.$uti.sessionStore(this.api);
                if(v) {
                    this.showdata = v ;
                    return;
                }
            }
            this.$api.data.apipost('pro/' + this.api,this.data||{},function(d) {
                let v = '';
                if(self.tml){
                    let t = {data:d};
                    v = ejs.render(self.tml,t);
                    console.log(v);
                }
                else
                 v = self.$uti.getFirst(d);
                self.showdata = v;
                if(self.cache)self.$uti.sessionStore(self.api,v);
            })
            }
        }
};
</script>