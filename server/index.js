require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');
const querystring = require('querystring');

const app = express();
// Compress all HTTP responses
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressStaticGzip(path.join(__dirname, "/../client/dist"), { index: false }));
app.use(compression());

app.get('.js*', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

let port = process.env.PORT;

let apiKey = process.env.API_KEY;

app.get("/products", (req, res) => {
  let url = `${process.env.URL}/products`;

  if (req.query.p_id) {
    url += `/${req.query.p_id}`;
  }

  if (req.query.endpoint) {
    url += `/${req.query.endpoint}`;
  }

  axios({
    method: "get",
    url: url,
    data: null,
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
    .then((products) => {
      return res.status(200).send(products.data);
    })
    .catch((err) => {
      throw new Error(err);
      return res.status(500);
    });
});

app.get("/review", (req, res) => {
  if (req.query.productId) {
    let config = {
      method: "get",
      url:
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=" +
        req.query.productId +
        "&count=200",
      headers: {
        Authorization: apiKey,
      },
    };

    axios(config)
      .then((reviewData) => {
        res.send(reviewData.data.results);
      })
      .catch((error) => {
        throw error;
      });
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
        res.send();
      })

      .catch((error) => {
        throw error;
      })
    }
  });

app.post("/addReview", (req, res) => {

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
    .then((result) => {
      res.send('newest')
    })
    .catch((err) => {
      console.log("Could not add review: ", err);
    });
});

app.get("/rating", (req, res) => {

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

        var overall = 0;
        var totalRatings = 0;

        for (let rating in metaData.data.ratings) {
          totalRatings += parseInt(metaData.data.ratings[rating]);
          overall += parseInt(metaData.data.ratings[rating]) * parseInt(rating);
        }

        overall = overall / totalRatings;

        res.send({
          rating: overall
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

app.get("/questions", (req, res) => {
  let config = {
    headers: { Authorization: process.env.API_KEY },
    params: {
      product_id: req.query.product_id,
    },
  };
  axios
    .get(`${process.env.URL}/qa/questions`, config)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => console.log(err));
});

app.post("/addQuestion", (req, res) => {
  axios({
    method: "post",
    url: `${process.env.URL}/qa/questions`,
    headers: {
      Authorization: process.env.API_KEY,
      contentType: "application/json",
    },
    data: {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      product_id: req.body.product_id,
    },
  })
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => console.log(error));
});

app.post("/addAnswer", (req, res) => {
  axios({
    method: "post",
    url: `${process.env.URL}/qa/questions/${req.body.question_id}/answers`,
    headers: {
      Authorization: process.env.API_KEY,
      contentType: "application/json",
    },
    data: {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
    },
  })
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => console.log(error));
});

app.put('/reportQuestion', (req, res) => {
  axios({
    method: 'put',
    url: `${process.env.URL}/qa/questions/${req.body.question_id}/report`,
    headers: {
      Authorization: process.env.API_KEY,
      contentType: 'application/json'
    },
  })
    .then((response) => {
      res.status(204).send(response.data);
    })
    .catch(err => console.log(err));
});

app.put('/questionHelpful', (req, res) => {
  axios({
    method: 'put',
    url: `${process.env.URL}/qa/questions/${req.body.question_id}/helpful`,
    headers: {
      Authorization: process.env.API_KEY,
      contentType: 'application/json'
    },
  })
    .then((response) => {
      res.status(204).send(response.data);
    })
    .catch(err => console.log(err));
});

app.put('/answerHelpful', (req, res) => {
  axios({
    method: 'put',
    url: `${process.env.URL}/qa/answers/${req.body.answer_id}/helpful`,
    headers: {
      Authorization: process.env.API_KEY,
      contentType: 'application/json'
    },
  })
    .then((response) => {
      res.status(204).send(response.data);
    })
    .catch(err => console.log(err));
});

app.post("/cart", (req, res) => {

  console.log(req.body);

  var config = {
    method: "post",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart",
    headers: {
      Authorization: process.env.API_KEY,
      "Content-Type": "application/json",
    },
    data: req.body,
  };

  axios(config)
    .then(function (response) {
      res.send(201);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500);
    });
});

app.post("/interactions", (req, res) => {
  var config = {
    method: "post",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions",
    headers: {
      Authorization: process.env.API_KEY,
      "Content-Type": "application/json",
    },
    data: req.body,
  };

  axios(config)
    .then(function (response) {
      res.sendStatus(response.status);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/[0-9]{0,5}$", (req, res) => {
  res.sendFile('index.html', { root: './client/dist/' })
})

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});