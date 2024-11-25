import axios from "axios";

const unsplashApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL_API,
});

unsplashApi.interceptors.request.use((config) => {
  const currentParams = config.params || {};

  config.params = {
    client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY?.toString(),
    ...currentParams,
  };

  return config;
});

export default unsplashApi;
