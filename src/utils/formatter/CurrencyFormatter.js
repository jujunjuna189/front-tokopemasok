export const formatterCurrency = (value) => {
    let currency = Intl.NumberFormat('id-ID', { style: 'decimal', minimumFractionDigits: 0 }).format(value);
    return 'Rp' + currency;
}