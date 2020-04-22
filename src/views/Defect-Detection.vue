<template>
 <div>
    <v-content>
      <topNav/>
    </v-content>
    <v-content>
      <defectDetectionInfo class="margin-bt-4"/>
    </v-content>
    <v-content>
      <bottomNav/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import topNav from '@/components/TopNav.vue';
import defectDetectionInfo from '@/components/Detection/Defect-Detection-Info.vue';
import bottomNav from '@/components/BottomNav.vue';

export default {
  name: 'defect-detection',
  components: {
    topNav,
    defectDetectionInfo,
    bottomNav,
  },
};
</script>
<style lang="scss">
</style>
