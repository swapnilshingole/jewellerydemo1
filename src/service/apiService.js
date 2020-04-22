import axios from 'axios';

const adminUrl = 'http://localhost:3001/';
  
export default {
  login(data, callback) {
	  console.log("apiserviceData",data);
    return axios
      .post(`${adminUrl}User/login`, data)
      .then((result) => {
		  console.log("loginAPIResult",result)
        callback(null, result);
      })
      .catch((err) => {
		callback(err.response.data);
      });
  },
};
