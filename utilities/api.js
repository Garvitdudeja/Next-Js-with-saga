import axios from "axios";
import Cookies from "js-cookie";
import queryString from "query-string";
import { toast } from "react-toastify";
import { BaseUrl } from "../constants/constant";

const axiosInstance = axios.create({
  baseURL: BaseUrl.API_URL,
  headers: {
    Accept: "application/json",
  },
});

// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (config) {
  const authToken = (JSON.parse(Cookies.get("authToken") ?? '{}'))?.token ?? "";
  config.headers.Authorization = authToken;
  return config;
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error?.response?.status === 401 || error?.response?.status === 403) {
//       Cookies.remove("authToken");
//       toast.warning("Session expired");
//       setTimeout(() => {
//         window.location.reload();
//       }, 200);
//     }
//     return Promise.reject(error?.response?.data);
//   }
// );

const axiosPost = (url, params = {}) => {
  return axiosInstance
    .post(url, params)
    .then((response) => {
      console.log(response)
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      console.log(err)
      const errorMessage =
        err?.response?.data?.msg ||
        Array.isArray(err?.errors) && err?.errors[0]?.errorMessage ||
        "Unknown error occurred";
      throw { status: err?.response?.status, msg: errorMessage };
    });
};

const axiosPut = (url, params = {}) => {
  return axiosInstance
    .put(url, params)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      const errorMessage =
        err?.response?.data?.msg ||
        Array.isArray(err?.errors) && err?.errors[0]?.errorMessage ||
        "Unknown error occurred";
      throw { status: err?.response?.status, msg: errorMessage };
    });
};

const axiosPostFormData = (url, params = {}) => {
  const formData = new FormData();
  if (params.file) {
    formData.append("image", params?.image);
  }

  return axiosInstance
    .post(url, params, { headers: { "Content-Type": "multipart/form-data" } })
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      const errorMessage =
        err?.response?.data?.msg ||
        Array.isArray(err?.errors) && err?.errors[0]?.errorMessage ||
        "Unknown error occurred";
      throw { status: err?.response?.status, msg: errorMessage };
    });
};

const axiosPostMultiFormData = (url, params = {}) => {
  const formData = new FormData();
  if (params.files) {
    params.files.forEach((image) => {
      formData.append("files", image);
    });
  }
  return axiosInstance
    .post(url, formData, { headers: { "Content-Type": "multipart/form-data" } })
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      const errorMessage =
        err?.response?.data?.msg ||
        Array.isArray(err?.errors) && err?.errors[0]?.errorMessage ||
        "Unknown error occurred";
      throw { status: err?.response?.status, msg: errorMessage };
    });
};

const axiosPatch = (url, params = {}) => {
  return axiosInstance
    .patch(url, params)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      const errorMessage =
        err?.response?.data?.msg ||
        Array.isArray(err?.errors) && err?.errors[0]?.errorMessage ||
        "Unknown error occurred";
      throw { status: err?.response?.status, msg: errorMessage };
    });
};

const axiosDelete = (url) => {
  return axiosInstance
    .delete(url)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      const errorMessage =
        err?.response?.data?.msg ||
        Array.isArray(err?.errors) && err?.errors[0]?.errorMessage ||
        "Unknown error occurred";
      throw { status: err?.response?.status, msg: errorMessage };
    });
};

const axiosGet = (url, params) => {
  let query = queryString.stringify(params);
  return axiosInstance
    .get(url + "?" + query)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      const errorMessage =
        err?.response?.data?.msg ||
        Array.isArray(err?.errors) && err?.errors[0]?.errorMessage ||
        "Unknown error occurred";
      throw { status: err?.response?.status, msg: errorMessage };
    });
};

export const ApiClient = {
  post: axiosPost,
  postFormData: axiosPostFormData,
  multipleFormData: axiosPostMultiFormData,
  patch: axiosPatch,
  delete: axiosDelete,
  get: axiosGet,
  put: axiosPut,
};
