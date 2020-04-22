<template>
 <div>
    <v-content>
      <login/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import login from '@/components/Login.vue';

export default {
  name: 'Home',
  components: {
    login,
  },
};
</script>
<style lang="scss">
</style>
