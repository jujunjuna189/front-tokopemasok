import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getOrderRepo } from "../../repo";

const OrderDetailContext = createContext();

export const OrderDetailContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const params = useParams();
    const [order, setOrder] = useState({});

    const onGetOrder = async () => {
        await getOrderRepo({ filter: `filter[id]=${params.id}`, include: 'include=orderStatusModel,orderProductModel', sort: 'sort=-id' }).then((res) => {
            setOrder(res[0] ?? {});
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        onGetOrder();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <OrderDetailContext.Provider value={{ navigation, order }}>
            {children}
        </OrderDetailContext.Provider>
    );
}

export const UseOrderDetailContext = () => {
    return useContext(OrderDetailContext);
}