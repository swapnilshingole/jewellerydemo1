<template>
  <div class="detection-list">
    <v-container>
        <div class="main-detection-img-section">
            <v-card class="mx-auto detection-card">
                <v-img
                    class="detection-img"
                    src="../../assets/img/r-4.jpg"
                    height="200px"></v-img>
                </v-card>
        </div>
      <div class="detection-head-text">
          Select Original Image
      </div>
      <div class="detection-list-content">
          <v-row>
              <v-col cols=3 v-for="(detectionList,i) in detectionLists"
              class="padd"
               :key="i">
                <a :href="detectionList.id">
                <v-card
                    class="mx-auto detection-card"
                    :class=" detectionList.isActive ?'active-card-theme':'deactive-card-theme'"
                    @click="clickIcon(i)"
                >
                    <v-img
                    class="detection-img"
                    :src="detectionList.src"
                    :lazy-src="detectionList.src"
                    height="200px"
                    ></v-img>
                    <v-badge
                        bordered
                        class="active-badge"
                        dot
                        offset-x="10"
                        offset-y="10"
                        v-show="detectionList.isActive"
                    >
                    <v-icon>
                        done
                    </v-icon>
                    </v-badge>
                </v-card>
                 <v-card-title class="detection-name">
                  {{detectionList.title}}
                    </v-card-title>
                </a>
              </v-col>
          </v-row>
      </div>
        <v-btn
              fab
              right
              absolute
              v-show="show"
              to="/detection/defect-detection"
            >
              <v-icon>arrow_right_alt</v-icon>
            </v-btn>
    </v-container>
  </div>
</template>
<script>
// import VueLodash from 'vue-lodash';
// import lodash from 'lodash';
import * as _ from 'lodash';
import img5 from '../../assets/img/r-5.jpg';
import img1 from '../../assets/img/r-1.jpg';
import img2 from '../../assets/img/r-2.jpg';
import img3 from '../../assets/img/r-7.jpg';
import img4 from '../../assets/img/r-4.jpg';

// import img6 from '../../assets/img/r-5.jpg';
// import img7 from '../../assets/img/r-4.jpg';
// import img8 from '../../assets/img/r-1.jpg';
// import img9 from '../../assets/img/r-2.jpg';

export default {
  data() {
    return {
      show: false,
      detectionLists: [
        {
          title: 'Sku1278',
          price: '$949.99',
          src: img1,
          icon: 'mdiDelete',
          isActive: false,

        },
        {
          title: 'Sku1278',
          price: '$700',
          src: img2,
          icon: 'mdiDelete',
          isActive: false,

        },
        {
          title: 'Sku1278',
          price: '$100.50',
          src: img3,
          icon: 'mdiDelete',
          isActive: false,

        },
        {
          title: 'Sku1278',
          price: '$450.20',
          src: img4,
          icon: 'mdiDelete',
          isActive: false,

        },
        {
          title: 'Sku1278',
          price: '$900.10',
          src: img5,
          icon: 'mdiDelete',
          isActive: false,
        },
        {
          title: 'Sku1278',
          price: '$400.00',
          src: img1,
          icon: 'mdiDelete',
          isActive: false,
        },
        {
          title: 'Sku1278',
          price: '$600.40',
          src: img2,
          icon: 'mdiDelete',
          isActive: false,
        },
        {
          title: 'Sku1278',
          price: '$390.90',
          src: img3,
          icon: 'mdiDelete',
          isActive: false,
        },
        {
          title: 'Sku1278',
          price: '$1190.90',
          src: img4,
          icon: 'mdiDelete',
          isActive: false,

        },
        {
          title: 'Sku1278',
          price: '$949.99',
          src: img5,
          isActive: false,
        },
        {
          title: 'Sku1278',
          price: '$700',
          src: img5,
          isActive: false,
        },
        {
          title: 'Sku1278',
          price: '$450.20',
          src: img2,
          icon: 'mdiDelete',
          isActive: false,
        },
      ],
    };
  },
  methods: {
    clickIcon(i) {
	  _.map(this.detectionLists, (item) => {
        item.isActive = false;
      });
      this.show = true;
	  this.detectionLists[i].isActive = true;
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';
.detection-list{
    .main-detection-img-section{
        .detection-card{
            border-radius: 26px;
        }
    }
    .detection-head-text{
        margin:20px 0px;
      font-size: 16px;
      font-weight: 700;
    }
    .detection-list-content{
        .padd{
                padding: 0px 12px 0 12px;
        }
        .detection-card{
            position: relative;
            border-radius: 17px;
            color: transparent;
            .detection-img{
                height: 80px !important;
                border-radius: 17px;
                background-color: transparent;
            }
        }
        .active-card-theme{
            .detection-img{
                border: 2px solid $active-btn-yellow;
                color: $active-btn-yellow;
            }
            .active-badge{
                position: absolute;
                top: 0;
                right:0;
                color: $active-btn-yellow;
                background-color:$active-btn-yellow;
                width: 25px;
                height: 25px;
                border-radius: 20px;
                .v-icon{
                    color:$white;
                    font-size: 16px;
                    width: 25px;
                    height: 25px;
                    border-radius: 20px;
                }
                .v-badge__wrapper{
                    display: none;
                }
            }
        }
           .detection-name{
                font-size: 12px;;
                word-break: normal;
                line-height: 1.30rem;
                padding: 3px 10px 10px 10px;
                color: $grey;
            }
    }
     .v-btn--absolute{
       z-index:11;
      bottom:64px;
       color: $white;
                background-color:$active-btn-yellow !important;
                border-color:$active-btn-yellow;
                    height: 47px;
    width: 47px;
    .v-icon{
          font-size: 41px !important;
    }
    }
}
</style>
