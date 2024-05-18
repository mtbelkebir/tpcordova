import { Router } from "express";
import AuthorController from "../controller/author.controller.js";

const authorRoutes = Router();

authorRoutes.get("/", AuthorController.getAllAuthors);
authorRoutes.get("/:id", AuthorController.getAuthorById);


export default authorRoutes;