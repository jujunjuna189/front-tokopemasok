import { createContext, useContext } from "react"
import { AssetBannerFreeOngkir, AssetBannerKemanaAja, AssetBannerPaketProduk, AssetBannerWelcome, AssetProductPackage1, AssetProductPackage2, AssetProductPackage3, AssetProductPackage4, AssetProductProduct1, AssetProductProduct2, AssetProductProduct3, AssetProductProduct4, AssetProductProduct5 } from "../../assets";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const carousel = [
        {
            title: 'Selamat datang di tokopemasok',
            path: AssetBannerWelcome,
        },
        {
            title: 'Dikirim kemana aja',
            path: AssetBannerKemanaAja,
        },
        {
            title: 'Paket produk lebih mantap',
            path: AssetBannerPaketProduk,
        },
        {
            title: 'Free ongkir',
            path: AssetBannerFreeOngkir,
        }
    ];

    const carouselText = [
        {
            title: 'Spesial Pernikahan',
            subTitle: 'Pikiran tentram dompet aman',
        },
        {
            title: 'Paket Acara',
            subTitle: 'Makin ramai dengan paket acara',
        },
        {
            title: 'Paket Liwetan',
            subTitle: 'Kumpul bareng teman lebih seru',
        },
        {
            title: 'Paket Camping',
            subTitle: 'Bakar bakar sambil nikmati alam',
        },
    ];

    const packages = {
        event: [
            {
                id: 1,
                title: 'Paket Hemat',
                subTitle: '20kg (Ayam) & 5kg (Ikan)',
                price: 500000,
                path: AssetProductPackage1,
            },
            {
                id: 2,
                title: 'Paket Premium',
                subTitle: '20kg (Ayam) & 15kg (Ikan)',
                price: 1100000,
                path: AssetProductPackage2,
            },
            {
                id: 3,
                title: 'Paket Mewah',
                subTitle: '50kg (Ayam) & 20kg (Ikan)',
                price: 2500000,
                path: AssetProductPackage3,
            },
        ],
        wedding: [
            {
                id: 1,
                title: 'Paket Hemat',
                subTitle: '20kg (Ayam) & 5kg (Ikan)',
                price: 500000,
                path: AssetProductPackage4,
            },
            {
                id: 2,
                title: 'Paket Premium',
                subTitle: '20kg (Ayam) & 15kg (Ikan)',
                price: 1100000,
                path: AssetProductPackage4,
            },
            {
                id: 3,
                title: 'Paket Mewah',
                subTitle: '50kg (Ayam) & 20kg (Ikan)',
                price: 2500000,
                path: AssetProductPackage4,
            },
        ],
    }

    const list = [
        {
            id: 1,
            title: 'Ayam Kampung Jago /Kg',
            price: 50000,
            status: 'Tersedia',
            sell: '+380',
            path: AssetProductProduct1,
        },
        {
            id: 2,
            title: 'Ayam Broiler /Kg',
            price: 28000,
            status: 'Tersedia',
            sell: '+290',
            path: AssetProductProduct2,
        },
        {
            id: 3,
            title: 'Ayam Pejantan /Kg',
            price: 25000,
            status: 'Tersedia',
            sell: '+330',
            path: AssetProductProduct3,
        },
        {
            id: 4,
            title: 'Ayam Kampung Betina /Kg',
            price: 26000,
            status: 'Tersedia',
            sell: '+390',
            path: AssetProductProduct4,
        },
        {
            id: 5,
            title: 'Ayam Petelur /Kg',
            price: 34000,
            status: 'Tersedia',
            sell: '+550',
            path: AssetProductProduct5,
        },
        {
            id: 6,
            title: 'Judul Produk',
            price: 5000000,
            status: 'Tersedia',
            sell: '+460',
            path: '',
        },
    ];

    return (
        <MainContext.Provider value={{ carousel, carouselText, packages, list }}>
            {children}
        </MainContext.Provider>
    );
}

export const UseMainContext = () => {
    return useContext(MainContext);
}