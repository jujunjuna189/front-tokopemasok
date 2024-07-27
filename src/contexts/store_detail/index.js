import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { addCartRepo, getCartRepo, getProductRepo, getStoreRepo } from "../../repo";
import { getLocalCart, getLocalUser, setLocalCart } from "../../utils";

const StoreDetailContext = createContext();

export const StoreDetailContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const user = getLocalUser();
    const params = useParams();
    const [store, setStore] = useState({});
    const [list, setList] = useState([]);
    const [localCart, setStateLocalCart] = useState(getLocalCart());
    const [cart, setCart] = useState({});

    const onGetStore = async () => {
        await getStoreRepo({ filter: `filter[domain]=${params.store_domain}` }).then((res) => {
            setStore(res[0]);
        });
    }

    const onGetProduct = async () => {
        await getProductRepo({ filter: 'filter[store_id]=1', include: 'include=price' }).then((res) => {
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
        <StoreDetailContext.Provider value={{ navigation, user, store, list, localCart, cart, onAddCart, onAddCartLocal }}>
            {children}
        </StoreDetailContext.Provider>
    );
}

export const UseStoreDetailContext = () => {
    return useContext(StoreDetailContext);
}