import { HTTPCodesEnum } from '../enums/http_errors';

class ApiError {

    code: number;
    message: string;
    metadata: any;

    constructor({
        code = HTTPCodesEnum.INTERNAL_SERVER_ERROR,
        message = "Internal server error",
        metadata = {}
    }) {
        this.code = code;
        this.message = message;
        this.metadata = metadata;
    }
  
}

export { ApiError };
