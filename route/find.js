var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://127.0.0.1/connect');
module.exports = function (app) {
  //find all itens
  app.get('/api/:collection'
  , function (req, res) {
    var coll = req.params.collection;
    db.collection(coll).find({})
    .toArray(function (err, response) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(response);
      }
    });
  });
//find one item
app.get('/api/:collection/:id'
, function (req, res) {
  var coll = req.params.collection;
  var id = req.params.id;
  db.collection(coll).findById(id
    , function (err, response) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(response);
    }
  });
});
};
