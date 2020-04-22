<template>
 <div>
   <v-content>
      <topNav/>
    </v-content>
    <v-content class="margin-bt-4">
      <productAdvCarousels/>
      <productList/>
    </v-content>
    <v-content>
      <bottomNav/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import topNav from '@/components/TopNav.vue';
import productAdvCarousels from '@/components/Product/Product-Adv-Carousels.vue';
import productList from '@/components/Product/Product-List.vue';
import bottomNav from '@/components/BottomNav.vue';

export default {
  name: 'product',
  components: {
    topNav,
    productAdvCarousels,
    productList,
    bottomNav,
  },
};
</script>
<style lang="scss">
</style>
