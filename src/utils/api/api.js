const REACT_APP_API_URL = `${process.env.REACT_APP_ENV}`;

// Auth
export const API_AUTH_LOGIN = `${REACT_APP_API_URL}/auth/login`;
export const API_AUTH_REGISTER = `${REACT_APP_API_URL}/auth/register`;
// Product
export const API_PRODUCT = `${REACT_APP_API_URL}/product`;
// Cart
export const API_CART = `${REACT_APP_API_URL}/cart`;
export const API_CART_ADD = `${REACT_APP_API_URL}/cart/create`;
// Order
export const API_ORDER = `${REACT_APP_API_URL}/order`;
export const API_ORDER_ADD = `${REACT_APP_API_URL}/order/create`;