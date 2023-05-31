import { data } from "autoprefixer";
import axiosClient from "./axiosClient";

const userApi = {
  register(data) {
    const url = "/users/signup";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "users/login";
    return axiosClient.post(url, data);
  },
  loginWithGoogle(data) {
    const url = "/users/userLoginWith";
    return axiosClient.post(url, data);
  },
  verify(data) {
    const url = "/users/verify";
    return axiosClient.post(url, data);
  },
  forgotPassword(data) {
    const url = "/users/forgotPassword";
    return axiosClient.post(url, data);
  },
  changeState(data) {
    const url = "/users/changeState";
    return axiosClient.patch(url, data);
  },
  verifyResetPassword(data) {
    const url = "/users/verifyResetPass";
    return axiosClient.post(url, data);
  },
  getUser() {
    const url = "/users/me";
    return axiosClient.get(url);
  },
  resetPassword(data, token) {
    const url = `/users/resetPassword/${token}`;
    return axiosClient.patch(url, data);
  },
  updateUser(data) {
    const url = "/users/updateMe";
    return axiosClient.patch(url, data);
  },
  addAddress(data) {
    const url = "/users/createAddress";
    return axiosClient.patch(url, data);
  },
  getAddress() {
    const url = "/users/me/address";
    return axiosClient.get(url);
  },
  deleteAddress(data) {
    const url = "/users/deleteAddress";
    return axiosClient.patch(url, data);
  },
  updateAddress(data) {
    const url = "/users/updateAddress";
    return axiosClient.patch(url, data);
  },
  updatePassword(data) {
    const url = "/users/updateMyPassword";
    return axiosClient.patch(url, data);
  },
  updateDefault(data) {
    const url = "/users/setDefaultAddress";
    return axiosClient.patch(url, data);
  },
};
export default userApi;
