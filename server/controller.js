const db = require('./mongoDB');

let getAll = (n=5) => {
  let fields = {
    id:1,
    name:1,
    slogan:1,
    description:1,
    category:1,
    default_price:1
  }
    //return db.Prods.find({id:{$lte:n}}, fields).sort({"id":1}).limit(n);
    console.log(db.Prods);
    return db.Prods.find({});
}
let getOne = (id) => {
  let fields = {
    id:1,
    name:1,
    slogan:1,
    description:1,
    category:1,
    default_price:1,
    features:1
  }
  return new Promise((resolve, reject) => {
    db.Prods.find({id:id}, fields).then((result)=>{
      console.log(result);
      resolve(result);
    }).catch(err => {
      reject(err);
    });
  });
}

let getStyles = (id) => {
  let fields = {
    id:1,
    results:1
  }
  return new Promise((resolve, reject) => {
    db.Prods.find({id:id}, fields).then((result)=>{
      console.log(result);
      resolve(result);
    }).catch(err => {
      reject(err);
    });
  });
}

let getIds = (id) => {
  let fields = {
    related:1
  }
  return new Promise((resolve, reject) => {

    db.Prods.find({id:id}, fields).then((result)=>{
      console.log(result);
      result.forEach((val, i) => {
        result[i] = val.related_product_id
      })
      resolve(result);
    }).catch(err => {
      reject(err);
    });
  });
}

module.exports = {
  getAll,
  getIds,
  getOne,
  getStyles
}