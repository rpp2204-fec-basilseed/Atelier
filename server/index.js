require('dotenv').config();
const express = require ('express');
const axios = require('axios');

let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

// more to come

app.get('/products', (req, res) => {

  var config = {
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.query.curr_product_id,
    headers: {
      'Authorization': process.env.REACT_APP_API_KEY
    }
  };

  axios(config)
  .then(function (response) {
    res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

});

app.get('/styles', (req, res) => {
  var config = {
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.query.curr_product_id+'/styles',
    headers: {
      'Authorization': process.env.REACT_APP_API_KEY
    }
  };

  axios(config)
  .then((response) => {
    res.json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.post('/cart', (req, res) => {
  console.log('req body: ' + JSON.stringify(req.body));

  var data = JSON.stringify({
    "sku_id": req.body.sku_id
  });

  var config = {
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart',
    headers: {
      'Authorization': process.env.REACT_APP_API_KEY,
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

let port = process.env.PORT;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});