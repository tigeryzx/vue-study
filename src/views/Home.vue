<template>
    <div>
        {{counta}}/{{countb}}/{{counFun}}/{{doneTodosCount}}
        <button @click="add">测试1</button>
        <button @click="add2">测试2</button>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations } from 'Vuex'
    export default {
        name: 'home',
        computed: {
            ...mapState({
                counta: state => state.count,
                countb: 'count',
                counFun(state) {
                    return state.count + 6;
                }
            }),
            ...mapGetters(['doneTodosCount'])
        },
        methods: {
            ...mapMutations({
                add: 'incrementStep'
            }),
            add2() {
                this.$store.commit('increment', { n: 10 });
            }
        }
    }

</script>