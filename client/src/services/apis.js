const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const auth = {
  LOGIN_API: BASE_URL + "/auth/login",
  SIGNUP_API: BASE_URL + "/auth/register",

}


export const order = {
  CREATE_ORDER: BASE_URL + "/order/create",
  GET_ALL_ORDERS: BASE_URL + "/order/getAll",
  GET_USER_ORDERS: BASE_URL + "/order/get",
  UPDATE_ORDER_STATUS: BASE_URL + "/order/update",
  RETURN_ORDER: BASE_URL + "/order/return",
  APPOINTMENT: BASE_URL + "/order/getAll-appointment",
}
