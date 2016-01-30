var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://127.0.0.1/connect');
//update documents on anny collections
module.exports = function (app) {
  app.put('/api/:collection/:id'
  , function (req, res) {
    var coll = req.params.collection;
    var id = req.params.id;
    var json = req.body;
    db.collection(coll)
      .updateById(id
        , {$set: json}
        , function (err, response) {
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            var data = {}
            res.send(response);
          }
      });
  });
};
