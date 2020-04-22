<template>
 <div>
    <v-content>
      <topNav/>
    </v-content>
    <v-content>
      <notificationList/>
    </v-content>
    <v-content>
      <bottomNav/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import topNav from '@/components/TopNav.vue';
import notificationList from '@/components/Notification-List.vue';
import bottomNav from '@/components/BottomNav.vue';

export default {
  name: 'notification',
  components: {
    topNav,
    notificationList,
    bottomNav,
  },
};
</script>
<style lang="scss">
</style>
