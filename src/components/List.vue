<template>
    <div>
        <span>以下是列表组件</span>
        <ul>
            <li v-for="item,index in source" :key="index">
                <span v-on:click="clickItem(item)">{{item.title}}</span>
                <span v-on:click="removeItem(index)">X</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'list',
        props: {
            source: {
                type: Array,
                required: true
            }
        },
        methods: {
            clickItem(item){
                this.$emit('clickItem',item)
            },
            removeItem(index){
                this.source.splice(index, 1);
            }
        }
    }

</script>