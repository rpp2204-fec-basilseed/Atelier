require('dotenv').config();
const express = require ('express');
const path = require ('path');

let app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

// more to come

let port = process.env.PORT;

app.get('/', (req, res) => {
  res.send();
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});