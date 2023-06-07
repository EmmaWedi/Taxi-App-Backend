import { Sequelize } from "sequelize";
import { DB_CONFIG } from "./db.config";

const { USERNAME, PASSWORD, HOST, DIALECT, PORT, DB } = DB_CONFIG;

const dbConn = new Sequelize(DB, USERNAME, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    port: PORT,
    pool: {
        max: 10,
        idle: 3000
    }
})

export default dbConn;