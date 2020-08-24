import { InternalErrorsEnum } from '../enums/internal_errors';
import { HTTPCodesEnum } from '../enums/http_errors';

export class BaseError extends Error {

    code: number;
    status: number;
    _stack: any;
    error: string;
    metadata: any;

    constructor({
        message = "default error",
        code = InternalErrorsEnum.UNDEFINED,
        status = HTTPCodesEnum.INTERNAL_SERVER_ERROR,
        metadata = {},
    }) {
        super(message);
        this.error = message;
        this.code = code;
        this.status = status;
        this._stack = this.stack;
        this.metadata = metadata;
    }
}
