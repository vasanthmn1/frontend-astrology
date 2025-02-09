import { WebApi } from "./WebApi";

export enum TargetApiEnum {
    WEB_API
}


export class ApiClient {

    webApi = new WebApi(TargetApiEnum.WEB_API)


}