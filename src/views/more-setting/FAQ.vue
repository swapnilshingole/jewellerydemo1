<template>
 <div>
   <v-content>
      <topNav/>
    </v-content>
    coming soon
-FAQ   <v-content>
      <bottomNav/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import topNav from '@/components/TopNav.vue';
import bottomNav from '@/components/BottomNav.vue';

export default {
  name: 'faq',
  components: {
    topNav,
    bottomNav,
  },
};
</script>
<style lang="scss">
</style>
