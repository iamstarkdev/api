var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://127.0.0.1/connect');
module.exports = function (app) {
//Vamos remover um item buscando pelo id
app.delete('/api/:collection/:id', function(req, res, next) {
  //pagamos o parâmetro id enviado pelo usuário
  var id = req.params.id;
  var coll = req.params.collection;
  //removemos o item buscando pelo id
  db.collection(coll)
    .removeById(id
      , function (e, result) {
        if (e) {
          return next(e);
        }
        if (result === 1) {
          res.send({ msg: 'successo' });
        } else {
          res.send({ msg: 'erro' });
        }
      });
});
};
