<template>
 <div>
    <v-content>
      <topNav/>
    </v-content>
    <v-content>
      <detectionInfo/>
    </v-content>
    <v-content>
      <bottomNav/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import topNav from '@/components/TopNav.vue';
import detectionInfo from '@/components/Detection/Detection-Info.vue';
import bottomNav from '@/components/BottomNav.vue';

export default {
  name: 'detection',
  components: {
    topNav,
    detectionInfo,
    bottomNav,
  },
};
</script>
<style lang="scss">
</style>
