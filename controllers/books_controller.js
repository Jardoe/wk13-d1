const express = require('express');
const BooksData = require('../data/books_data.js');
const booksData = new BooksData();

const booksRouter = new express.Router();

booksRouter.get('/', function (req, res) {
  const allBooks = booksData.all();
  res.json({books: allBooks});
});

booksRouter.get('/:id', function(req, res){
  const foundBook = booksData.find(req.params.id);
  res.json(foundBook);
});

booksRouter.post('/', function(req, res) {
  const newBook = req.body.book;
  booksData.add(newBook);
  res.json(booksData);
})

booksRouter.put('/:id', function (req, res){
  const updatedBook = req.body.book;
  const index = req.params.id;
  booksData.update(index, updatedBook)
  res.json(booksData);
})

booksRouter.delete('/:id', function(req, res){
  const index = req.params.id;
  booksData.delete(index);
  res.json(booksData);
})



module.exports = booksRouter;
