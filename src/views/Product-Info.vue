<template>
 <div>
   <v-content>
      <topNav/>
    </v-content>
    <v-content class="margin-bt-4">
       <productTabsSection/>
    </v-content>
    <v-content>
      <bottomNav/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import topNav from '@/components/TopNav.vue';
import productTabsSection from '@/components/Product/Product-Tabs-Section.vue';
import bottomNav from '@/components/BottomNav.vue';

export default {
  name: 'product-info',
  components: {
    topNav,
    productTabsSection,
    bottomNav,
  },
};
</script>
<style lang="scss">
</style>
