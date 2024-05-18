import sequelize from "./config/db.js";
import express from "express";
import cors from "cors";
import "./models/index.js";
import bookRoutes from "./routes/books.route.js";
import authorRoutes from "./routes/author.route.js";

const app = express();
app.use(express.json({ limit: "1000mb" }));
app.use(cors());

const PORT = 3000;
await (async () => {
  await sequelize.sync({ force: false });
})();

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
