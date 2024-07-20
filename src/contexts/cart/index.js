import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ModalCartAddress } from "../../pages/cart/component";
import { addCartRepo, addOrderRepo, addUserAddressRepo, deleteUserAddressRepo, getCartRepo, getUserAddressRepo, updateCartRepo } from "../../repo";
import { RouteName } from "../../router/RouteName";
import { getLocalUser } from "../../utils";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const user = getLocalUser();
    const [loader, setLoader] = useState(false);
    const [element, setElement] = useState(<></>);
    const [cart, setCart] = useState({});

    const onGetCart = async () => {
        setLoader(true);
        await getCartRepo({ filter: 'filter[status]=active', include: "include=cartProductModel" }).then((res) => {
            setLoader(false);
            setCart(res);
        });
    }

    const onAddCart = async ({ productId, productPriceId, qty }) => {
        await addCartRepo({ body: { 'product_id': productId, 'product_price_id': productPriceId, 'qty': qty } }).then((res) => {
            setCart(res);
        });
    }

    const onUpdateCart = async ({ fullAddress }) => {
        await updateCartRepo({ body: { 'id': cart.id, 'address': fullAddress } }).then((res) => {
            if (res !== false) {
                setCart(res);
                setElement(<></>);
            }
        });
    }

    const onAddOrder = async ({ cartId }) => {
        await addOrderRepo({ body: { 'cart_id': cartId } }).then((res) => {
            if (res !== false) {
                navigation(RouteName.ORDER);
            }
        });
    }

    const onGetUserAddress = async () => {
        var userAddress = await getUserAddressRepo({}).then((res) => {
            return res;
        });
        return userAddress;
    }

    const onAddUserAddress = async ({ fullAddress = '' }) => {
        await addUserAddressRepo({ body: { 'full_address': fullAddress } }).then((res) => {
            if (res !== false) {
                onShowModalUserAddress();
            }
        });
    }

    const onDeleteUserAddress = async ({ id = '' }) => {
        await deleteUserAddressRepo({ body: { 'id': id } }).then((res) => {
            if (res !== false) {
                onShowModalUserAddress();
            }
        });
    }

    const onShowModalUserAddress = async () => {
        // Get address
        await onGetUserAddress().then((res) => {
            setElement(<ModalCartAddress userAddress={res} onChangeUserAddress={(res) => onUpdateCart({ fullAddress: res.fullAddress })} onAdd={(res) => onAddUserAddress({ fullAddress: res.fullAddress })} onDelete={(res) => onDeleteUserAddress({ id: res })} onClose={() => setElement(<></>)} />);
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        user !== null && onGetCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CartContext.Provider value={{ navigation, loader, element, user, cart, onAddCart, onAddOrder, onShowModalUserAddress }}>
            {children}
        </CartContext.Provider>
    );
}

export const UseCartContext = () => {
    return useContext(CartContext);
}