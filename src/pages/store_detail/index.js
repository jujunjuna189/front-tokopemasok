import { Button, Card, Content } from "../../components"
import { UseStoreDetailContext } from "../../contexts/store_detail";
import { RouteName } from "../../router/RouteName";
import { formatterCurrency } from "../../utils";

const StoreDetailPage = () => {
    const { navigation, user, store, list, localCart, cart, onAddCart, onAddCartLocal } = UseStoreDetailContext();

    return (
        <Content navbar={false} padding={false}>
            {/* Detail Store */}
            <div className="flex justify-between items-center px-2 py-4">
                <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden border">
                        <img src={store.image} alt={store.name} className="w-full h-full" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">{store.name}</span>
                        <span className="text-[9px]">@{store.domain}</span>
                    </div>
                </div>
                <div>
                    <Button className="text-cyan-700 text-[10px]" onClick={() => navigator.clipboard.writeText(`${window.location.origin}${RouteName.MAIN}${store.domain}`)}>
                        Bagikan
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" /></svg>
                    </Button>
                </div>
            </div>
            <hr />
            {/* List Product */}
            <div className="mt-4 mb-20">
                <div className="px-2">
                    <h1 className="text-sm font-bold">Tersedia Sekarang</h1>
                </div>
                <div className="mt-2 px-2">
                    <div className="grid grid-cols-2 mt-3 gap-2">
                        {list.map((item, index) => {
                            return (
                                <Card key={index} className="cursor-pointer flex flex-col" onClick={() => { }}>
                                    <div className="aspect-square rounded-xl bg-slate-200 overflow-hidden">
                                        <img src={item.image} alt={item.title} className="h-full w-full" />
                                    </div>
                                    <div className="mt-2">
                                        <span className="font-medium text-sm">{item.title}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-sm text-orange-600">{formatterCurrency(item.price.price)}</span>
                                    </div>
                                    <div className="flex gap-3 items-center mt-2">
                                        <div className="rounded-full px-2 bg-green-100">
                                            <span className="text-[9px] text-green-700 font-semibold">Tersedia</span>
                                        </div>
                                    </div>
                                    <div className="grow" />
                                    <div className="mt-2">
                                        <Button className="bg-cyan-700 text-white py-[0.5rem]" onClick={() => user != null ? onAddCart({ productId: item.id, productPriceId: item.price.id }) : onAddCartLocal({ item: item })}>Pesan Sekarang</Button>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
            {Object.keys(cart).length !== 0 && (
                <div className="fixed bottom-14 py-4 w-full px-2 max-w-[31.25rem]">
                    <div className="flex justify-between items-center bg-cyan-700 py-2 px-3 rounded-lg text-white shadow-all cursor-pointer" onClick={() => navigation(RouteName.CART)}>
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm">{cart.qty} Pesanan</span>
                            <small>Pesanan belum selesai nih..!</small>
                        </div>
                        <div>
                            <span className="font-semibold text-sm">{formatterCurrency(cart.sub_total ?? 0)}</span>
                        </div>
                    </div>
                </div>
            )}
            {localCart != null && (
                <div className="fixed bottom-14 py-4 w-full px-2 max-w-[31.25rem]">
                    <div className="flex flex-col bg-cyan-700 py-2 px-3 rounded-lg text-white shadow-all cursor-pointer" onClick={() => navigation(RouteName.CART_LOCAL)}>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                                </span>
                                <span className="font-semibold text-sm">{localCart.qty} Pesanan</span>
                            </div>
                            <div>
                                <span className="font-semibold text-sm">{formatterCurrency(localCart.sub_total)}</span>
                            </div>
                        </div>
                        <small>Atur pesanan dan mulai pesan via WhatsApp..!</small>
                    </div>
                </div>
            )}
        </Content>
    );
}

export default StoreDetailPage;