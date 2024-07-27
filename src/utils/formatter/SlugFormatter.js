export const SlugFormatter = (string) => {
    // Ubah nama toko menjadi huruf kecil
    string = string.toLowerCase();

    // Ganti tanda & dengan "dan"
    string = string.replace(/&/g, 'dan');

    // Hilangkan aksen dan karakter khusus
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Ganti spasi dan karakter bukan huruf/angka dengan tanda hubung
    string = string.replace(/[^a-z0-9]+/g, '-');

    // Hilangkan tanda hubung di awal dan akhir string
    string = string.replace(/^-+|-+$/g, '');

    return string;
}