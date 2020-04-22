<template>
  <div class="product-list">
    <v-container>
      <div class="product-head-text">
          Products
      </div>
      <div class="product-list-content">
          <v-row>
              <v-col cols=4 v-for="productList in productLists" v-bind:key="productList.title">
                <a :href="productList.id">
                <v-card
                    class="mx-auto product-card"
                    max-width="344"
                >
                    <v-img
                    class="product-img"
                    :src="productList.src"
                    height="200px"
                    ></v-img>

                    <v-card-title class="product-name">
                  {{productList.title}}
                    </v-card-title>

                    <v-card-subtitle class="product-price">
                  {{productList.price}}
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                        <v-icon left>delete_outline</v-icon>
                    </v-card-actions>
                </v-card>
                </a>
              </v-col>
          </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
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
      productLists: [
        {
          title: 'Sterling Silver',
          price: '$949.99',
          src: img1,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$700',
          src: img2,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$100.50',
          src: img3,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$450.20',
          src: img4,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$900.10',
          src: img5,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$400.00',
          src: img1,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$600.40',
          src: img2,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$390.90',
          src: img3,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$1190.90',
          src: img4,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$949.99',
          src: img5,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$700',
          src: img5,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$100.50',
          src: img1,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
        {
          title: 'Sterling Silver',
          price: '$450.20',
          src: img2,
          icon: 'mdiDelete',
          id: '/product/product-details',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';
.product-list{
    .product-head-text{
      font-size: 25px;
      font-weight: 700;
    }
    .product-list-content{
        .product-card{
            border-radius: 17px;
            .product-img{
                height: 100px !important;
            }
            .product-name{
                font-size: 14px;
                word-break: normal;
                line-height: 1.30rem;
                padding: 10px;
                color: $grey;
            }
            .product-price{
                font-size: 12px;
                margin: -11px 10px;
                padding:0px;
                color:$dark-grey;
                font-weight: 900;
            }
        }
    }
}
</style>
