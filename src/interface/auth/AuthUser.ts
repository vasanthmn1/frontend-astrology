export interface AuthUser {

    token: string
    user: {
        user_id: string
        email: string
        access_permission: string
    }


}

enum AuthSourceEnum {
    public, private
}