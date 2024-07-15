import axios from "axios";
import { getLocalToken } from "../../utils";
import { API_CART, API_CART_ADD } from "../../utils/api/api";

export const getCartRepo = async ({ include = '', filter = '' }) => {
    var token = getLocalToken();
    try {
        const response = await axios.get(`${API_CART}?${include}&${filter}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data?.data?.cart?.data[0] ?? {};
    } catch (error) {
        return {};
    }
}

export const addCartRepo = async ({ body }) => {
    var token = getLocalToken();
    try {
        const response = await axios.post(API_CART_ADD, body, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data.data.cart;
    } catch (error) {
        return false;
    }
}