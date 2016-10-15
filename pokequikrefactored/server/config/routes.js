const express = require('express');
const pokemonController = require('../pokemon/pokemonController.js')

var router = express.Router();

router.get('/pokedex' , pokemonController.pokedexCountHandler)
//router.post('/pokedex' , pokemonController)

module.exports = {
	router : router
}