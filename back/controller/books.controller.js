import Book from "../models/book.js";
import Author from "../models/author.js";
class BookController {
  static async postNewBook(req, res) {
    let book = await Book.create({
      title: req.body.title,
      cover: req.body.cover,
      description: req.body.description,
    });
    res.status(200).send(book);
  }

  static async getAllBooks(req, res) {
    let books = await Book.findAll();
    res.status(200).send(books);
  }
}

export default BookController;
