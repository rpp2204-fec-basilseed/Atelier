require('dotenv').config();
const express = require('express');
const path = require('path');
const Axios = require('axios')

let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

// more to come

let port = process.env.PORT;

let apiKey = process.env.API_KEY;

app.get('/review', (req, res) => {
  if (req.query.productId) {

    let config = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=' + req.query.productId + '&count=200',
      headers: {
        Authorization : apiKey
      }
    }

    Axios(config)
    .then((reviewData) => {
      res.send(reviewData.data.results);
    })
    .catch((error) => {
      throw error;
    })

  }
  });

  app.get('/meta', (req, res) => {
    if (req.query.productId) {

      let config = {
        method: 'get',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=' + req.query.productId,
        headers: {
          Authorization : apiKey
        }
      }

      Axios(config)
      .then((metaData) => {
        res.send(metaData.data);
      })
      .catch((error) => {
        throw error;
      })
    }
  });

  app.put('/helpful', (req, res) => {
    if (req.query.reviewId) {

      let config = {
        method: 'put',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/' + req.query.reviewId + '/helpful',
        headers: {
          Authorization : apiKey
        }
      }

      Axios(config)
      .then((response) => {
        res.send();
      })

      .catch((error) => {
        throw error;
      })
    }
  });

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});