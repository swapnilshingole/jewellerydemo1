<template>
  <div class="bottom-navigation">
      <v-bottom-navigation
    v-model="bottomNav"
  >
    <v-btn value="product" router to="/product">
      <span>Product</span>
      <v-icon>card_giftcard</v-icon>
    </v-btn>

    <v-btn value="detection" router to="/detection">
      <span>Detection</span>
      <v-icon>youtube_searched_for</v-icon>
    </v-btn>


    <v-btn value="notification" router to="/notification">
        <span>Notification</span>
    <v-badge
        avatar
        bordered
        overlap
      >
        <template v-slot:badge>
          <!-- <v-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
          </v-avatar> -->
          10
        </template>
      <div>
        <span class="noti-badge"></span>
        <v-icon>notifications_none</v-icon>
      </div>
      </v-badge>
       </v-btn>

    <v-btn value="account" router to="/account">
      <span>Account</span>
      <v-icon>person_outline</v-icon>
    </v-btn>


    <v-btn value="more" router to="/more">
      <span>More</span>
      <v-icon>menu</v-icon>
    </v-btn>

  </v-bottom-navigation>
  </div>
</template>
<style lang="scss">
@import '@/assets/scss/Home.scss';
.bottom-navigation{
.v-bottom-navigation{
      z-index: 10;
    position: fixed;
    .v-btn--active{
    color:$active-btn-yellow !important;
  }
}
.v-badge__badge{
  border-radius: 13px;
  min-width: 24px;
  height: 24px;
  line-height: 2;
   background-color: $light-pink !important;
    border-color: $light-pink !important;
}
.v-application{

.a{
  text-decoration: none!important;
}
}
}

</style>
