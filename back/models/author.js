import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const Author = sequelize.define('author', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false
    }    

});


export default Author;