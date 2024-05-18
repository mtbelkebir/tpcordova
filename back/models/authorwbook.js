import Book from "./book.js";
import Author from "./author.js";

Author.hasMany(Book, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Book.belongsTo(Author);
