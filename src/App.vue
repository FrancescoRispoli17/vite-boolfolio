<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
  export default{
      name:'MyApp',
      components:{
          Header,
          Main,
      },
  };
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style scoped lang="scss">

</style>
