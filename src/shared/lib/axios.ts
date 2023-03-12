import axios from "axios";

export const baseURL = "https://api.stackexchange.com/2.3";
export const key = "ktVjqvbbpIwAO9HkRr8H)A((";

const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

type ErrorInterceptor = (error: any) => any;

const errorInterceptor: ErrorInterceptor = (error) => {
  const status = error.response?.status;

  if (status && status === 498) {
    const { errorCode } = error.response.data;

    return Promise.reject({ ...error, code: errorCode });
  }

  if (status && status === 401) {
    return Promise.reject({ ...error, code: 401 });
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  errorInterceptor
);

export { axiosInstance };
