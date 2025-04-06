import axios from "axios";
import { server } from "../../server";

export const allMenuItems = () => async (dispatch) =>{
    try {
        dispatch({ type: "AllMenuRequest" });
        const { data } = await axios.get(`${server}/menu/getAllItems`, {
            withCredentials: true,
        });
        dispatch({
            type: "AllMenuSuccess",
            payload: data.menuItems,
        });
    } catch (error) {
        console.log("Error response:", error.response);
        dispatch({
            type: "AllMenuFail",
            payload: error.response.data.message,
        });
    }
}
