import { Client } from "pg";
import { StorageError } from "../../../errors/common/storage_error";
import { clients } from "../client";

const PSQL_CLIENT = process.env.PSQL_CLIENT || "postgres"

export class RoulettesPSQLRepo {
    database: Client
    
    constructor() {
        this.database = clients.get(PSQL_CLIENT);
    }

    async getAllItems() {
        try {
            const result = await this.database.query(
                `
                SELECT id,
                    roulette_status_id,
                    roulette_status
                FROM betting_roulette
                GROUP BY id, roulette_status_id, roulette_status
                `
            );
            return result.rows;
        } catch (error) {
            throw new StorageError(error.message);
        }
    }

    async getItemById(id: number) {
        try {
            const result = await this.database.query(
                `
                SELECT id,
                    roulette_status_id
                FROM roulettes
                WHERE id = ${id}
                LIMIT 1
                `
            );
            return result.rows[0];
        } catch (error) {
            throw new StorageError(error.message);
        }
    }

    async getBetsByRouletteId(id: number) {
        try {
            const result = await this.database.query(
                `
                SELECT bet_id,
                    number,
                    color,
                    money,
                    user_id
                FROM betting_roulette
                WHERE id = ${id}
                `
            );
            return result.rows;
        } catch (error) {
            throw new StorageError(error.message);
        }
    }

    async countItems() {
        try {
            const result = await this.database.query(
                `
                SELECT id
                FROM betting_roulette
                GROUP BY id
                `
            );
            return result.rowCount;
        } catch (error) {
            throw new StorageError(error.message);
        }
    }

    async updateStatus(id: number, status: number) {
        try {
            const result = await this.database.query(
                `
                UPDATE roulettes
                SET roulette_status_id = ${status}
                WHERE id = ${id}
                `
            );
            return result.rowCount;
        } catch (error) {
            throw new StorageError(error.message);
        }
    }
}
