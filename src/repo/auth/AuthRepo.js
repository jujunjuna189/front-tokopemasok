import axios from "axios";
import { API_AUTH_LOGIN, API_AUTH_REGISTER } from "../../utils/api/api";

export const loginRepo = async ({ body }) => {
    try {
        const response = await axios.post(API_AUTH_LOGIN, body);
        return response.data.data;
    } catch (error) {
        return false;
    }
}

export const registerRepo = async ({ body }) => {
    try {
        const response = await axios.post(API_AUTH_REGISTER, body);
        return response.data.data;
    } catch (error) {
        return false;
    }
}