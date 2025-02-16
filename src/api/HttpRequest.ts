

import { TargetApiEnum } from "./ApiClient";
import { ApiInstance } from "./ApiInstance";


export class HttpRequest extends ApiInstance {
    targetApi: TargetApiEnum;
    constructor(targetApi: TargetApiEnum) {
        super(targetApi);
        this.targetApi = targetApi
    }

    postJson = <T>(url: string, body: any,) => {
        return this.postRequest<T>(url, body, { type: "application/json" })
    }


    private postRequest = <T>(url: string, body: any, ContentType: ContentType) => {
        return this.getInstance().post<T>(url, body, {
            headers: {
                'Content-Type': ContentType.type
            }
        })
    }

    public getRequest = async (url: string) => {
        return await this.getInstance().get(url)
    }
}

export interface ContentType {
    type: "application/json"
}