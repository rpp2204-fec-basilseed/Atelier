require('dotenv').config();
const express = require ('express');
const axios = require('axios');

let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

// more to come

let port = process.env.PORT;

app.get('/questions', (req, res) => {
  let config = {
    headers: { 'Authorization' : process.env.REACT_APP_API_KEY },
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
