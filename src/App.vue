<template>
  <v-app>
    <v-content class="section-bg">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';
</style>
