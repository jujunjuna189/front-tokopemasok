import axios from "axios";
import { getLocalToken } from "../../utils";
import { API_ORDER } from "../../utils/api/api";

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