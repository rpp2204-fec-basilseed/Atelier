require('dotenv').config();
const express = require ('express');
const path = require ('path');
const axios = require('axios');
const bodyParser = require('body-parser')
const cors = require('cors');

// axios.defaults.baseURL = process.env.URL;
// const baseURL = process.env.URL;
// axios.default.headers.common['Authorization'] = process.env.API_KEY;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  let url = `${process.env.URL}/products`;

  if (req.query.p_id) {
    url += `/${req.query.p_id}`;
  }

  if (req.query.endpoint) {
    url += `/${req.query.endpoint}`;
  }

  console.log(req.query)
  axios({
    method: 'get',
    url: url,
    data: null,
    headers: {
      Authorization: process.env.API_KEY
    }
  })
    .then((products) => {
      return res.status(200).send(products.data);
    })
    .catch((err) => {
      throw new Error(err);
      return res.status(500);
    })
})

let port = process.env.PORT;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});