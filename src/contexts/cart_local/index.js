import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ModalCartAddress } from "../../pages/cart_local/component";
import { formatterDecimal, getLocalCart, removeLocalCart, setLocalCart } from "../../utils";

const CartLocalContext = createContext();

export const CartLocalContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const [element, setElement] = useState(<></>);
    const [cart, setCart] = useState({});

    const onGetCart = () => {
        setCart(getLocalCart());
    }

    // change show address form
    const onShowModalUserAddress = () => {
        setElement(<ModalCartAddress onAdd={(res) => { setLocalCart({ ...cart, address: res.fullAddress }); setCart({ ...cart, address: res.fullAddress }) }} onClose={() => setElement(<></>)} />);
    }

    // local cart
    const onAddCartLocal = ({ item = {} }) => {
        // combine product by id product
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
        setCart({ ...cart, cart_product: [...product] });
    }

    const onMinCartLocal = ({ item = {} }) => {
        // combine product by id product
        var product = cart.cart_product ?? [];
        var combineIndex = product.findIndex((x) => x.id === item.id);
        if (combineIndex >= 0) {
            var combine = product[combineIndex];
            combine.qty = combine.qty - item.price.qty;
            combine.sub_total = (combine.qty * item.price.price).toString();
            product[combineIndex] = { ...item, ...combine };

            // Delete product if qty 0
            if (product[combineIndex].qty === 0) {
                product.splice(combineIndex, 1);
            }
        } else {
            product.push({ ...item, qty: item.price.qty, sub_total: (item.price.qty * item.price.price).toString() });
        }
        cart.qty = product.reduce((total, currentValue) => total + currentValue.qty, 0);
        cart.sub_total = product.reduce((total, currentValue) => total + parseInt(currentValue.sub_total), 0).toString();
        setLocalCart({ ...cart, cart_product: [...product] });
        setCart({ ...cart, cart_product: [...product] });
        if (product.length === 0) {
            removeLocalCart();
            navigation(-1);
        }
    }

    const orderViaWA = () => {
        var numberAdmin = '6281297551925';

        let renderMassage = encodeURIComponent('*--Tokopemasok--*') + '%0A%0A';
        renderMassage += encodeURIComponent('Pesanan akan diantar sesuai dengan alamat pengataran yang tertera dengan *Layanan Kami* ') + '%0A%0A';
        renderMassage += encodeURIComponent('*Alamat Pengantaran:* ') + '%0A';
        renderMassage += encodeURIComponent(cart.address ?? 'Tidak ada alamat yang tertera') + '%0A%0A';
        renderMassage += encodeURIComponent('*Pesanan* ') + '%0A';

        cart.cart_product.forEach((item) => {
            renderMassage += encodeURIComponent('*Nama Produk:* ' + item.title) + '%0A';
            renderMassage += encodeURIComponent('*Harga:* ' + formatterDecimal(item.price.price)) + '%0A';
            renderMassage += encodeURIComponent('*Jumlah Pesanan:* ' + item.qty + 'kg') + '%0A%0A';
        });

        renderMassage += encodeURIComponent('*Ringkasan Pembayaran* ') + '%0A';
        renderMassage += encodeURIComponent('*Total Pembayaran:* ' + formatterDecimal(cart.sub_total)) + '%0A';

        window.open(`https://api.whatsapp.com/send?phone=${numberAdmin}&text=${renderMassage}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        onGetCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CartLocalContext.Provider value={{ navigation, element, cart, onShowModalUserAddress, onAddCartLocal, onMinCartLocal, orderViaWA }}>
            {children}
        </CartLocalContext.Provider>
    );
}

export const UseCartLocalContext = () => {
    return useContext(CartLocalContext);
}