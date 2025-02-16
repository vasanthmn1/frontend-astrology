import axios, { AxiosInstance } from "axios";
import { TargetApiEnum } from "./ApiClient";
import { AuthUser } from "../interface/auth/AuthUser";
import { LocalStorageAction } from "../action/localStorage/LocalStorage";

enum PointAccessEnum {
    Public, Private
}

export class ApiInstance {

    endpoint: string
    // pointAccess: PointAccessEnum
    constructor(endpoint: TargetApiEnum) {

        this.endpoint = ApiInstance.endPointUrl(endpoint)
        // this.pointAccess = ApiInstance.pointAccess(pointAccess)
    }


    private createInstance(): AxiosInstance {
        return axios.create({
            baseURL: this.endpoint,
            headers: {
                Authorization: this.authorizationToken(),
            },
        });
    }

    public getInstance(): AxiosInstance {
        return this.createInstance()
    }

    private static endPointUrl = (endPoint: TargetApiEnum): string => {


        switch (endPoint) {
            case TargetApiEnum.WEB_API:
                return "http://localhost:7000/"

            default:
                return ''
                break;
        }
    }
    private authorizationToken = (): string => {

        let localStorageAction = new LocalStorageAction()

        switch (localStorageAction.getAuthUser().user.access_permission) {
            case "user":
                return "http://localhost:7000/"
            case "admin":
                return localStorageAction.getToken()
            default:
                return ''

        }
    }
    // private static pointAccess = () => {
    //     switch (endPoint) {
    //         case TargetApiEnum.WEB_API:
    //             return "http://localhost:7000/"

    //         default:
    //             return ''
    //             break;
    //     }
    // }


}