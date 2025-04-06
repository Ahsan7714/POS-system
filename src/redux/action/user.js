import axios from "axios";
import { server } from "../../server";

export const allUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "AllUserRequest",
      });
      const { data } = await axios.get(`${server}/user/getUsers`, {
        withCredentials: true,
      });
      dispatch({
        type: "AllUserSuccess",
        payload: data.users,
      });
    } catch (error) {
      console.log("Error response:", error.response);
      dispatch({
        type: "AllUserFail",
        payload: error.response.data.message,
      });
    }
  };

  export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });
      const { data } = await axios.get(`${server}/user/me`,{withCredentials:true});
      dispatch({
        type: "LoadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      console.log("Error response:", error.response);
      dispatch({
        type: "LoadUserFail",
        payload: error.response.data.message,
      });
    }
  };