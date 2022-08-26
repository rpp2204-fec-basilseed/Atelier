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

  app.put('/report', (req, res) => {
    if (req.query.reviewId) {

      let config = {
        method: 'put',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/' + req.query.reviewId + '/report',
        headers: {
          Authorization : apiKey
        }
      }

      Axios(config)
      .then((response) => {
        console.log(response)
        res.send();
      })

      .catch((error) => {
        throw error;
      })
    }
  });

  app.post('/addReview', (req, res) => {
    var data = {
      product_id:71697,
      rating:5,
      summary:"It can't get better than this! Buy this one now!!",
      body:"Seriously. This is life changing. I have already ordered 73 more for all my family and friends.",
      recommend:true,
      name:"marysmith74",
      email:"mzmarys74@aol.com",
      photos:[]
    }
var config = {
  method: 'post',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
  headers: {
    'Authorization': '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',
    'Content-Type': 'text/plain'
  },
  data : data
};

Axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
  })

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});