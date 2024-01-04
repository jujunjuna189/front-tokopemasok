import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AssetBannerFreeOngkir, AssetBannerKemanaAja, AssetBannerPaketProduk, AssetBannerWelcome, AssetProductPackage1, AssetProductPackage2, AssetProductPackage3, AssetProductPackage4 } from "../../assets";
import { getProductRepo } from "../../repo";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const navigation = useNavigate();
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

    const [list, setList] = useState([]);

    const onGetProduct = async () => {
        await getProductRepo().then((res) => {
            setList(res);
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        onGetProduct();
    }, []);

    return (
        <MainContext.Provider value={{ navigation, carousel, carouselText, packages, list }}>
            {children}
        </MainContext.Provider>
    );
}

export const UseMainContext = () => {
    return useContext(MainContext);
}