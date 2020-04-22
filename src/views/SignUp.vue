<template>
 <div>
<v-content>
      <signUp/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import signUp from '@/components/SignUp.vue';

export default {
  name: 'signup',
  components: {
    signUp,
  },
};
</script>
<style lang="scss">
</style>
