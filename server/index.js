require('dotenv').config();
const express = require ('express');
const axios = require('axios');

let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

// more to come

let port = process.env.REACT_APP_PORT;

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

app.post('/questions', (req, res) => {
  // TODO: body parameters: body, name, email, product_id(INT)

  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions', config)
    .then(
      // TODO: status 201
    )
    .catch(err => console.log(err));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});