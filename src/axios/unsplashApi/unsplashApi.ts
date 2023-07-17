import axios from "axios";

const unsplashApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL_API,
});

export default unsplashApi;
