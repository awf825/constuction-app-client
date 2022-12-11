import jwt_decode from "jwt-decode";

export const useAuth = (token: string) => {
    const decoded: any = jwt_decode(token)
    const {
        iat,
        exp,
        sub,
        name, 
        email
    } = decoded;

    return {
        iat: iat,
        exp: exp,
        user_id: sub,
        name: name, 
        email: email
    };
}
