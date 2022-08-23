require('dotenv').config();
const axios = require('axios');

axios.defaults.baseURL = process.env.URL;
axios.default.headers.common['Authorization'] = process.env.API_KEY;

module.exports = {
  fetchProducts: (p_ids) => {
    console.log(p_ids);
    return Promise.all(p_ids.map(id => (
      axios.get(`/products/${id}`)
        .then(res => {
          console.log(res.data);
          return res.data;
        })
        .catch(err => {
          throw new Error(err);
        })
    )));
  }
}