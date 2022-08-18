require('dotenv').config();
const express = require ('express');

let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

// more to come

let port = process.env.REACT_APP_PORT;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});