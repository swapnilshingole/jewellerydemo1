// <template>
//   <div class="login firsans-regular">
//     <div class="form justify-content-center">
//       <div class="card mt-4">
//         <div class="card-body">
//           <div
//             class="text-capitalize text-center font-weight-bold f22 login-text mb-3"
//           >Log In Your Account</div>
//           <b-form name="form" v-on:submit.prevent="onSubmit(form)" novalidate>
//             <b-form-group label-for="email">
//               <b-form-input
//                 name="email"
//                 id="email"
//                 type="email"
//                 class="input-box"
//                 v-model="form.email"
//                 pattern=".+@gmail.com"
//                 required
//                 placeholder="Enter email"
//               ></b-form-input>
//               <div v-if="$v.form.email.$error" class="error-txt">
//                 <span v-if="!$v.form.email.required ">Email is required</span>
//                 <span v-if="!$v.form.email.email">Email is invalid</span>
//               </div>
//             </b-form-group>

//             <b-form-group>
//               <b-form-input
//                 name="password"
//                 type="password"
//                 class="my-1 input-box"
//                 v-model="form.password"
//                 required
//                 placeholder="Password"
//               ></b-form-input>
//               <div v-if="$v.form.password.$error" class="error-txt text-danger">
//                 <span v-if="!$v.form.password.required">Password is required</span>
//                 <span v-if="!$v.form.password.minLength">Password must be at least 8 characters</span>
//               </div>
//             </b-form-group>

//             <div class="button mt-3 mb-3 text-center">
//               <button
//                 v-promise-btn="{ promise: bootstrapBtnPromise }"
//                 type="submit"
//                 class="btn btn-block py-1 firsans-bold f18 login-button"
//               >Login</button>
//             </div>
//             <div class="forgot-password text-right f14 mb-3">
//               <router-link to="/forgot-password" class="font-italic">Forgot Password?</router-link>
//             </div>
//           </b-form>

//           <div class="signup text-center font-italic f14">
//             <div class="Account-need">
//               Need an Account?
//               <router-link to="/signup" class="signup-link">SignUp</router-link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </template>

// <script>
// import headerLogo from '@/assets/img/logo.png'
// import { required, minLength, email } from 'vuelidate/lib/validators'
// import apiService from '../../service/apiService'
// import nuxtStorage from 'nuxt-storage'

// export default {
//   data() {
//     return {
//       error: [],
//       bootstrapBtnPromise: '',
//       form: {
//         email: '',
//         password: ''
//       }
//     }
//   },
//   methods: {
//     onSubmit(form) {
//       this.$v.form.$touch()
//       if (this.$v.form.$error) {
//         console.log('error')
//         return
//       } else {
//         this.bootstrapBtnPromise = apiService.login(form, (err, result) => {
//           if (err) {
//             this.$toaster.error(err)
//           } else {
//             if (result.data.isTwoFactorAuthenticated) {
//               this.$router.push({
//                 path: '/authentication/' + result.data.twoFactorToken
//               })
//             } else {
//               nuxtStorage.localStorage.setData(
//                 'token',
//                 result.data.accessToken,
//                 1,
//                 'd'
//               )
//               if (result.data.accessLevel == 'admin') {
//                 this.$router.push('/user')
//               } else {
//                 this.$router.push('/profile')
//               }
//               this.$toaster.success('Logged In Successfully')
//             }
//           }
//         })
//       }
//     }
//   },
//   validations: {
//     form: {
//       email: {
//         required,
//         email
//       },
//       password: {
//         required,
//         minLength: minLength(8)
//       }
//     }
//   }
// }
// </script>

// <style lang="scss" scoped>
// @import '@/assets/scss/Home.scss';
// .login {
//   // background: url('~@/assets/img/banner.png') no-repeat center center;
//   // background-size: cover;
//   // height: 100vh;

//   .card {
//     margin: 0 auto;
//     width: 350px;
//     border-radius: 0px;

//     .card-body {
//       padding: 30px;
//       .login-text {
//         color: $gray;
//       }
//       .forgot-password {
//         margin-top: -12px;
//         a {
//           color: $gray;
//           &:hover {
//             color: $black;
//           }
//         }
//       }
//       .login-button {
//         border-radius: 0px;
//         box-shadow: none;
//         background-color: $gray;
//         color: $white;
//         transition: all 0.5s;
//       }
//       .login-button:hover {
//         background-color: $yellow;
//         color: $black;
//         transition: all 0.5s;
//       }
//       .signup {
//         color: $input-placeholder;
//         .signup-link {
//           text-decoration: underline;
//           color: $gray;
//         }
//         .signup-link:hover {
//           color: $black;
//         }
//       }
//     }
//   }
// }
// </style>
