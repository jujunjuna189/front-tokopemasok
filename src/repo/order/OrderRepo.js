import axios from "axios";
import { getLocalToken } from "../../utils";
import { API_ORDER, API_ORDER_ADD } from "../../utils/api/api";

export const getOrderRepo = async ({ include = '', filter = '', sort = '' }) => {
    var token = getLocalToken();
    try {
        const response = await axios.get(`${API_ORDER}?${include}&${filter}&${sort}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data?.data?.order?.data ?? [];
    } catch (error) {
        return [];
    }
}

export const addOrderRepo = async ({ body }) => {
    var token = getLocalToken();
    try {
        const response = await axios.post(API_ORDER_ADD, body, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data.data.order;
    } catch (error) {
        return false;
    }
}