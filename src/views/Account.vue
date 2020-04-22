<template>
 <div>
    <v-content>
      <topNav/>
    </v-content>
    <v-content>
      <accountForm/>
    </v-content>
    <v-content>
      <bottomNav/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import topNav from '@/components/TopNav.vue';
import accountForm from '@/components/Account-Form.vue';
import bottomNav from '@/components/BottomNav.vue';

export default {
  name: 'account',
  components: {
    topNav,
    accountForm,
    bottomNav,
  },
};
</script>
<style lang="scss">
</style>
