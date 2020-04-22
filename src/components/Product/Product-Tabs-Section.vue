<template>
  <v-card class="product-tabs-section">
    <v-tabs
      v-model="tab"
      background-color="white"
         fixed-tabs
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item class="timeline-tab-section">
        <v-card flat>
          <v-card-text>
            <productTimelines/>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item class="Details-tab-section">
        <v-card flat>
          <v-card-text>
              <productImgCarousels/>
              <productDetailsInfo />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import productTimelines from '@/components/Product/Product-Timelines.vue';
import productImgCarousels from '@/components/Product/Product-Img-Carousels.vue';
import productDetailsInfo from '@/components/Product/Product-Details-Info.vue';

export default {
  name: 'product-tabs-section',
  components: {
    productTimelines,
    productImgCarousels,
    productDetailsInfo,
  },
  data() {
    return {
      tab: null,
      items: [
        {
          tab: 'Timeline',
        },
        {
          tab: 'Details',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';
.product-tabs-section{
    .v-card--flat{
        background:$section-bg;
        box-shadow: none;
    }
    .v-slide-group__content{
        .v-tab{
            text-transform: capitalize;
            color:$black;
        }
        .v-tab--active{
            color: $active-btn-yellow;
        }
        .v-tabs-slider-wrapper, .v-tabs-slider{
            color: $active-btn-yellow;
            padding: 0 34px;
        }
    }
    .timeline-tab-section,.Details-tab-section{
      box-shadow: 0px 25px 0px 0px $section-bg,
       102px 56px 117px -13px $section-bg,
        -5px 35px 23px 0px $section-bg,
         46px 0px 37px 0px $section-bg;

    }
}
</style>
