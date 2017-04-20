<template>
    <div>
        <span>about</span>
        <list :source="vlist" v-on:clickItem="parentClickItem"></list>
    </div>
</template>
<script>
    import list from '@/components/list'
    export default {
        name: 'about',
        data() {
            return {
                vlist: [
                    { title: '111' },
                    { title: '222' },
                    { title: '333' }
                ]
            }
        },
        methods: {
            parentClickItem(item){
                console.log(item);
                alert('parent click');
            }
        },
        components: {
            list
        }
    }

</script>