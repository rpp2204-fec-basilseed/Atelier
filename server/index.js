require('dotenv').config();
const express = require ('express');
const path = require ('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios');

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

app.get('/questions', (req, res) => {
  let config = {
    headers: { 'Authorization' : process.env.API_KEY },
    params: {
      product_id: req.query.product_id
    },
  };
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions', config)
    .then((result) => {
      console.log(result.data);
      res.status(200).send(result.data);
    })
    .catch((err) => console.log(err));
});

// app.post('/questions', (req, res) => {
//   // TODO: body parameters: body, name, email, product_id(INT)
//   let config = {
//     headers: { 'Authorization' : process.env.REACT_APP_API_KEY },
//     params: {
//       product_id: req.query.product_id
//     },
//   };
//   axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions', config)
//     .then((result) => {
//       console.log('server side POST request result', result);
//       console.log('server side POST req.body', req.body);
//       res.status(201).send('success');
//     })
//     .catch(err => console.log(err));
// });

// app.get('/products', (req, res) => {

//   var config = {
//     method: 'get',
//     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.query.curr_product_id,
//     headers: {
//       'Authorization': process.env.API_KEY
//     }
//   };

//   axios(config)
//   .then(function (response) {
//     res.json(response.data)
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// });

// app.get('/styles', (req, res) => {
//   var config = {
//     method: 'get',
//     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.query.curr_product_id+'/styles',
//     headers: {
//       'Authorization': process.env.API_KEY
//     }
//   };

//   axios(config)
//   .then((response) => {
//     res.json(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });

app.post('/cart', (req, res) => {
  console.log('req body: ' + JSON.stringify(req.body));

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
    console.log(JSON.stringify(response.data));
    res.status(200);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500);
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
