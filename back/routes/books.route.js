import express from 'express';
import { body, validationResult } from 'express-validator';
import Book from '../models/book.js';
import BookController from '../controller/books.controller.js';

const bookRoutes = express.Router();

const validator =[
    body('title').notEmpty().trim(),
    body('cover').notEmpty().trim(),
    body('authorname').notEmpty().trim(),
    body('description').notEmpty().trim(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
        next();
      }
];

bookRoutes.post('/', validator, BookController.postNewBook);
bookRoutes.get('/', BookController.getAllBooks);


export default bookRoutes;