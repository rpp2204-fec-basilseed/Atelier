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

    return db.Prods.find({}, fields).limit(n);
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
  return db.Prods.find({id:id}, fields);
}

let getStyles = (id) => {
  let fields = {
    id:1,
    results:1
  }
  return db.Prods.find({id:id}, fields);
}

let getIds = (id) => {
  let fields = {
    related:1
  }
  return db.Prods.find({id:id}, fields);
}

module.exports = {
  getAll,
  getIds,
  getOne,
  getStyles
}