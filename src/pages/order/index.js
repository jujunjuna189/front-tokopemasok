import { Content, NavbarSimple } from "../../components";
import { UseOrderContext } from "../../contexts/order";
import { RouteName } from "../../router/RouteName";
import { dateFormatter, formatterCurrency } from "../../utils";

const OrderPage = () => {
    const { navigation, tab, order, onChangeTab } = UseOrderContext();

    return (
        <Content navbar={false} padding={false}>
            <NavbarSimple title={"Pesanan"} />
            <div className="flex gap-3 overflow-x-auto scrollbar-hidden px-4">
                {tab?.map((item, index) => {
                    return (
                        <div key={index} onClick={() => onChangeTab(index)} className="cursor-pointer">
                            <span className={`text-[14px] ${item.isActive && 'font-semibold'}`}>{item.title}</span>
                        </div>
                    );
                })}
            </div>
            <div className="mt-3 px-4">
                {order?.map((item, index) => {
                    return (
                        <div className="border rounded-lg mt-2 py-2 px-3" key={index} onClick={() => navigation(RouteName.ORDER_DETAIL + `/${item.id}`)}>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="font-semibold">{item.qty} Pesanan</span>
                                    <small>Nomor: {item.order_number}</small>
                                </div>
                                <div className="flex flex-col text-end">
                                    <span className="font-semibold">{formatterCurrency(item.total ?? 0)}</span>
                                    <small>{dateFormatter(item.created_at)}</small>
                                </div>
                            </div>
                            <hr className="my-1" />
                            {item.order_product_model?.map((itemChild, indexChild) => {
                                return (
                                    <small key={indexChild}>{indexChild !== 0 && ','} <span className="font-semibold">{itemChild.qty}</span><span className="text=[7px]">kg</span> {itemChild.order_product_history_model.title}</small>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </Content>
    );
}

export default OrderPage;