import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'testecrud',
    logging: console.log
});

export default sequelize;