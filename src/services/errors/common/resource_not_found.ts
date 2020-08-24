import { BaseError } from "../base/base_error";
import { InternalErrorsEnum } from '../enums/internal_errors';
import { HTTPCodesEnum } from '../enums/http_errors';


export class ErrorResourceNotFound extends BaseError {

    constructor(
        message: string,
        metadata?: any
    ) {
        super({
            message: message,
            code: InternalErrorsEnum.HTTP_REQUEST,
            status: HTTPCodesEnum.RESOURCE_NOT_FOUND,
            metadata: metadata
        });
    }
}