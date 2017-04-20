<template>
    <div>
        state_mapping:{{counta}}/state_fun:{{counFun}}/getter:{{toCount}}
        <br/>
        <button @click="add">mutation_mapping</button>
        <button @click="add2">mutation</button>
        <button @click="ac_add">action</button>
        <button @click="ac_add_child">action_child</button>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'Vuex'
    import * as types from '../vuex/types'

    export default {
        name: 'home',
        computed: {
            ...mapState({
                counta: state => state.a.count,
                counFun(state) {
                    return state.a.count + 6;
                }
            }),
            ...mapGetters({
                toCount: types.DONE_TODOS_COUNT
            })
        },
        methods: {
            ...mapMutations({
                add: types.INCREMENT_STEP
            }),
            ...mapActions({
                ac_add: types.INCRMENT_ASYNC
            }),
            ac_add_child(){
                this.$store.dispatch(types.INCRMENT_ASYNC_CHILD);
                console.log('warp end.');
            },
            add2() {
                this.$store.commit(types.INCREMENT, { n: 10 });
            }
        }
    }

</script>