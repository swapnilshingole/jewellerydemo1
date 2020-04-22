<template>
    <div class="more-section">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <div  class="more-content"
            v-for="moreContent in moreContents"
            v-bind:key="moreContent.routes" >
            <div class="d-flex justify-content-between main-card">
                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
                <v-btn icon>
                  <v-icon>{{ moreContent.icon }}</v-icon>
                </v-btn>
                <v-card-title class="head-title">{{moreContent.title}}</v-card-title>

                <v-spacer></v-spacer>
                 <v-btn icon class="chevron-right-icon" router :to="moreContent.routes">
                    <v-icon>{{ 'mdi-chevron-right' }}</v-icon>
                </v-btn>
            </div>
            <div class="down-border">
            </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
         <div class="text-center btn-logout">
            <v-btn rounded>LOG OUT</v-btn>
        </div>
        </v-col>
      </v-row>
    </v-container>

    </div>
</template>


<script>
export default {
  name: 'more-section',
  data() {
    return {
      moreContents: [
        { title: 'Notification Settings', icon: 'notification_important', routes: '/more/notification-setting' },
        { title: 'Privacy Policy', icon: 'verified_user', routes: '/more/privacy-policy' },
        { title: 'Frequently Asked Questions', icon: 'chat_bubble_outline', routes: '/more/faq' },
        { title: 'Legal Information', icon: 'library_add_check', routes: '/more/legal-information' },
      ],
    };
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';
.more-section{
    .v-card__subtitle, .v-card__text, .v-card__title {
     padding:0 0 0 10px;
    }
   .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
        border-radius: 18px;
    }
    .more-content{
        .main-card{
            padding: 18px;
            .head-title{
                font-size: 20px;
                font-weight: 400;
            }
            .chevron-right-icon{
                background-color:$icon-color;
            }
        }
        .down-border{
            margin: 0rem 1rem 0rem 3rem;
            border-bottom: 2px solid $icon-color;
        }
        &:last-child{
            .down-border{
                margin: 0rem 1rem 0rem 3rem;
                border:none;
            }
        }
    }
    .btn-logout{
        margin-top:40px;
        .v-btn{
            font-size:20px;
            width: 50%;
            height: 50px;
            text-transform: uppercase;
            color: $light-pink;
            background-color: $white !important;
            :focus {
           background: $white  !important;
            }
            :hover {
             background: $white  !important;
            }
        }
         .v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before {
            opacity: 0;
        }
    }
}
// height: 36px;
    // width: 36px;
</style>
