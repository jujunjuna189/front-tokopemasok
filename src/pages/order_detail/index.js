import { ArrowBack, Button, Content, CounterButton, HelpAdmin } from "../../components";
import { UseOrderDetailContext } from "../../contexts/order_detail";
import { formatterDecimal } from "../../utils";

const OrderDetailPage = () => {
    const { order } = UseOrderDetailContext();

    return (
        <Content padding={false} navbar={false} footer={false}>
            <div className="py-4 pl-2 flex justify-between sticky top-0 bg-white">
                <ArrowBack label={'Pesanan'} />
                <HelpAdmin />
            </div>
            <div className="flex flex-col text-center leading-4">
                <span>Nomor Pesanan</span>
                <span className="font-semibold text-[18px]">{order.order_number}</span>
            </div>
            <hr className="my-3" />
            <div className="px-2">
                <div className="flex flex-col">
                    <span className="font-medium text-sm">Detail Pengantaran</span>
                    <small>Pesanan anda akan sampai 1-2 hari kerja, jika ada keterlambatan silahkan tekan pusat bantuan diatas!!</small>
                </div>
                <div className="border rounded-lg mt-2 py-2 px-3">
                    <span>Pengantaran</span>
                    <div className="border py-2 px-3 rounded-lg mt-1 flex flex-col">
                        <span className="font-medium text-sm">{order.delivery}</span>
                        <small>Pesanan akan di antar dengan layanan kami...</small>
                    </div>
                </div>
                <div className="border rounded-lg mt-2 py-2 px-3 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span>Alamat Pengantaran</span>
                        <span className="font-medium text-sm">{order.address}</span>
                    </div>
                </div>
            </div>
            <div className="mt-2 px-3">
                <span className="font-medium">Informasi Pemesanan</span>
            </div>
            <hr className="my-3" />
            <div className="px-3">
                <div className="mt-2">
                    {order.order_product_model?.map((item, index) => {
                        return (
                            <div className="border rounded-lg mt-1 py-2 px-2 flex items-end justify-between" key={index}>
                                <div className="flex gap-2 items-center overflow-hidden">
                                    <div className="border rounded-lg w-16 h-16">
                                        <img src={item.order_product_history_model.image} alt={item.order_product_history_model.title} className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-medium text-sm">{item.order_product_history_model.title}</span>
                                        <span className="text-sm">{formatterDecimal(item.order_product_price_history_model.price)}</span>
                                    </div>
                                </div>
                                <div className="pb-2">
                                    <CounterButton value={<span>{item.qty}<span className="font-normal text-[10px]">kg</span></span>} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <hr className="my-4" />
            <div className="px-2">
                <span className="font-medium text-sm">Ringkasan Pembayaran</span>
                <div className="border rounded-lg mt-1 py-3 px-4">
                    <div className="flex justify-between items-center">
                        <span>Harga</span>
                        <span>{formatterDecimal(order.total ?? 0)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Total Pembayaran</span>
                        <span className="font-semibold">{formatterDecimal(order.total ?? 0)}</span>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 bg-white py-4 w-full px-2 max-w-[31.25rem]">
                <Button className="bg-cyan-700 text-white py-[0.5rem] w-full">Pesan dan Antarkan</Button>
            </div>
        </Content>
    );
}

export default OrderDetailPage;