import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "data/db.db",
  logging: console.log,
});

export default sequelize;
