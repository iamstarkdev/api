var mongoose = require('mongoose');
module.exports = function () {

  mongoose.connect('mongodb://127.0.0.1/seudb');
}
console.log('Conectado');
