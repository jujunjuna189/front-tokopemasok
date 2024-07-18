import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getOrderRepo } from "../../repo";
import { getLocalUser } from "../../utils";

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const user = getLocalUser();
    const [order, setOrder] = useState([]);
    const [tab, setTab] = useState([
        {
            title: 'Riwayat',
            keyData: 'done',
            isActive: true,
        },
        {
            title: 'Diproses',
            keyData: 'processed',
            isActive: false,
        },
        {
            title: 'Dijadwalkan',
            keyData: 'scheduled',
            isActive: false,
        },
    ]);

    const onChangeTab = (index) => {
        tab.forEach((item) => {
            item.isActive = false;
        });

        tab[index].isActive = true;
        getOrder({ status: tab[index].keyData });
        setTab([...tab]);
    }

    const getOrder = async ({ status = '' }) => {
        await getOrderRepo({ filter: `filter[status]=${status}`, include: 'include=orderProductModel', sort: 'sort=-id' }).then((res) => {
            setOrder(res);
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        user !== null && onChangeTab(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <OrderContext.Provider value={{ navigation, tab, user, order, onChangeTab }}>
            {children}
        </OrderContext.Provider>
    );
}

export const UseOrderContext = () => {
    return useContext(OrderContext);
}