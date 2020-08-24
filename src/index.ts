require('dotenv').config();
import Logger from "./services/logger/pino";

const logger = Logger(__filename);

async function main() {
    try {
        await startWebApp();
    } catch (error) {
        logger.error(`main error: ${JSON.stringify(error)}`)
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
