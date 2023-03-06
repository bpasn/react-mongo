import { Message } from "./utils/error.util";

interface UserSignIn {
    loading?: boolean;
    userInfo?: userInfo | undefined;
    error?: Message | undefined
}

interface userInfo {
    createAt: Date;
    updateAt:Date;
    lat:number;
    exp:number;
    firstName: string;
    lastName: string;
    accessToken:string;
    refreshToken:string;
    email: string;
    _id: string;
    token: string

}