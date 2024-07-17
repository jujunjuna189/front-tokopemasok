const REACT_APP_API_URL = `${process.env.REACT_APP_ENV}`;

// Auth
export const API_AUTH_LOGIN = `${REACT_APP_API_URL}/auth/login`;
export const API_AUTH_REGISTER = `${REACT_APP_API_URL}/auth/register`;
// User Address
export const API_USER_ADDRESS = `${REACT_APP_API_URL}/user-address`;
// Product
export const API_PRODUCT = `${REACT_APP_API_URL}/product`;
// Cart
export const API_CART = `${REACT_APP_API_URL}/cart`;
export const API_CART_ADD = `${REACT_APP_API_URL}/cart/create`;
export const API_CART_UPDATE = `${REACT_APP_API_URL}/cart/update`;
// Order
export const API_ORDER = `${REACT_APP_API_URL}/order`;
export const API_ORDER_ADD = `${REACT_APP_API_URL}/order/create`;