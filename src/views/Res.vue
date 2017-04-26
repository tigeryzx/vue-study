<template>
    <div>
        <button @click="getValueList">Get List</button>
        <ul>
            <li v-for="item,index in valueList" :key="index">
                <span @click="setSelItem(item)">{{item.value}}</span>
                <span @click="delValue(item.id)"> X</span>
            </li>
        </ul>
        <hr />
        <span>Id:{{item.id}} Name:<input type="text" v-model="item.value" /></span>
        <button @click="clear">CLear</button>
        <button @click="saveValue">Save</button>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'Vuex'
    import * as types from '../vuex/types'

    export default {
        name: 'res',
        data() {
            return {
                item: {
                    id: '',
                    value: ''
                }
            }
        },
        computed: {
            ...mapState({
                valueList: state => state.c.valueList
            })
        },
        methods: {
            ...mapActions({
                getValueList: types.GET_ALL_VALUES
            }),
            saveValue() {
                // 有ID更新，没ID添加
                if (this.item.id) {
                    this.$store.dispatch(types.UPDATE_VALUE, this.item).then(() => {
                        this.clear();
                    });
                } else {
                    this.$store.dispatch(types.SAVE_VALUE, this.item).then(() => {
                        this.clear();
                    });
                }
            },
            delValue(id) {
                this.$store.dispatch(types.DELETE_VALUE, { id: id });
            },
            setSelItem(item) {
                this.item.id = item.id;
                this.item.value = item.value;
            },
            clear() {
                this.item.id = null;
                this.item.value = null;
            }
        }
    }

</script>