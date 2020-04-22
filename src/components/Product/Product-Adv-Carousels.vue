<template>
  <div class="product-adv-carousels">
    <v-container>
      <v-carousel class="adv-carousel" hide-delimiters show-arrows-on-hover touch>
        <v-carousel-item
        class="loop-carousel"
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>
<script>
import adv1 from '../../assets/img/r-7.jpg';
import adv2 from '../../assets/img/r-2.jpg';
import adv3 from '../../assets/img/r-4.jpg';
import adv4 from '../../assets/img/r-1.jpg';

export default {
  data() {
    return {
      items: [
        {
          src: adv1,
        },
        {
          src: adv2,
        },
        {
          src: adv3,
        },
        {
          src: adv4,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';
.product-adv-carousels{
  .adv-carousel,.v-carousel__item{
    height: 300px !important;
    .v-responsive__sizer{
      padding:0px;
    }
    .v-window__container,.v-window-item, .v-image, .v-image__image{
      border-radius: 16px;
    }
  }
}
</style>
