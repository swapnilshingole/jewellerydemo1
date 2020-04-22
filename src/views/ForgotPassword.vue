<template>
 <div>
<v-content>
      <forgotPassword/>
    </v-content>
 </div>
</template>
<script>
// @ is an alias to /src
import forgotPassword from '@/components/ForgotPassword.vue';

export default {
  name: 'forgotpassword',
  components: {
    forgotPassword,
  },
};
</script>
<style lang="scss">
</style>
