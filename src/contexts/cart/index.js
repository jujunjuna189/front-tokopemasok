import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { addCartRepo, addOrderRepo, getCartRepo } from "../../repo";
import { RouteName } from "../../router/RouteName";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const [cart, setCart] = useState({});

    const onGetCart = async () => {
        await getCartRepo({ filter: 'filter[status]=active', include: "include=cartProductModel" }).then((res) => {
            setCart(res);
        });
    }

    const onAddCart = async ({ productId, productPriceId, qty }) => {
        await addCartRepo({ body: { 'product_id': productId, 'product_price_id': productPriceId, 'qty': qty } }).then((res) => {
            setCart(res);
        });
    }

    const onAddOrder = async ({ cartId }) => {
        await addOrderRepo({ body: { 'cart_id': cartId } }).then((res) => {
            if (res !== false) {
                navigation(RouteName.ORDER);
            }
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        onGetCart();
    }, []);

    return (
        <CartContext.Provider value={{ navigation, cart, onAddCart, onAddOrder }}>
            {children}
        </CartContext.Provider>
    );
}

export const UseCartContext = () => {
    return useContext(CartContext);
}