<template>
 <div class="account-details-section">
    <v-container>
       <v-card
        :loading="loading"
        class="mx-auto"
        max-width="374"
      >
      <v-row class="mx-auto">
        <v-col cols=5 class="logger-img-section">
          <div class="logger-img">
            <v-img
                class="elevation-6 mx-auto"
                :src="imageUrl"
              ></v-img>
            <div class="edit-photo-section">
                <v-btn @click="picFile()">
                  Edit Photo
                </v-btn>
				<input type="file" style="display: none" 
					ref="fileInput" 
					accept="image/*" @change="onFilePicked">
            </div>
          </div>
        </v-col>
        <v-col cols=7 class="pl-0">
          <div class="name-section">
              <v-text-field
                v-model="name"
                single-line
                disabled
                :rules="nameRules"
              >Rohini</v-text-field>
                <v-text-field
                v-model="lastName"
                 :rules="lastNameRules"
                single-line
                disabled
              >Verma</v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-row class="mx-auto account-another-info">
        <v-col cols=12>
          <v-text-field
              label="User Name"
              disabled
              v-model="userName"
              :rules="userNameRules"
            ></v-text-field>
        </v-col>
        <v-col cols=12>
          <v-text-field
              label="Email"
              disabled
              v-model="email"
              :rules="emailRules"
            ></v-text-field>
        </v-col>
        <v-col cols=12>
          <v-text-field
              label="Password"
              disabled
              v-model="password"
            ></v-text-field>
        </v-col>
        <v-col cols=12>
          <v-text-field
              label="Phone Number"
              disabled
              v-model="phoneNumber"
            ></v-text-field>
        </v-col>
         <v-col cols=12>
          <!-- <v-text-field
              label="Address"
              disabled
              v-model="address"
            ></v-text-field> -->
            <v-textarea
                  label="Address"
              disabled
              v-model="address"
          rows="2"
          row-height="20"
        ></v-textarea>
        </v-col>
      </v-row>
      </v-card>
    </v-container>
 </div>
</template>

<script>
export default {
  name: 'account-form',
  data(){
    return{
	  image:null,	
      name:"John",
	  imageUrl:"https://cdn.vuetifyjs.com/images/john.png",
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      lastName:"Verma",
      lastNameRules: [
        v => !!v || 'Last Name is required',
        v => (v && v.length <= 15) || 'Last Name must be less than 15 characters',
      ],
      userName:"JhonMaster045",
      userNameRules: [
        v => !!v || 'User Name is required',
        v => (v && v.length <= 15) || 'User Name must be less than 15 characters',
      ],
      email: 'JohnVerma045@wohlig.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password:"**********",
      phoneNumber:"9619793665",
      address:"Amba Bhavan, Level 3 B Wing, Plot No 30, Sion Circle(E)"
    }
  },
  methods: {
	picFile(){
		this.$refs.fileInput.click()
	},
	onFilePicked(event) {
		const files = event.target.files;
		let filename = files[0].name;
		if(filename.lastIndexOf('.') <= 0) {
			return alert('Please add a valid file');
		}
		const fileReader = new FileReader()
		fileReader.addEventListener('load', () => {
			this.imageUrl = fileReader.result
		})
		fileReader.readAsDataURL(files[0])
		this.image = files[0];
	}
  }
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';

.account-details-section{
  margin-top:20px;
  .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 17px;
  }
  .logger-img-section{
    margin:auto;
      .logger-img{
      .v-image{
        width:75px;
        height:75px;
        border-radius:50%;
      }
      .edit-photo-section{
        margin-top:3px;
        .v-btn{
          width: 100%;
          border-radius: 20px;
        }
        .v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
          background-color: $white !important;
        }
      }
    }
  }
  .name-section{
    margin-top: 20px;
  }
  .account-another-info{
    padding:20px 0;
  }
    .v-input .v-input__control .v-input__slot .v-text-field__slot{
      border-bottom: 1px solid $date-grey;
      input{
        border: 0px solid $grey;
        font-size: 18px;
      }
      .v-label{
        font-size:22px;
        top:-3px;
        text-transform: uppercase;
        color:$grey;
      }
    }
    [disabled] {
    cursor: default;
    color: $black !important;
    }
    .v-text-field {
      padding-top: 0px;
      margin-top: 0px;
    }
}
</style>
