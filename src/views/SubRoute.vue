<template>
    <div>
        SubPage parame:{{$route.query.id}}/{{pageId}}
    </div>
</template>
<script>
    export default {
        name: 'subRoute',
        data() {
            var id = this.$route.query.id;
            return {
                pageId: id
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                // https://vuefe.cn/v2/guide/instance.html#实例生命周期
                console.log(this.$route.query.id);
                console.log('mounted..');
            })
        },
        beforeUpdate:function(){
            console.log(this.$route.query.id);
            console.log('beforeUpdate..');
        },
        updated:function(){
            console.log(this.$route.query.id);
            console.log('updated..');
        },
        methods: {
            showQuery(v) {
                alert(v);
            }
        }
    }

</script>