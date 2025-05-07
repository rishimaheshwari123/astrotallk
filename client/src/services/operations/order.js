import { apiConnector } from "../apiConnector";
import { order } from "../apis";
import { toast } from 'react-toastify';
import { setLoading } from "../../redux/authSlice";

const { CREATE_ORDER, APPOINTMENT, GET_ALL_ORDERS, GET_USER_ORDERS, UPDATE_ORDER_STATUS, RETURN_ORDER } = order

export const createOrderAPI = (formData, token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try {
            const response = await apiConnector("POST", CREATE_ORDER, formData, {
                Authorization: `Bearer ${token}`,
            });

            if (!response?.data?.success) {
                throw new Error(response?.data?.message || "Something went wrong!");
            }

            return response;
        } catch (error) {
            console.error("order  API ERROR:", error);
            toast.error(error?.response?.data?.message || "Failed to create order!");
            return null;
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    };
};



export const getAllOrdersAPI = (token) => {
    return async (dispatch) => {

        try {
            const response = await apiConnector("GET", GET_ALL_ORDERS, {}, {
                Authorization: `Bearer ${token}`,
            })


            if (!response?.data?.success) {
                throw new Error(response?.data?.message || "Something went wrong!");
            }

            return response?.data?.orders || [];
        } catch (error) {
            console.error("GET orders API ERROR:", error);
            toast.error(error?.response?.data?.message || "Failed to get order!");
            return [];
        } finally {
            dispatch(setLoading(false));
        }
    };
};

export const getAllAppoimentAPI = (token) => {
    return async (dispatch) => {

        try {
            const response = await apiConnector("GET", APPOINTMENT)


            if (!response?.data?.success) {
                throw new Error(response?.data?.message || "Something went wrong!");
            }

            return response?.data?.appointment || [];
        } catch (error) {
            console.error("GET appointment API ERROR:", error);
            toast.error(error?.response?.data?.message || "Failed to get appointment!");
            return [];
        } finally {
            dispatch(setLoading(false));
        }
    };
};
export const getUserOrderAPI = (id) => {
    return async (dispatch) => {

        try {
            const response = await apiConnector("GET", `${GET_USER_ORDERS}/${id}`)


            if (!response?.data?.success) {
                throw new Error(response?.data?.message || "Something went wrong!");
            }

            return response?.data?.order || [];
        } catch (error) {
            console.error("GET user order API ERROR:", error);
            toast.error(error?.response?.data?.message || "Failed to get user order!");
            return false;
        } finally {
            dispatch(setLoading(false));
        }
    };
};

export const updateOrderStatusAPI = (id, newStatus, token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try {
            const response = await apiConnector("PUT", `${UPDATE_ORDER_STATUS}/${id}`, { newStatus }, {
                Authorization: `Bearer ${token}`,
            });


            if (!response?.data?.success) {
                throw new Error(response?.data?.message || "Something went wrong!");
            }

            return response?.data;
        } catch (error) {
            console.error("UPDATE Product API ERROR:", error);
            toast.error(error?.response?.data?.message || "Failed to Update product!");
            return [];
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    };
};
export const returnOrderAPI = (id, formData, token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try {
            const response = await apiConnector("PUT", `${RETURN_ORDER}/${id}`, formData, {
                Authorization: `Bearer ${token}`,
            });


            if (!response?.data?.success) {
                throw new Error(response?.data?.message || "Something went wrong!");
            }

            return response?.data;
        } catch (error) {
            console.error("return order API ERROR:", error);
            toast.error(error?.response?.data?.message || "Failed to return product!");
            return [];
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    };
};

export const deleteProductAPI = (id, token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try {
            const response = await apiConnector("DELETE", `${DELETE_PRODUCT}/${id}`, {}, {
                Authorization: `Bearer ${token}`,
            });


            if (!response?.data?.success) {
                throw new Error(response?.data?.message || "Something went wrong!");
            }

            return response?.data;
        } catch (error) {
            console.error("DELETE product API ERROR:", error);
            toast.error(error?.response?.data?.message || "Failed to delete product!");
            return [];
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    };
};





