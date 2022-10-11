import axios from "axios";

const unsplashApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL_API,
});

unsplashApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  };

  return config;
});

export default unsplashApi;
