
interface IActionRequest {
    type: "SIGN_REQUEST" | "SIGN_OUT";
}

interface IActionSuccess {
    type: "SIGN_SUCCESS";
    payload?: IUser
}
interface IActionFail {
    type: "SIGN_FAIL";
    error?: any
}

export type Action = IActionRequest | IActionSuccess | IActionFail;


interface IMenuIcon {
    menuName: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }

}