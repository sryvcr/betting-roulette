import { Request, Response, NextFunction } from "express";
import Logger from "../../logger/pino";
import { BaseError } from "../base/base_error";
import { ApiError } from "../api/api_error";

const logger = Logger(__filename);

export default function (err: any, req: Request, res: Response, next: NextFunction) {
    if (!err) {
        next();
        return;
    }
    logger.error(JSON.stringify(err));
    if (err instanceof BaseError) {
        res.status(err.status || 500)
            .json(new ApiError({
                code: err.code,
                message: err.error,
                metadata: err.metadata
            }));
    } else if (err instanceof Error) {
        res.status(500)
            .json(new ApiError({
                code: 500, 
                message: err.message
            }));
    } else {
        res.status(500)
            .json(new ApiError({
                code: 500,
                message: 'we are diying 🧟🧟🧟🧟'
            }));
    }
}
