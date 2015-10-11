/**
 * Created by ChloeGyuriKim on 11/09/15.
 */
var mongoose= require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
  title: {
    type:String
  },
  author: {type: String},
  gender: {type:String},
  read:{type: Boolean, default :false}
});

module.exports = mongoose.model('Book', bookModel);

