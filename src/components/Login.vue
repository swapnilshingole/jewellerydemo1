<template>
    <div class="login-section back">
    <v-container>
    <div class="login-setup">
      <div class="header-text text-center">
    Jewellery</div>
    <v-form v-model="valid" ref="login">
      <v-row>
        <v-text-field
          v-model="login.email"
          label="Email"
          :rules="emailRules"
          required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="login.password"
          label="Password"
          type="password"
		  :rules="passWordRules"
          required
        ></v-text-field>
      </v-row>
      <v-row dense>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
         <div class="text-center btn-signin">
            <v-btn  @click="submit(login)" :class="{ red: !valid, green: valid }"
            rounded >SIGN IN</v-btn>
        </div>
        </v-col>
      </v-row>
    </v-form>
      <v-row dense>
      <v-col cols="12">
      <div class="text-center forgot-password">
      <router-link to="/forgot-password"
             class="text-center" type="password"
            >Forgot Password ?</router-link>
        </div>
        </v-col>
      <v-col cols="12">
      <div class="text-center have-an-account">
      <router-link to="/signup"
              class="text-center"
            >Don't have an account ?</router-link>
        </div>
        </v-col>
      </v-row>
    </div>
    </v-container>
    </div>
</template>
<script>
export default {
  name: 'login-section',
  data() {
    return {
	  login : {
		email: "",
		password: ""
	  },
      valid: false,
      name: 'Default',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
      passWordRules: [
        (v) => !!v || 'Password is required',
      ],
    };
  },
  methods: {
    submit(login) {
      const flag = this.$refs.login.validate();
	
      if (flag) {
        console.log('redirect');
        this.$router.push('/product');
	
	// apiService.login(login).then((data) => {
	// 		console.log("response",data)
    //      this.contacts = data.data;
    //      this.numberOfContacts= data.count;
    // 	});
      }
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';
.back {
  background: url(../assets/apptheme.jpg) rgba(0, 0, 0, 0.5) no-repeat center center;
  background-size: cover;
  height: 100vh;
}
.login-section{
  // background-image: url(../assets/img/ring-bg-d.png) no-repeat center center;
  // background-size: cover;
  // height: 100vh;
  // padding-left:10px;
  .login-setup{
    margin: 154px 37px 0 37px;
    .header-text{
      font-size: 45px;
      font-weight: 400;
      color:$white;
    }

      .v-input input {
      border:0px solid $white;
    }
    .theme--light.v-label {
      color: $white;
    }
    .theme--light.v-input {
        color: $white;
      }

      .primary--text {
        color:$white !important;
        caret-color: $white !important;
      }
      .theme--light.v-input input, .theme--light.v-input textarea {
          color:$white !important;
      }
      .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
           border-color: $white;
        }
       .btn-signin{
        margin-top:40px;
         :focus {
           background: $white !important;
            }
        .v-btn{
            font-size:20px;
            font-weight: 500;
            width: 100%;
            height: 50px;
            text-transform: uppercase;
            color: $white;
            background-color:$active-btn-yellow!important;
            :focus {
           background: $white !important;
            }
            :hover {
             background: $active-btn-yellow!important;
            }
        }
         .v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before {
            opacity: 0;
        }
    }
    .forgot-password,.have-an-account{
      font-size:16px;
      a{
        color:$white !important;
      }
    }
    .forgot-password{
      margin-top:20px;
    }
    .have-an-account{
      margin-top:40px;
    }
}
}

</style>
