import axiosClient from "./axiosClient";

const productApi = {
  getAllProduct() {
    const url = `/products/all-paging`;
    return axiosClient.get(url);
  },
  getProductId(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getBrand() {
    const url = `/brands`;
    return axiosClient.get(url);
  },
};
export default productApi;
