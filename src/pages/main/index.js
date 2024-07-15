import { IcReward } from "../../assets";
import { Button, Card, Content, InputSearch, SimpleCarousel, VerticalCarousel } from "../../components";
import { UseMainContext } from "../../contexts/main";
import { RouteName } from "../../router/RouteName";
import { formatterCurrency } from "../../utils";

const MainPage = () => {
    const { navigation, carousel, carouselText, list, cart, onAddCart } = UseMainContext();

    return (
        <Content padding={false}>
            <div className="mt-3">
                <SimpleCarousel>
                    {carousel.map((item, index) => {
                        return (
                            <div key={index} className="h-24 min-w-[85%] w-[85%] max-w-[85%] rounded-lg overflow-hidden flex justify-center items-center">
                                <img src={item.path} alt={item.title} className="h-full w-full" />
                            </div>
                        );
                    })}
                </SimpleCarousel>
            </div>
            <div className="px-2 pt-4"><InputSearch placeholder="Cari Produk..." /></div>
            <div className="px-2 pt-4">
                <Card className="p-3">
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-md bg-slate-200 pt-1 flex justify-center items-center overflow-hidden">
                            <img src={IcReward} alt="IconReward" className="h-full" />
                        </div>
                        <VerticalCarousel className="h-8">
                            {carouselText.map((item, index) => {
                                return (
                                    <div key={index} className="leading-3">
                                        <h4 className="font-bold text-sm text-orange-600">{item.title}</h4>
                                        <span>{item.subTitle}</span>
                                    </div>
                                );
                            })}
                        </VerticalCarousel>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="font-medium text-sm">Tentang Tokopemasok</span>
                        <Button className="bg-cyan-700 text-white">Telusuri</Button>
                    </div>
                </Card>
            </div>
            <div className="px-2 pt-2">
                <Card className="p-3 flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className="font-semibold">Download Aplikasi Tokopemasok</span>
                        <small>Dapatkan kemudahan yang berlimpah dengan menggunakan aplikasi Tokopemasok</small>
                    </div>
                    <div>
                        <Button className="bg-cyan-700 text-white">Unduh</Button>
                    </div>
                </Card>
            </div>
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
                                        <Button className="bg-cyan-700 text-white py-[0.5rem]" onClick={() => onAddCart({ productId: item.id, productPriceId: item.price.id })}>Pesan Sekarang</Button>
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
        </Content>
    );
}

export default MainPage;