import { TargetApiEnum } from "./ApiClient";
import { HttpRequest } from "./HttpRequest";

export class WebApi extends HttpRequest {

    targetApi: TargetApiEnum;
    constructor(targetApi: TargetApiEnum) {
        super(targetApi);
        this.targetApi = targetApi
    }

}