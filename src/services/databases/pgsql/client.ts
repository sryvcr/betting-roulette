import { Client } from "pg";
import Logger from "../../logger/pino";

const clients = new Map();
const logger = Logger(__filename);

const PSQL_HOST = process.env.PSQL_HOST;
const PSQL_PORT = parseInt(process.env.PSQL_PORT || "5433");
const PSQL_USERNAME = process.env.PSQL_USERNAME;
const PSQL_PASSWORD = process.env.PSQL_PASSWORD;
const PSQL_DATABASE = process.env.PSQL_DATABASE;

async function createConnection() {
    try {
        const client = new Client({
            host: PSQL_HOST,
            port: PSQL_PORT,
            user: PSQL_USERNAME,
            password: PSQL_PASSWORD,
            database: PSQL_DATABASE,
        });
        client.connect();
        client.query('SELECT NOW()', (err: any, res: any) => {
            if(!err) {
                logger.info(`🆗 connect to db: ${process.env.PSQL_DATABASE}, mode: ${process.env.NODE_ENV}`);
            } else {
                logger.error(`🚫 cannot connect to db, remember config the connection, ${err}`);
            }
        });
        clients.set("postgres", client);
    } catch (error) {
        throw error;
    }
}

export {
    createConnection,
    clients,
}
