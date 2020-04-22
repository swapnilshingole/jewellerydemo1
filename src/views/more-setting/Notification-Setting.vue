<template>
 <div>
   <v-content>
      <topNav/>
    </v-content>
    coming soon
-notification-setting   <v-content>
      <bottomNav/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import topNav from '@/components/TopNav.vue';
import bottomNav from '@/components/BottomNav.vue';

export default {
  name: 'notification-setting',
  components: {
    topNav,
    bottomNav,
  },
};
</script>
<style lang="scss">
</style>
