import axios from "axios";
import { API_PRODUCT } from "../../utils/api/api";

export const getProductRepo = async ({ include = '', filter = '' }) => {
    try {
        const response = await axios.get(`${API_PRODUCT}?${include}&${filter}`);
        return response.data.data.product.data;
    } catch (error) {
        return [];
    }
}

export const createProductRepo = async ({ token, body }) => {
    try {
        const response = await axios.post(API_PRODUCT, body, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data;
    } catch (error) {
        return false;
    }
}