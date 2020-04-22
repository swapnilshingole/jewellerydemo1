<template>
  <div class="product-timeline">
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
       fill-dot2
    >
    <div class="date-section">
        <div class="small-dot">
        </div>
        <div class="date-point">
           {{item.date}}
        </div>
    </div>
      <v-card
        :color="item.color"
        class="v-card-color"
      >
        <v-card-text class="white text--primary cart-text">
          <div>
            {{item.idNumber}}
          </div>
          <div>
            {{item.Name}}
          </div>
          <div v-if="item.Type" >
            Type: {{item.Type}}
          </div>
          <div v-if="item.BoughtFrom">
              Bought from:{{item.BoughtFrom}}
          </div>
          <div v-if="item.RestorationWork">
             Restoration Work:{{item.RestorationWork}}
          </div>
          <div v-if="item.UsedTill">
              Used Till:{{item.UsedTill}}
          </div>
          <div v-if="item.SoldTo">
              Sold To:{{item.SoldTo}}
          </div>
        </v-card-text>
          <div class="prod-img-section">
            <v-img
                class="product-img product-img-1 polaroid rotate_left"
                :src="item.img1"
                height="55px"
                width="55px"

            ></v-img>
                <v-img
                class="product-img product-img-2 polaroid rotate_right"
                :src="item.img2"
                height="55px"
                width="55px"
            ></v-img>
          </div>

      </v-card>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>
<script>
import img1 from '../../assets/img/r-1.jpg';
import img2 from '../../assets/img/r-2.jpg';
import img3 from '../../assets/img/r-3.jpg';
import img4 from '../../assets/img/r-4.jpg';

export default {
  data: () => ({
    items: [
      {
        color: '#bdbdbd',
        icon: 'mdi-star',
        date: '20 March 2020',
        idNumber: 'XA1234567',
        Name: 'Virendra Shahaney',
        Type: 'Silver Stering',
        BoughtFrom: 'India',
        RestorationWork: '',
        UsedTill: '',
        SoldTo: '',
        img1,
        img2,
      },
      {
        color: '#bdbdbd',
        icon: 'mdi-book-variant',
        date: '10 March 2020',
        idNumber: 'XA1344455',
        Name: 'Rajiv Gupta',
        Type: 'Silver Stering',
        BoughtFrom: 'UK',
        RestorationWork: 'Chintamani',
        UsedTill: 'Virendra Shahaney',
        SoldTo: 'Rajiv Gupta',
        img1: img3,
        img2: img4,
      },
      {
        color: '#bdbdbd',
        icon: 'mdi-airballoon',
        date: '20 Feb 2020',
        idNumber: 'XA123u94i',
        Name: 'Virendra Shahaney',
        Type: 'Silver Stering',
        BoughtFrom: 'London',
        RestorationWork: 'Chintamani',
        UsedTill: 'Rajiv Gupta',
        SoldTo: 'Virendra Shahanev',
        img1: img3,
        img2,
      },
      {
        color: '#bdbdbd',
        icon: 'mdi-buffer',
        date: '20 Jan 2020',
        idNumber: 'XA12099984',
        Name: 'Virendra Shahaney',
        Type: 'Silver Stering',
        BoughtFrom: 'London',
        RestorationWork: 'Chintamani',
        UsedTill: 'Rajiv Gupta',
        SoldTo: 'Virendra Shahanev',
        img1,
        img2: img4,
      },
    ],
  }),
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';

.product-timeline{
    .v-timeline:before {
        bottom: 0;
        content: "";
        height: 100%;
        position: absolute;
        top: 27px;
        width: 2px;
    }
    .date-section{
        position: relative;
        .small-dot{
            position: absolute;
                height: 20px;
                left: -47px;
                width: 20px;
                background-color: $active-btn-yellow !important;
                border-color: $active-btn-yellow !important;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
        }
        .date-point{
            margin-left: -14px;
            font-size: 16px;
        }
    }
    .cart-text{
        font-size:11px;
         border-radius:20px;
    }
    .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
        border-radius: 23px;
    }
   .v-timeline--dense:not(.v-timeline--reverse):before {
        left: calc(24px - 1px);
        right: initial;
    }
    .v-timeline--dense .v-timeline-item__body {
        max-width: calc(100% - 63px);
    }
    .v-timeline-item__divider {
        display: block;
        //         width: 20px;
        // max-width: 20px;
        min-width:0px;

        .v-timeline-item__dot{
           left: -62px;
            top: 43px;
            position: absolute;
            height: 51px;
            width: 51px;
        }
    }
    .v-timeline-item__body > .v-card:not(.v-card--flat):before, .v-timeline-item__body >
     .v-card:not(.v-card--flat):after {
        border-top: 0px solid transparent;
        border-bottom: 0px solid transparent;
        border-right: 0px solid black;
        z-index: 0;
        opacity:0;
    }
    .v-card-color{
      background-color:$white !important;
      border-color: $white !important;
    }
    .v-timeline--dense:not(.v-timeline--reverse):before,
 .v-application--is-rtl
  .v-timeline--reverse.v-timeline--dense:before {
    right: auto;
    left: 25px !important;
}

}
.v-card-color{
  position: relative;
.prod-img-section{
  position: absolute;
  left:150px;
  top:6px;
      // margin: 5px -24px;
  .product-img-2{
            margin: -5px 36px;
  }
  .polaroid {
  width: 284px;
  padding: 10px 10px 20px 10px;
  border: 1px solid #BFBFBF;
  background-color: $white;
  box-shadow: 5px 5px 5px #aaaaaa;
}
.rotate_right {
  float: left;
  -ms-transform: rotate(7deg); /* IE 9 */
  -webkit-transform: rotate(7deg); /* Safari */
  transform: rotate(7deg);
}
.rotate_left {
  float: left;
  -ms-transform: rotate(-8deg); /* IE 9 */
  -webkit-transform: rotate(-8deg); /* Safari */
  transform: rotate(-8deg);
}
}
}

</style>
