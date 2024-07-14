export const formatterCurrency = (value) => {
    let currency = Intl.NumberFormat('id-ID', { style: 'decimal', minimumFractionDigits: 0 }).format(value);
    return 'Rp' + currency;
}

export const formatterDecimal = (value) => {
    let decimal = Intl.NumberFormat('id-ID', { style: 'decimal', minimumFractionDigits: 0 }).format(value);
    return decimal;
}