import { Client } from "pg";
import { StorageError } from "../../../errors/common/storage_error";
import { clients } from "../client";

const PSQL_CLIENT = process.env.PSQL_CLIENT || "postgres"

export class BetsPSQLRepo {
    database: Client
    
    constructor() {
        this.database = clients.get(PSQL_CLIENT);
    }

    async createOne(item: any) {
        try {
            const result = await this.database.query(
                `
                    INSERT INTO bets (number, color, money, user_id, roulette_id)
                    VALUES (${item.number}, '${item.color}', ${item.money}, ${item.userId}, ${item.rouletteId})
                    RETURNING *
                `
            );
            return result.rows[0];
        } catch (error) {
            throw new StorageError(error.message);
        }
    }
}
