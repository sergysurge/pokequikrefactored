var mongoose = require('mongoose');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
  
// });
// ObjectId.prototype.auto = function(turnOn) {
//   if (turnOn) {
//     this.default(defaultId);
//     this.set(resetId);
//   }

//   return this;
// };

var PokemonModel = new mongoose.Schema({
  poke_id : { 
    type: Number,
 
    required: true
  },
  poke_name : {
    type: String,

    required: true
  }
  // poke_url : {
  //   type: String,
  //   required: true
  // },
  // poke_pic : {
  //   type: String
  // }

})



module.exports = mongoose.model('Pokemon', PokemonModel);

