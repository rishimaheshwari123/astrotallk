import { apiConnector } from "../apiConnector";
import { auth } from "../apis";
import { toast } from 'react-toastify';
import { setToken, setUser, setLoading } from "../../redux/authSlice";

const { LOGIN_API, SIGNUP_API } = auth


export const loginAPI = (email, password, navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", LOGIN_API,
                {
                    email,
                    password,
                }
            );

            console.log("LOGIN API RESPONSE............", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("Login Successful");
            dispatch(setToken(response?.data?.token));
            dispatch(setUser(response?.data?.user));
            navigate("/");
        } catch (error) {
            console.log("LOGIN API ERROR............", error);
            toast.error("Login Failed");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    };
};

export const signUpAPI = (name, email, password, location, navigate) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector(
                "POST", SIGNUP_API,
                {
                    name, email, password, location
                }
            );

            console.log("SIGNUP API RESPONSE............", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Signup Successful");
            navigate("/login");
        } catch (error) {
            console.log("SIGNUP API ERROR............", error);
            toast.error("Signup Failed");
            navigate("/register");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    };
};


export function logoutAPI(navigate) {
    return (dispatch) => {
        dispatch(setToken(null))
        dispatch(setUser(null))

        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logged Out")
        navigate("/")

    }
}
