require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

// axios.defaults.baseURL = process.env.URL;
// const baseURL = process.env.URL;
// axios.default.headers.common['Authorization'] = process.env.API_KEY;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT;

let apiKey = process.env.API_KEY;

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
      console.log('PRODUCTS: ' + products);
      return res.status(200).send(products.data);
    })
    .catch((err) => {
      throw new Error(err);
      return res.status(500);
    })
})


app.get("/review", (req, res) => {
  if (req.query.productId) {
    let config = {
      method: "get",
      url:
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=" +
        req.query.productId +
        "&count=200",
      headers: {
        Authorization : apiKey
      }
    }

    axios(config)
    .then((reviewData) => {
      res.send(reviewData.data.results);
    })
    .catch((error) => {
      throw error;
    })
  }
});

app.get("/meta", (req, res) => {
  if (req.query.productId) {
    let config = {
      method: "get",
      url:
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=" +
        req.query.productId,
      headers: {
        Authorization: apiKey,
      },
    };

      axios(config)
      .then((metaData) => {
        res.send(metaData.data);
      })
      .catch((error) => {
        throw error;
      });
  }
});

app.put("/helpful", (req, res) => {
  if (req.query.reviewId) {
    let config = {
      method: "put",
      url:
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/" +
        req.query.reviewId +
        "/helpful",
      headers: {
        Authorization: apiKey,
      },
    };

      axios(config)
      .then((response) => {
        res.send();
      })

      .catch((error) => {
        throw error;
      });
  }
});

app.put("/report", (req, res) => {
  if (req.query.reviewId) {
    let config = {
      method: "put",
      url:
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/" +
        req.query.reviewId +
        "/report",
      headers: {
        Authorization: apiKey,
      },
    };


      axios(config)
      .then((response) => {
        console.log(response);
        res.send();
      })

      .catch((error) => {
        throw error;
      });
  }
});


app.post("/addReview", (req, res) => {
  console.log(req.body);

  var data = JSON.stringify(req.body);

  var config = {
    method: "post",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/",
    headers: {
      Authorization: apiKey,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then((res) => {
      res.status(200).send()
    })
    .catch((err) => {
      console.log('Could not add review: ', err);
    });

  // var config = {
  //   method: 'post',
  //   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
  //   headers: {
  //     'Authorization': apiKey,
  //     'Content-Type': 'text/plain'
  //   },
  //   data : data
  // };

  // axios(config)
  // .then(function (response) {
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  //   })
});

app.get('/questions', (req, res) => {
  let config = {
    headers: { 'Authorization' : process.env.API_KEY },
    params: {
      product_id: req.query.product_id
    },
  };
  axios.get(`${process.env.URL}/qa/questions`, config)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => console.log(err));
});

app.post('/addQuestion', (req, res) => {
  axios({
    method: 'post',
    url: `${process.env.URL}/qa/questions`,
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

app.post('/addAnswer', (req, res) => {
  axios({
    method: 'post',
    url: `${process.env.URL}/qa/questions/${req.body.question_id}/answers`,
    headers: {
      Authorization: process.env.API_KEY,
      contentType: 'application/json'
    },
    data: {
      body: req.body.body,
      name:  req.body.name,
      email: req.body.email,
      photos: req.body.photos,
    }
  })
    .then((response) => {
      console.log('post an answer---log req body', req.body);
      res.status(201).send(response.data);
    })
    .catch(error =>
      console.log(error)
    );
});

app.post("/cart", (req, res) => {
  var data = JSON.stringify({
    sku_id: req.body.sku_id,
  });

  var config = {
    method: "post",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart",
    headers: {
      Authorization: process.env.API_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.status(200);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500);
    });
});

app.post('/interactions', (req, res) => {
  var config = {
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
    headers: {
      'Authorization': process.env.API_KEY,
      'Content-Type': 'application/json'
    },
    data : req.body
  };

  console.log('WE INTERACTING');

  axios(config)
  .then(function (response) {
    // console.log(JSON.stringify(response.data));
    res.sendStatus(response.status);
  })
  .catch(function (error) {
    console.log(error);
  });

});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
