import { ArrowBack, Button, Content, CounterButton, HelpAdmin } from "../../components";
import { UseCartLocalContext } from "../../contexts/cart_local";
import { formatterDecimal } from "../../utils";

const CartLocalPage = () => {
    const { navigation, element, cart, onShowModalUserAddress, onAddCartLocal, onMinCartLocal, orderViaWA } = UseCartLocalContext();
    return (
        <Content navbar={false} footer={false} padding={false} element={element}>
            <div className="py-4 pl-2 flex justify-between sticky top-0 bg-white">
                <ArrowBack label={'Pesanan'} />
                <HelpAdmin />
            </div>
            <div className="px-2">
                <div className="flex gap-1 items-center py-1 px-2 rounded-md bg-cyan-50 text-cyan-900">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1" /><path d="M6 9l3 0" /></svg>
                    </span>
                    <span className="font-medium">Pesanan diantar sesuai yang di jadwalkan</span>
                </div>
                <div className="border rounded-lg mt-2 py-2 px-3">
                    <span>Pengantaran</span>
                    <div className="border py-2 px-3 rounded-lg mt-1 flex flex-col">
                        <span className="font-medium text-sm">Layanan Kami</span>
                        <small>Pesanan akan di antar dengan layanan kami...</small>
                    </div>
                </div>
                <div className="border rounded-lg mt-2 py-2 px-3 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span>Alamat Pengantaran</span>
                        <span className="font-medium text-sm">{cart.address ?? 'Silahkan ubah alamat pengantaran anda'}</span>
                    </div>
                    <div>
                        <Button className="border border-cyan-700 text-cyan-700" onClick={() => onShowModalUserAddress()}>Ubah</Button>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <div className="px-2">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="font-medium text-sm">Apa ada pesanan lain ?</span>
                        <span>Tambah lagi pesanan?</span>
                    </div>
                    <div>
                        <Button className="border border-cyan-700 text-cyan-700" onClick={() => navigation(-1)}>Pesan Lagi</Button>
                    </div>
                </div>
                <div className="mt-2">
                    {cart.cart_product?.map((item, index) => {
                        return (
                            <div className="border rounded-lg mt-1 py-2 px-2 flex items-end justify-between" key={index}>
                                <div className="flex gap-2 items-center overflow-hidden">
                                    <div className="border rounded-lg w-16 h-16">
                                        <img src={item?.image} alt={item?.title} className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-medium text-sm">{item?.title}</span>
                                        <span className="text-sm">{formatterDecimal(item?.price?.price ?? 0)}</span>
                                    </div>
                                </div>
                                <div className="pb-2">
                                    <CounterButton value={<span>{item?.qty}<span className="font-normal text-[10px]">kg</span></span>} onPlus={() => onAddCartLocal({ item: item })} onMin={() => item.qty > 0 && onMinCartLocal({ item: item })} />
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
                        <span>{formatterDecimal(cart.sub_total ?? 0)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Total Pembayaran</span>
                        <span className="font-semibold">{formatterDecimal(cart.sub_total ?? 0)}</span>
                    </div>
                </div>
            </div>
            <div className="h-10"></div>
            <div className="fixed bottom-0 bg-white py-4 w-full px-2 max-w-[31.25rem]">
                <Button className="bg-cyan-700 text-white py-[0.5rem] w-full" onClick={() => orderViaWA()}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                    </span>
                    Pesan Sekarang
                </Button>
            </div>
        </Content>
    );
}

export default CartLocalPage;