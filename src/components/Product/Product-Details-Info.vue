<template>
  <div class="product-details-info-section">
      <v-card
    >
    <v-card-actions class="justify-space-between">
        <div class="product-price">
                $1334.90
            </div>
            <div class="product-ratings">
                    <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            ></v-rating>
            </div>
        </v-card-actions>
        <v-row style="padding: 0 10px;" >
            <v-col cols="3">
            <div class="size-section">
            <div class="size-text firsans-bold">Size</div>
            <div class="size-number">6.0</div>
            </div>
            </v-col>

            <v-col cols="5">
            <div class="dimond-carat-section">
            <div class="dimond-text firsans-bold">Dimond Carat</div>
            <div class="dimond-number">1/7</div>
            </div>
            </v-col>
            <v-col cols="4">

            <div class="metal-color-section">
            <div class="metal-text firsans-bold">Metal Color</div>
            <div class="metal-color d-flex justify-space-center">
                    <v-card
                    :style="{
                        background:'#696969',
                        border: '2px solid',
                        borderColor: '#696969',
                        borderRadius:'0px',
                    }"
                    width="20"
                    height="20"
                    class=""
                    ></v-card>
                    <v-card
                    :style="{
                        background:'#FFA726',
                        border: '2px solid',
                        borderColor: '#FFA726',
                        borderRadius:'0px',
                    }"
                    width="20"
                    height="20"
                    class="ml-2"
                    ></v-card>
            </div>
            </div>
            </v-col>
        </v-row>
        <!-- <v-card-actions class="justify-space-between">
        <div class="size-section">
            <div class="size-text firsans-bold">Size</div>
            <div class="size-number">6.0</div>
            </div>
            <div class="dimond-carat-section">
            <div class="dimond-text firsans-bold">Dimond Carat</div>
            <div class="dimond-number">1/7</div>
            </div>
            <div class="metal-color-section">
            <div class="metal-text firsans-bold">Metal Color</div>
            <div class="metal-color d-flex justify-space-center">
                    <v-card
                    :style="{
                        background:'#696969',
                        border: '2px solid',
                        borderColor: '#696969',
                        borderRadius:'0px',
                    }"
                    width="20"
                    height="20"
                    class=""
                    ></v-card>
                    <v-card
                    :style="{
                        background:'#FFA726',
                        border: '2px solid',
                        borderColor: '#FFA726',
                        borderRadius:'0px',
                    }"
                    width="20"
                    height="20"
                    class="ml-2"
                    ></v-card>
            </div>
            </div>
        </v-card-actions> -->
        <v-card-actions class="desc-section">
        <div class=" description-text firsans-bold">
        Description
        </div>
        <div class=" description-content">
            I'm a thing. But, like most politicians, he promised more than he could
             deliver.
            You won't have time for sleeping, soldier, not with all the bed making
             you'll be doing.
                Then we'll go with that data file! Hey, you add a one and two zeros
                 to that or we walk!
                You're going to do his laundry? I've got to find a way to escape.
                 I'm a thing. But, like most politicians, he promised more than he could
             deliver.
            You won't have time for sleeping, soldier, not with all the bed making
             you'll be doing.
                Then we'll go with that data file! Hey, you add a one and two zeros
                 to that or we walk!
                You're going to do his laundry? I've got to find a way to escape.
        </div>
        </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';

.product-details-info-section{
    margin: 20px 0px;
    .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
        border-radius: 11px;
    }
    .v-card__actions{
        .product-price{
            font-size: 15px;
        }
        .product-ratings{
            .v-rating .v-icon {
                padding: 0.1rem;
            }
        }
        .size-text,.dimond-text,.metal-text,.description-text{
            font-size: 15px;
        }

    }
    .desc-section{
        display: block;
        .description-content{
            font-size: 13px;
            text-align: justify;
        }
    }
}
</style>
