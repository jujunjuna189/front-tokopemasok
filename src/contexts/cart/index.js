import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getCartRepo } from "../../repo";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const [cart, setCart] = useState({});

    const onGetCart = async () => {
        await getCartRepo({ filter: 'filter[status]=active', include: "include=cartProductModel" }).then((res) => {
            setCart(res);
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        onGetCart();
    }, []);

    return (
        <CartContext.Provider value={{ navigation, cart }}>
            {children}
        </CartContext.Provider>
    );
}

export const UseCartContext = () => {
    return useContext(CartContext);
}