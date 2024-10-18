import { Sequelize } from "sequelize"; 

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

export const sequelize = new Sequelize(database, user, password, {
    dialect:"mysql",
    host:"localhost",
    port:3306,
});