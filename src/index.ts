require('dotenv').config();
import Logger from "./services/logger/pino";

const logger = Logger(__filename);

async function main() {
    try {
        await createDBConnection();
        await startWebApp();
    } catch (error) {
        logger.error(`main error: ${JSON.stringify(error)}`);
        logger.error(error);
    }
}

const createDBConnection = async () => {
    try {
        const { createConnection } = await import('./services/databases/pgsql/client');
        await createConnection();
    } catch (err) {
        throw err;
    }
}

async function startWebApp() {
    try {
        /**Express server */
        const { Server } = await import('./services/http_server/server');
        const server = new Server();
        await server.start();
    } catch (err) {
        throw err;
    }
}

main();
