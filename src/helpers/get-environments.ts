interface Returns {
  baseurl: string;
  access_key: string;
  secret_key: string;
}

export const getEnvironments = (): Returns => {
  return {
    baseurl: import.meta.env.VITE_BASEURL_API,
    access_key: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
    secret_key: import.meta.env.VITE_UNSPLASH_SECRET_KEY,
  };
};
