import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AssetBannerFreeOngkir, AssetBannerKemanaAja, AssetBannerPaketProduk, AssetBannerWelcome } from "../../assets";
import { addCartRepo, getCartRepo, getProductRepo } from "../../repo";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const [cart, setCart] = useState({});
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
            title: 'Paket Pernikahan',
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

    const [list, setList] = useState([]);

    const onGetProduct = async () => {
        await getProductRepo({ include: 'include=price' }).then((res) => {
            setList(res);
        });
    }

    const onGetCart = async () => {
        await getCartRepo({ filter: 'filter[status]=active' }).then((res) => {
            setCart(res);
        });
    }

    const onAddCart = async ({ productId, productPriceId }) => {
        await addCartRepo({ body: { 'product_id': productId, 'product_price_id': productPriceId } }).then((res) => {
            onGetCart();
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        onGetProduct();
        onGetCart();
    }, []);

    return (
        <MainContext.Provider value={{ navigation, carousel, carouselText, list, cart, onAddCart }}>
            {children}
        </MainContext.Provider>
    );
}

export const UseMainContext = () => {
    return useContext(MainContext);
}