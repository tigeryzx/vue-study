<template>
    <div>
        <button @click="getValueList">Get List</button>
        <ul>
            <li v-for="item,index in valueList" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'Vuex'
    import * as types from '../vuex/types'

    export default {
        name: 'res',
        computed: {
            ...mapState({
                valueList: state => state.c.valueList
            })
        },
        methods: {
            ...mapActions({
                getValueList: types.GET_ALL_VALUES
            })
        }
    }

</script>