// import axios from 'axios';

// import nuxtStorage from 'nuxt-storage';

// const adminUrl = process.env.NODE_ENV == 'development'
//   ? 'http://localhost:3001/'
//   : 'https://test-api.bitswap24.com/';

// export default {
//   register(data, callback) {
//     return axios
//       .post(`${adminUrl}User/register`, data)
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   login(data, callback) {
//     return axios
//       .post(`${adminUrl}User/login`, data)

//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   getUser(callback) {
//     return axios
//       .get(`${adminUrl}User/getUser`, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   generateQrCode(callback) {
//     return axios
//       .post(
//         `${adminUrl}User/generateQrCode`,
//         {},
//         {
//           headers: {
//             token: nuxtStorage.localStorage.getData('token'),
//           },
//         },
//       )
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   validateGoogleAuthenticationOnEnable(data, callback) {
//     return axios
//       .post(
//         `${adminUrl}User/validateGoogleAuthenticationOnEnableOrDisable`,
//         data,
//         {
//           headers: {
//             token: nuxtStorage.localStorage.getData('token'),
//           },
//         },
//       )
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   logout(callback) {
//     return axios
//       .post(
//         `${adminUrl}User/removeToken`,
//         {},
//         {
//           headers: {
//             token: nuxtStorage.localStorage.getData('token'),
//           },
//         },
//       )
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   getUserWithData(callback) {
//     return axios
//       .get(`${adminUrl}User/getUserWithData`, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   getUserWithReferralData(data, callback) {
//     return axios
//       .post(`${adminUrl}User/getUserWithReferralData`, data, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((userReferralData) => {
//         callback(null, userReferralData);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   getTransactionsForUser(data, callback) {
//     return axios
//       .post(`${adminUrl}User/getTransactionsForUser`, data, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   getUserByAddress(data, callback) {
//     return axios
//       .post(`${adminUrl}User/getUserByAddress`, data, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   transferTokensBetweenUsers(data, callback) {
//     return axios
//       .post(`${adminUrl}User/transferTokensBetweenUsers`, data, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   forgotPassword(data, callback) {
//     return axios
//       .post(`${adminUrl}User/forgotPassword`, data)
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   resetPassword(data, callback) {
//     return axios
//       .post(`${adminUrl}User/resetPassword`, data)
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   changePassword(data, callback) {
//     return axios
//       .post(`${adminUrl}User/changePassword`, data, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   getAllUsersForAdmin(data, callback) {
//     return axios
//       .post(`${adminUrl}User/getAllUsersForAdmin`, data, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   transferTokenForAdmin(data, callback) {
//     return axios
//       .post(`${adminUrl}User/adminTransferToUser`, data, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   getUserByAddressWithData(data, callback) {
//     return axios
//       .post(`${adminUrl}User/getUserByAddressWithData`, data, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   getTransactionsOfUserForAdmin(data, callback) {
//     return axios
//       .post(`${adminUrl}User/getTransactionsOfUserForAdmin`, data, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   validateGoogleAuthenticationOnLogin(data, callback) {
//     return axios
//       .post(`${adminUrl}User/validateGoogleAuthenticationOnLogin`, data)
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   validateGoogleAuthenticationOnDisable(data, callback) {
//     return axios
//       .post(
//         `${adminUrl}User/validateGoogleAuthenticationOnEnableOrDisable`,
//         data,
//         {
//           headers: {
//             token: nuxtStorage.localStorage.getData('token'),
//           },
//         },
//       )
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   editProfile(data, callback) {
//     return axios
//       .post(`${adminUrl}User/editProfile`, data, {
//         headers: {
//           token: nuxtStorage.localStorage.getData('token'),
//         },
//       })
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   sendEmail(data, callback) {
//     return axios
//       .post(`${adminUrl}User/getInTouch`, data)
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
//   resendVerificationEmail(data, callback) {
//     return axios
//       .post(`${adminUrl}User/resendVerificationEmail`, data)
//       .then((result) => {
//         callback(null, result);
//       })
//       .catch((err) => {
//         callback(err.response.data);
//       });
//   },
// };
