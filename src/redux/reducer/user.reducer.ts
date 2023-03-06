import { Action } from "@/typing"
import { Message } from "../../utils/error.util";
import { UserSignIn, userInfo } from "@/typing.reduce";

const userReducer = (state: UserSignIn | any = {}, action: Action) => {
    switch (action.type) {
        case "SIGN_REQUEST":
            return { loading: true };
        case "SIGN_SUCCESS":
            return { loading: false, userInfo: action.payload as userInfo };
        case "SIGN_FAIL":
            return { loading: false, error: action.error as Message };
        case "SIGN_OUT":
            return {};
        default:
            return state
    }
}

export { userReducer }