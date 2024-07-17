import axios from "axios";
import { getLocalToken } from "../../utils";
import { API_USER_ADDRESS } from "../../utils/api/api";

export const getUserAddressRepo = async ({ include = '', filter = '' }) => {
    var token = getLocalToken();
    try {
        const response = await axios.get(`${API_USER_ADDRESS}?${include}&${filter}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data.data.user_address.data;
    } catch (error) {
        return [];
    }
}

export const addUserAddressRepo = async ({ body }) => {
    var token = getLocalToken();
    try {
        const response = await axios.post(`${API_USER_ADDRESS}/create`, body, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data.data.user_address;
    } catch (error) {
        return false;
    }
}

export const deleteUserAddressRepo = async ({ body }) => {
    var token = getLocalToken();
    try {
        const response = await axios.post(`${API_USER_ADDRESS}/delete`, body, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data.data.user_address;
    } catch (error) {
        return false;
    }
}