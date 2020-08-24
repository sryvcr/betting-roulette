import { BaseError } from "../base/base_error";
import { InternalErrorsEnum } from '../enums/internal_errors';
import { HTTPCodesEnum } from '../enums/http_errors';


export class ErrorEntityValidation extends BaseError {
    constructor({
        message = "unknown error",
        metadata = {}
    }) {
        super({
            message: message, 
            code: InternalErrorsEnum.DOMAIN_ENTITY_VALIDATION, 
            status: HTTPCodesEnum.BAD_REQUEST, 
            metadata: metadata
        });
    }
}
