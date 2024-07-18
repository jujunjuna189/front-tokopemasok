export const setLocalCart = (value) => {
    localStorage.setItem('tokopemasok.cart', JSON.stringify(value));
}

export const getLocalCart = () => {
    return JSON.parse(localStorage.getItem('tokopemasok.cart'));
}

export const removeLocalCart = () => {
    localStorage.removeItem('tokopemasok.cart');
}