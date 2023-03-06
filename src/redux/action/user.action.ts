
import { AppDispatch } from "../store"
import Helper from "../../utils/error.util"
import axios from "axios";
const helper = new Helper();
const signIn = (userSign: { email: string, password: string }) => async (dispatch: AppDispatch) => {
    dispatch({ type: "SIGN_REQUEST" })
    try {

        const data = await axios.post('/api/session', userSign);

        if (data.data as { accessToken: string, refreshToken: string }) {
            const user = await axios.get('/api/users/me', {
                headers: {
                    Authorization: `Bearer ${data.data.accessToken}`
                }
            })
            setTimeout(() => {
                dispatch({ type: "SIGN_SUCCESS", payload: { ...user.data, ...data.data } })
                localStorage.setItem('userInfo', JSON.stringify({ ...user.data, ...data.data }));
            }, 3 * 1000)
        }

    } catch (error) {
        console.log("error => ", error)
        dispatch({
            type: 'SIGN_FAIL',
            error: helper.setMessage(error).report()
        })
    }
}

const signOut = () => (dispatch: AppDispatch) => {
    dispatch({ type: "SIGN_OUT" })
    localStorage.removeItem('userInfo');
}
export {
    signIn,
    signOut
}