<template>
    <div class="defect-detection-section">
        <v-container>
            <v-row>
                <v-col cols=6 v-for="(defectDetectionList,i) in defectDetectionLists"
                        :key="i" class="defect-compare-img">
                        <v-card class="detection-card">
                            <v-img
                                class="detection-img"
                                :src="defectDetectionList.img"
                                :lazy-src="defectDetectionList.img"
                                height="100px"></v-img>
                        </v-card>
                        <div class="defect-compare-text text-center">
                                {{defectDetectionList.title}}
                        </div>
                </v-col>
            </v-row>
            <v-card class="defect-detection-card">
                <div class="head-text">
                    Defect Detection
                </div>
                <v-card class="detection-card">
                    <v-img
                        class="detection-img"
                        :src='imgDefect'
                        :lazy-src="imgDefect"
                        height="150px">
                    </v-img>
                   </v-card>
                <v-row class="all-defect-images">
                    <v-col cols=2 v-for="(smallDefectdetectionList,i) in smallDefectdetectionLists"
                            :key="i" class="defect-compare-img">
                                <v-img
                                    class="detection-img"
                                    :src="smallDefectdetectionList.src"
                                    :lazy-src="smallDefectdetectionList.src"
                                    height="50px"></v-img>
                    </v-col>
                </v-row>
                <v-card-actions class="desc-section">
                <div class=" description-text firsans-bold">
                Description
                </div>
                <div class=" description-content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolor
                     magna aliquam erat volutpat.Utwisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit
                       lobortis nisl ut aliquip ex ea commodo consequat.
                       Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolor
                     magna aliquam erat volutpat.Utwisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit
                       lobortis nisl ut aliquip ex ea commodo consequat.
                </div>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>
<script>
// import img5 from '../../assets/img/r-5.jpg';
// import img1 from '../../assets/img/r-1.jpg';
// import img2 from '../../assets/img/r-2.jpg';
// import img3 from '../../assets/img/r-7.jpg';
import img4 from '../../assets/img/r-4.jpg';
// import img6 from '../../assets/img/r-5.jpg';
// import img7 from '../../assets/img/r-4.jpg';
// import img8 from '../../assets/img/r-1.jpg';
// import img9 from '../../assets/img/r-2.jpg';

export default {
  data() {
    return {
      show: false,
      imgDefect: img4,
      defectDetectionLists: [
        {
          title: 'Original Image',
          img: img4,
        },
        {
          title: 'Photo Image',
          img: img4,
        },
      ],
      smallDefectdetectionLists: [
        {
          title: 'Sku1278',
          price: '$949.99',
          src: img4,
          icon: 'mdiDelete',
          isActive: false,

        },
        {
          title: 'Sku1278',
          price: '$700',
          src: img4,
          icon: 'mdiDelete',
          isActive: false,

        },
        {
          title: 'Sku1278',
          price: '$100.50',
          src: img4,
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
          src: img4,
          icon: 'mdiDelete',
          isActive: false,
        },
        {
          title: 'Sku1278',
          price: '$400.00',
          src: img4,
          icon: 'mdiDelete',
          isActive: false,
        },
        {
          title: 'Sku1278',
          price: '$600.40',
          src: img4,
          icon: 'mdiDelete',
          isActive: false,
        },
        {
          title: 'Sku1278',
          price: '$390.90',
          src: img4,
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
          src: img4,
          isActive: false,
        },
        {
          title: 'Sku1278',
          price: '$700',
          src: img4,
          isActive: false,
        },
        {
          title: 'Sku1278',
          price: '$450.20',
          src: img4,
          icon: 'mdiDelete',
          isActive: false,
        },
      ],
    };
  },
  methods: {
    clickIcon(i) {
      console.log('i', i);
      this.detectionLists[i].isActive = !this.detectionLists[i].isActive;
      console.log('this.detectionLists[i].isActive', this.detectionLists[i].isActive);
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';
.defect-detection-section{
    .defect-compare-img{
        .detection-card{
            border-radius: 17px;
            .defect-compare-text{
                font-size:16px;
            }
        }
    }
    .defect-detection-card{
        margin: 10px 0;
        border-radius:17px !important;
        .head-text{
            padding:10px 10px;
            font-size: 22px;
            font-weight: 700;
        }
        .detection-card{
              margin: auto 67px;
              border-radius:17px;
        }
        .all-defect-images{
            margin: 10px;
            .defect-compare-img{
                padding: 7px 2px;
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
}
</style>
