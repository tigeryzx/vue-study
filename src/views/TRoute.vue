<template>
    <div>
        Troute
        <router-view></router-view>

        <router-link :to="{ path: '/TRoute/SubRoute', query: { id: 6 } }">subRoute</router-link>
        <button @click="toSubPage">toSubPage</button>
    </div>

</template>
<script>
    import router from '../router/index'
    export default {
        name: 'troute',
        methods: {
            toSubPage() {
                router.push({ path: '/TRoute/SubRoute', query: { id: 7 } });
            }
        }
    }

</script>