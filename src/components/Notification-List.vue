<template>
    <div class="notification-section">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <div  class="notification-content"
            v-for="notificationContent in notificationContents"
            v-bind:key="notificationContent.link">
            <v-row class="main-card">
                <v-col cols=2>
                   <!-- <v-icon class="icon-color">
                        mdi-chevron-right
                    </v-icon> -->
                       <v-img
                        class="elevation-6 icon-color"
                        v-bind:src="notificationContent.src"
                    ></v-img>
                </v-col>
                  <v-col cols=7>
                    <v-card-title class="head-title">{{notificationContent.title}}</v-card-title>
                </v-col>
                  <v-col cols=3 class="date-notification">
                   <div class="sub-title">
                    {{notificationContent.date}}
                    </div>
                    <div class="dot-notification" v-if="notificationContent.notificationDot">
                        <v-badge
                            bordered
                            bottom
                            color="accent-4"
                            dot
                            offset-x="10"
                            offset-y="10"
                        >
                        </v-badge>
                    </div>
                </v-col>
            </v-row>
            <div class="down-border">

            </div>
            </div>
          </v-card>
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
      notificationContents: [
        {
          title: 'Smiles Store marked your order #1982984 as shipped.',
          src: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
          icon: 'abcd',
          routes: '/',
          date: '9:20 AM',
          notificationDot: true,
        },
        {
          title: 'Package from your order #1982345 has arrived to destination country.',
          src: 'https://cdn.vuetifyjs.com/images/john.png',
          icon: 'abcd',
          routes: '/',
          date: 'Yesterday',
          notificationDot: true,
        },
        {
          title: '50% OFF of everything at Elegance Store!!',
          src: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
          icon: 'abcd',
          routes: '/',
          date: '20 Feb',
          notificationDot: false,
        },
        {
          title: 'BOGO Sale starting tomorrow. Dont forget to check it out for great deals!',
          icon: 'abcd',
          src: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          routes: '/',
          date: '15 Oct',
          notificationDot: true,
        },
        {
          title: 'Smiles Store marked your order #1982984 as shipped.',
          icon: 'abcd',
          src: 'https://cdn.vuetifyjs.com/images/john.png',
          routes: '/',
          date: '9:20 AM',
          notificationDot: false,
        },
        {
          title: 'Package from your order #1982345 has arrived to destination country.',
          src: 'https://cdn.vuetifyjs.com/images/john.png',
          icon: 'abcd',
          routes: '/',
          date: 'Yesterday',
          notificationDot: true,
        },
        {
          title: '50% OFF of everything at Elegance Store!!',
          src: 'https://cdn.vuetifyjs.com/images/john.png',
          icon: 'abcd',
          routes: '/',
          date: '20 Feb',
          notificationDot: true,
        },
        {
          title: 'BOGO Sale starting tomorrow. Dont forget to check it out for great deals!',
          src: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          icon: 'abcd',
          routes: '/',
          date: '15 Oct',
          notificationDot: true,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';
.notification-section{
    .v-card__subtitle, .v-card__text, .v-card__title {
     padding:0 0 0 0;
    }
   .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
        border-radius: 18px;
    }
    .notification-content{
        .main-card{
            padding: 18px;
            .col{
                padding: 0 10px;
                margin: auto;
            }
            .head-title{
                font-size: 16px;
                font-weight: 400;
                word-break: normal;
                line-height: 1.50rem;
            }
            .icon-color{
                background-color:$icon-color;
                border-radius: 86px;
                font-size: 50px !important;
            }
            .sub-title{
                font-size: 14px;
                text-align: end;
                color:$date-grey;
            }
            .date-notification .dot-notification .v-badge .v-badge__wrapper {
                left:70px;
                top: 16px;
                .v-badge__badge {
                    border-radius: 26px;
                    height: 13px;
                    min-width: 0;
                    padding: 0;
                    width: 13px;
                    background-color: $light-pink !important;
                    border-color: $light-pink !important;
                }
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
}

</style>
