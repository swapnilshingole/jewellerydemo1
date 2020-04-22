<template>
    <div class="top-navbar-section">
           <v-app-bar
      dark
      color="pink"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>More</v-toolbar-title>
    </v-app-bar>
    </div>
</template>


<script>
export default {
  name: 'more-section',
  data() {
    return {
      moreContents: [
        { title: 'Notification Settings', icon: 'abcd', routes: '/' },
        { title: 'Privacy Policy', icon: 'abcd', routes: '/' },
        { title: 'Frequently Asked Questions', icon: 'abcd', routes: '/' },
        { title: 'Legal Information', icon: 'abcd', routes: '/' },
      ],
    };
  },
};
</script>
<style lang="scss">
.top-navbar-section{

}

</style>
