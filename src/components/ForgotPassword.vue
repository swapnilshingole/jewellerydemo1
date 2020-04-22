<template>
    <div class="forgot-password-section back">
    <v-container>
   <div class="forgot-password-content">
      <div class="head-text text-center">
    Forgot your password?</div>
    <v-row>
        <blockquote class=" blockquote">Enter your email and we will send you
        instructions
        on how to reset your password.</blockquote>
    </v-row>
		<v-form v-model="valid" ref="form">
			<v-row>
				<v-text-field
				v-model="email"
				label="Email"
				:rules="emailRules"
				required
				></v-text-field>
			</v-row>
			<v-row dense>
				<v-col cols="12">
				</v-col>
				<v-col cols="12">
				<div class="text-center btn-resetpass">
					<v-btn rounded @click="submit">Reset Password</v-btn>
				</div>
				</v-col>
			</v-row>
		</v-form>
   </div>
    </v-container>
    </div>
</template>
<script>
export default {
  name: 'forgot-password-section',
  data() {
    return {
		emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
    };
  },
  methods: {
      submit () {
		var flag = this.$refs.form.validate()
		
		if(flag){
			console.log("redirect");
			this.$router.push('/product')
		}
      }
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/Home.scss';
.forgot-password-section{
  .forgot-password-content{
    margin: 154px 37px 0 37px;
    .head-text{
      font-size: 20px;
      font-weight: 400;
      color:$white;
    }
    .blockquote{
       color:$white;
       font-size: 14px;
       font-weight: 400;
    }
    .v-input input {
      border:0px solid $white;
    }
    .theme--light.v-label {
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

        .btn-resetpass{
        margin-top:40px;
        margin-bottom: 100px;
         :focus {
           background: $white !important;
            }
        .v-btn{
            font-size:20px;
            font-weight: 500;
            width: 100%;
            height: 50px;
            text-transform: capitalize;
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
  }
}
.back {
  background: url(../assets/apptheme.jpg) rgba(0, 0, 0, 0.5) no-repeat center center;
  background-size: cover;
  height: 100vh;
}
</style>
