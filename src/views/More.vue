<template>
 <div class="more">
   <v-content>
      <topNav/>
    </v-content>
    <v-content>
      <moreSection/>
    </v-content>
    <v-content>
      <bottomNav/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import topNav from '@/components/TopNav.vue';
import moreSection from '@/components/More-Section.vue';
import bottomNav from '@/components/BottomNav.vue';

export default {
  name: 'Home',
  components: {
    topNav,
    moreSection,
    bottomNav,
  },
};
</script>
<style lang="scss">
</style>
