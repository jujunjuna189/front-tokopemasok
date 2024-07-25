import axios from "axios";
import { getLocalToken } from "../../utils";
import { API_STORE } from "../../utils/api/api";

export const getStoreRepo = async ({ include = '', filter = '' }) => {
    var token = getLocalToken();
    try {
        const response = await axios.get(`${API_STORE}?${include}&${filter}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data.data.store.data;
    } catch (error) {
        return [];
    }
}