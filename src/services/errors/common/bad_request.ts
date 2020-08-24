import { BaseError } from "../base/base_error";
import { InternalErrorsEnum } from '../enums/internal_errors';
import { HTTPCodesEnum } from '../enums/http_errors';

export class ErrorBadRequest extends BaseError {

    constructor(
        message: string,
        metadata?: any
    ) {
        super({
            message: `${message}`,
            code: InternalErrorsEnum.HTTP_REQUEST,
            status: HTTPCodesEnum.BAD_REQUEST,
            metadata: metadata
        });
    }
}
