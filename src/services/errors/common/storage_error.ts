import { BaseError } from "../base/base_error";
import { InternalErrorsEnum } from '../enums/internal_errors';
import { HTTPCodesEnum } from '../enums/http_errors';

export class StorageError extends BaseError {

    constructor({
        message = "Storage error",
        metatada = {}
    }) {
        super({
            message: message,
            code: InternalErrorsEnum.STORAGE_EXCEPTION,
            status: HTTPCodesEnum.BAD_REQUEST,
            metadata: metatada
        })
    }
}