var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://127.0.0.1/connect');
//new documents on anny collections 
module.exports = function (app) {
  app.post('/api/:collection'
  , function (req, res) {
    var coll = req.params.collection;
    var json = req.body;
    db.collection(coll)
      .insert(json, {}
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
