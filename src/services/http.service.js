import axios from "axios";
import config from "../config.json";
import { toast } from "react-toastify";

axios.defaults.baseURL = config.apiEndpoint;

axios.interceptors.response.use(
  (res) => res,
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      toast.error("Что-то пошло не так. Попробуйте по позже!")
    }
    return Promise.reject(error);
  });

export const httpService = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
}