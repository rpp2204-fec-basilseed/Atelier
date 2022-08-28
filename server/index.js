require('dotenv').config();
const express = require ('express');
const path = require ('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios');
const querystring = require('querystring');


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

app.get('/questions', (req, res) => {
  let config = {
    headers: { 'Authorization' : process.env.API_KEY },
    params: {
      product_id: req.query.product_id
    },
  };
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions', config)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => console.log(err));
});

app.post('/addQuestion', (req, res) => {
  // TODO: body parameters: body, name, email, product_id(INT)

  axios({
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions',
    headers: {
      Authorization: process.env.API_KEY,
      contentType: 'application/json'
    },
    data: {
      body: req.body.body,
      name:  req.body.name,
      email: req.body.email,
      product_id: req.body.product_id,
    }
  })
    .then((response) => {
      console.log('log req body', req.body);
      res.status(201).send(response.data);
    })
    .catch(error =>
      console.log(error)
    );
});

app.post('/cart', (req, res) => {
  var data = JSON.stringify({
    "sku_id": req.body.sku_id
  });

  var config = {
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart',
    headers: {
      'Authorization': process.env.API_KEY,
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    res.status(200);
  })
  .catch(function (error) {
    res.status(500);
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});