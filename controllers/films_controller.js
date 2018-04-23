const express = require('express');
const FilmsData = require('../data/films_data.js');
const filmsData = new FilmsData();

const filmsRouter = new express.Router();

filmsRouter.get('/', function (req, res) {
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

filmsRouter.get('/:id', function(req, res){
  const foundFilm = filmsData.find(req.params.id);
  res.json(foundFilm);
});

filmsRouter.post('/', function(req, res) {
  const newFilm = req.body.film;
  filmsData.add(newFilm);
  res.json(filmsData)
})

filmsRouter.put('/:id', function (req, res){
  const updatedFilm = req.body.film;
  const index = req.params.id;
  filmsData.update(index, updatedFilm)
  res.json(filmsData);
})

filmsRouter.delete('/:id', function(req, res){
  const index = req.params.id;
  filmsData.delete(index);
  res.json(filmsData);
})



module.exports = filmsRouter;
