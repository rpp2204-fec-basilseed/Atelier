const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/fetcher', {useNewUrlParser: true, useUnifiedTopology: true}).then(res => {
  console.log();
}).catch(err => {
  throw(err);
});


let featureSchema = mongoose.Schema({
  "id": {type: Number, unique: true},
  "product_id": Number,
  "feature": String,
  "value": String
})

let photoSchema = mongoose.Schema({
  "id": {type: Number, unique: true},
  "styleId": Number,
  "url": String,
  "thumbnail_url": String
})

let skuSchema = mongoose.Schema({
  "size": String,
  "quantity": Number
})

let skuIdSchema = mongoose.Schema({
  "sku_id": {skuSchema}
})


let resultSchema = mongoose.Schema({
  "product_id": Number,
  "style_id": Number,
  "name": String,
  "original_price": Number,
  "sale_price": Number,
  "default?": Number,
  "skus": {skuIdSchema},
  "photos":[photoSchema]
})


let productSchema = mongoose.Schema({
  // TODO: your schema here!
    "id":  {type: Number, unique: true},
    "name": String,
    "slogan": String,
    "description": String,
    "category": String,
    "default_price": Number,
    "features": [featureSchema],
    "results": [resultSchema],
    "related": [Number]
  });


//const ProdsSchema = new mongoose.Schema({});
const Prods = mongoose.model('Prods', productSchema);
//let Prods = fetcher.collection('Prods');


module.exports = {
  Prods
}
