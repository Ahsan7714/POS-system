import axios from "axios";
import { server } from "../../server";

export const allOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: "AllOrderRequest",
    });
    const { data } = await axios.get(`${server}/order/getAllOrder`, {
      withCredentials: true,
    });
    dispatch({
      type: "AllOrderSuccess",
      payload: data.orders,
    });
  } catch (error) {
    console.log("Error response:", error.response);
    dispatch({
      type: "AllOrderFail",
      payload: error.response.data.message,
    });
  }
}