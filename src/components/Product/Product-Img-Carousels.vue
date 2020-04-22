<template>
    <div class="product-img-carousels">

            <v-carousel class="img-carousel" hide-controls>
                <v-carousel-item
                class="loop-carousel"
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                ></v-carousel-item>
            </v-carousel>

    </div>
</template>
<script>
import img1 from '../../assets/img/r-7.jpg';
import img2 from '../../assets/img/r-1.jpg';
import img3 from '../../assets/img/r-2.jpg';
import img4 from '../../assets/img/r-5.jpg';

export default {
  data() {
    return {
      items: [
        {
          src: img1,
        },
        {
          src: img2,
        },
        {
          src: img3,
        },
        {
          src: img4,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';
.product-img-carousels{
  .img-carousel,.v-carousel__item{
    height: 250px !important;
    .v-responsive__sizer{
      padding:0px;
    }
    .v-window__container,.v-window-item, .v-image, .v-image__image{
      border-radius: 16px;
    }
    .v-window__prev, .v-window__next {
        z-index: -22;
    }
    .v-carousel__controls{
        background: none;
        .v-item--active{
            color:$light-pink;
        }
    }
  }
}
</style>
