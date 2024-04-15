const baseUrl =
  "https://fudo-auth-service.vercel.app/api/product?currentPage=1&perPage=4";

export const getProducts = () => fetch(baseUrl);
