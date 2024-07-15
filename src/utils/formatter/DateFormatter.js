// const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const month = ['Januari', 'Pebruari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

export const dateFormatter = (value) => {
    const date = new Date(value);
    return `${setZero(date.getDate())} ${month[date.getMonth()]} ${date.getFullYear()}`;
}

export const setZero = (value) => {
    return value < 10 ? `0${value}` : value;
}