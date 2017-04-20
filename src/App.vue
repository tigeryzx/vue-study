<template>
  <div id="app">
    <div><span>select your page</span></div>
    <transition>
      <router-view></router-view>
    </transition>

    <div>
      <router-link to="/">
        Index
      </router-link>
      |
      <router-link to="/Home">
        Home
      </router-link>
      |
      <router-link to="/About">
        About
      </router-link>
      |
      <router-link to="/Editor">
        Editor
      </router-link>
    </div>
    <div>bootom</div>
  </div>
</template>

<script>
  import store from './vuex/store'

  export default {
    name: 'app',
    store
  }

</script>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  
  .slide-fade-enter,
  .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
</style>