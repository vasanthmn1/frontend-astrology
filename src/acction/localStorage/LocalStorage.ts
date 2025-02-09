import { AuthUser } from "../../interface/auth/AuthUser"
import { ILoginResponse } from "../../interface/auth/ILoginResponce";
import { _utils } from "../../lib/utils/_utils";

export class LocalStorageAction {

    setAuthUser = (authUserString: string) => {
        // const params = new URLSearchParams(authUserString.replace(/\?/g, "&"));
        var params = new URLSearchParams(authUserString);

        let authUser = {
            token: params.get('token'),
            user: {
                user_id: params.get('user_id'),
                email: params.get("email"),
                access_permission: params.get('access_permission'),
            }
        } as AuthUser


        localStorage.setItem('email', _utils.trim(authUser.user.email))
        localStorage.setItem('user_id', _utils.trim(authUser.user.user_id))
        localStorage.setItem('access_permission', _utils.trim(authUser.user.access_permission))
        localStorage.setItem('token', _utils.trim(authUser.token))

    }

    getAuthUser = () => {

        let authUser: AuthUser = {
            token: localStorage.getItem('token') || "",
            user: {
                user_id: localStorage.getItem('user_id') || "",
                email: localStorage.getItem('email') || "",
                access_permission: localStorage.getItem('access_permission') || "",
            }
        }

        return authUser
    }

    getToken = (): string => {
        return _utils.trim(localStorage.getItem('token'));
    }
}