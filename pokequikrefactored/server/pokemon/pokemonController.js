const Pokemon = require('./pokemonModel.js');
const request = require('request');

console.log(Pokemon.create)


var pokedexCountHandler = function(req, res) {
	
	 return callPokedexApi(res)
	

}

var callPokedexApi = function(response) {
	 return request({
		method: 'GET',
		url: 'http://pokeapi.co/api/v2/pokemon?offset=0'
	}, function(err, res, body) {
		console.log('in the function')
		if (err) {console.log( 'error in callPodeDexApi')}
		// var poke1 = Pokemon({
		// 	poke_name = body.results.forEach(function(item) {
		// 		item.name;
		// 	})
		// })

		return Pokemon.create({poke_id : 10, poke_name : 'GAYANE'})
		.then(function(results) {
			console.log("whoo whoo")

			response.send(results);
		})
		.catch(function(err) {
			response.end('hi');
		})

		// var pokeCollection = [];
		// body.results.forEach(
		// 	function(item, index) {
		// 	  pokeCollection.push(Pokemon.create({
		// 		poke_id = index,
		// 		poke_name = item.name
		// 	}, function(err, in) {
		// 		if (err) {console.log(err)}
		// 	}))

		// });
		//console.log(tiny, "");
		//response.send(body)
		// body.results.forEach(function(item) {
		// 	Pokemon.create({item.name}, function(err, result) {
		// 		if (err) {console.log(err)}
		// 		if (result) {console.log(result)}
		// 	})
			
		})

		//res.send(body)
	
}

// var postToMongoose = function(request, response) {
// 	request({
// 		method: 'POST',
// 		url: 
// 	})
// }

module.exports = {
	pokedexCountHandler : pokedexCountHandler
}
// res.sendFile
// res.writeFile



//.save
// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
// });


//.find
// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// })


//many mongoose queries, here
//http://mongoosejs.com/docs/queries.html
// Kitten.find({ name: /^fluff/ }, callback);