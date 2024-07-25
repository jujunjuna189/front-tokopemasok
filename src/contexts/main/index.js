import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AssetBannerFreeOngkir, AssetBannerKemanaAja, AssetBannerPaketProduk, AssetBannerWelcome } from "../../assets";
import { addCartRepo, getCartRepo, getProductRepo, getStoreRepo } from "../../repo";
import { getLocalCart, getLocalUser, setLocalCart } from "../../utils";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const user = getLocalUser();
    const [localCart, setStateLocalCart] = useState(getLocalCart());
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

    const [store, setStore] = useState([]);
    const [list, setList] = useState([]);

    const onGetStore = async () => {
        await getStoreRepo({}).then((res) => {
            setStore(res);
        });
    }

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

    // local cart
    const onAddCartLocal = ({ item = {} }) => {
        // combine product by id product
        var cart = getLocalCart() ?? {};
        var product = cart.cart_product ?? [];
        var combineIndex = product.findIndex((x) => x.id === item.id);
        if (combineIndex >= 0) {
            var combine = product[combineIndex];
            combine.qty = combine.qty + item.price.qty;
            combine.sub_total = (combine.qty * item.price.price).toString();
            product[combineIndex] = { ...item, ...combine };
        } else {
            product.push({ ...item, qty: item.price.qty, sub_total: (item.price.qty * item.price.price).toString() });
        }
        cart.qty = product.reduce((total, currentValue) => total + currentValue.qty, 0);
        cart.sub_total = product.reduce((total, currentValue) => total + parseInt(currentValue.sub_total), 0).toString();
        setLocalCart({ ...cart, cart_product: [...product] });
        setStateLocalCart({ ...cart, cart_product: [...product] });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        onGetStore();
        onGetProduct();
        user !== null && onGetCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <MainContext.Provider value={{ navigation, user, carousel, carouselText, store, list, localCart, cart, onAddCart, onAddCartLocal }}>
            {children}
        </MainContext.Provider>
    );
}

export const UseMainContext = () => {
    return useContext(MainContext);
}