<template>
    <div class="signup-section back">
    <v-container>
    <div class="signup-content">
      <div class="text-center header-text">
    CREATE ACCOUNT</div>
	<v-form v-model="valid" ref="form">
		<v-row>
			<v-text-field
			v-model="name"
			label="Name"
			:rules="nameRules"
			required
			></v-text-field>
		</v-row>
		<v-row>
			<v-text-field
			v-model="email"
			label="Email"
			:rules="emailRules"
			required
			></v-text-field>
		</v-row>
		<v-row>
			<v-text-field
			v-model="password"
			label="Password"
			type="password"
			:rules="[passwordRules.required, passwordRules.min]"
			required
			></v-text-field>
		</v-row>
		<v-row dense>
			<v-col cols="12">
			<div class="text-center btn-signup">
				<v-btn rounded @click="submit">SIGN UP</v-btn>
			</div>
			</v-col>
		</v-row>
	</v-form>
      <v-row dense>
      <v-col cols="12">
      <div class="text-center agree-to-terms">
          By creating an account you agree to the
            <router-link to="#"
               class="text-center"
            >Terms of use</router-link>
        </div>
        </v-col>
      <v-col cols="12">
      <div class="text-center have-an-account">
          <router-link to="/login"
              class="text-center"
            >Already have an account ?</router-link>
        </div>
        </v-col>
      </v-row>
	</div>
      </v-container>
    </div>
</template>
<script>
export default {
  name: 'more-section',
  data() {
    return {
      nameRules: [
        (v) => !!v || 'Name is required',
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: {
        required: (value) => !!value || 'Password is required.',
        min: (v) => (v && v.length >= 4) || 'Min 4 characters',
      },
    };
  },
  methods: {
    submit() {
      const flag = this.$refs.form.validate();

      if (flag) {
        console.log('redirect');
        this.$router.push('/product');
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
.signup-section{
    .signup-content{
        margin: 70px 37px 0 37px;
       .header-text{
          font-size: 25px;
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
      .btn-signup{
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
      .have-an-account{
        margin-top:40px;
        font-size:16px;
        a{
          color:$white !important;
        }
      }
      .agree-to-terms{
        margin-top:20px;
        font-size:16px;
        color:$white !important;
        a{
          color:$active-btn-yellow !important;
        }
      }
    }
}

</style>
