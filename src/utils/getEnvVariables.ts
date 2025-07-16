export const getEnvVariables = () => {
  return {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_ID_PRODUCT: import.meta.env.VITE_ID_PRODUCT,
  };
};
