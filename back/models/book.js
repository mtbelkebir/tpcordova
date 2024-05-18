import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Book = sequelize.define('book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(4000),
    },
    cover: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});


export default Book;