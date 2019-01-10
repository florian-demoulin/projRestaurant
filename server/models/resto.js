var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var unResto = new Schema({
  borough: String,
  cuisine: String
});

var Resto = mongoose.model("Resto", unResto);
module.exports = Resto;