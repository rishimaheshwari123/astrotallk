import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  addressData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setAddressData(state, value) {
      state.addressData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
      localStorage.setItem('token', JSON.stringify(value.payload))
    },
    setUser(state, value) {
      state.user = value.payload;
      localStorage.setItem('user', JSON.stringify(value.payload))

    },
  },
});

export const { setSignupData, setAddressData, setLoading, setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
