export const getLocalToken = () => {
    return JSON.parse(localStorage.getItem('tokopemasok.user'))?.token ?? '';
}

export const setLocalUser = (value) => {
    localStorage.setItem('tokopemasok.user', JSON.stringify(value));
}

export const getLocalUser = () => {
    return JSON.parse(localStorage.getItem('tokopemasok.user'));
}

export const clearLocal = () => {
    localStorage.clear();
}