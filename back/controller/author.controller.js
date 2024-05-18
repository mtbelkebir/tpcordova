import Author from "../models/author.js";

class AuthorController {
  static async getAllAuthors(req, res) {
    let authors = await Author.findAll();
    res.status(200).send(authors);
  }

  static async getAuthorById(req, res) {
    let author = await Author.findByPk(req.params.id);
    res.status(200).send(author);
  }

  static async postNewAuthor(req, res) {
    let author = await Author.create({
      name: req.body.name,
      bio: req.body.bio,
    });
    res.status(200).send(author);
  }
}

export default AuthorController;
