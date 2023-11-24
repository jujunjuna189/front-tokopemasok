import { AssetBannerBawah, AssetBannerBawah2, AssetBusinessPackage, IcReward } from "../../assets";
import { Button, Card, Content, SimpleCarousel, VerticalCarousel } from "../../components";
import { UseMainContext } from "../../contexts/main";
import { formatterCurrency } from "../../utils";

const MainPage = () => {
    const { carousel, carouselText, packages, list } = UseMainContext();

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
            <div className="px-2 py-4">
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
            {/* Paket */}
            <div className="mt-1">
                <div className="px-2">
                    <h1 className="text-sm font-bold">Paket Acara</h1>
                </div>
                <div className="flex gap-2 overflow-x-auto scrollbar-hidden px-2 pt-2 pb-3">
                    {packages.event.map((item, index) => {
                        return (
                            <div key={index} className="min-w-[18rem] w-72 max-w-[18rem]">
                                <div className="rounded-md p-2 border-t border-x border-slate-100 shadow-top-with-x">
                                    <div className="flex gap-3 items-center">
                                        <div className="h-16 w-16 rounded-md bg-slate-100">
                                            <img src={item.path} alt="Product" className="w-full h-full" />
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-sm">{item.title}</h5>
                                            <span>{item.subTitle}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-[0.4rem]">
                                    <hr className="border-cyan-700 opacity-40 border-dashed" />
                                </div>
                                <div className="rounded-md p-2 border-b border-x border-slate-100 shadow-bottom-with-x">
                                    <div className="flex justify-between items-center px-1">
                                        <span className="font-bold text-sm text-orange-600">{formatterCurrency(item.price)}</span>
                                        <Button className="bg-cyan-700 text-white">Pesan</Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="mt-1">
                <div className="px-2">
                    <h1 className="text-sm font-bold">Spesial Pernikahan</h1>
                </div>
                <div className="flex gap-2 overflow-x-auto scrollbar-hidden px-2 pt-2 pb-3">
                    {packages.wedding.map((item, index) => {
                        return (
                            <div key={index} className="min-w-[18rem] w-72 max-w-[18rem]">
                                <div className="rounded-md p-2 border-t border-x border-slate-100 shadow-top-with-x">
                                    <div className="flex gap-3 items-center">
                                        <div className="h-16 w-16 rounded-md bg-slate-100">
                                            <img src={item.path} alt="Product" className="w-full h-full" />
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-sm">{item.title}</h5>
                                            <span>{item.subTitle}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-[0.4rem]">
                                    <hr className="border-cyan-700 opacity-40 border-dashed" />
                                </div>
                                <div className="rounded-md p-2 border-b border-x border-slate-100 shadow-bottom-with-x">
                                    <div className="flex justify-between items-center px-1">
                                        <span className="font-bold text-sm text-orange-600">{formatterCurrency(item.price)}</span>
                                        <Button className="bg-cyan-700 text-white">Pesan</Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Banner 2 */}
            <div className="mt-3 px-2">
                <div className="bg-slate-200 h-24 rounded-lg">
                    <img src={AssetBannerBawah} alt="Product" className="w-full h-full" />
                </div>
            </div>
            {/* Berlangganan */}
            <div className="mt-3 px-2">
                <div className="border border-cyan-700 border-dashed rounded-lg py-2 px-3">
                    <div className="flex justify-between items-end gap-2">
                        <div className="leading-3">
                            <h1 className="font-bold text-sm">Berlangganan</h1>
                            <span className="text-[11px]">Kami senang bisa bekerja sama memenuhi kebutuhan anda</span>
                        </div>
                        <div>
                            <Button className="bg-cyan-700 text-white">Mulai Berlangganan</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Paket Usaha */}
            <div className="mt-3 px-2">
                <div className="flex gap-4 items-center p-2 border border-cyan-500 bg-cyan-50 rounded-lg">
                    <div className="h-[4.5rem] min-w-[4.5rem] w-[4.5rem] max-w-[4.5rem] rounded-md bg-slate-200 overflow-hidden">
                        <img src={AssetBusinessPackage} alt="Product" className="w-full h-full" />
                    </div>
                    <div className="leading-3">
                        <div className="flex gap-3 items-center">
                            <h1 className="font-bold text-sm">Paket Usaha</h1>
                            <div className="rounded-full px-2 bg-yellow-100">
                                <span className="text-[9px] text-yellow-700 font-semibold">Segera Hadir</span>
                            </div>
                        </div>
                        <span>Kami siapkan bahan terbaik untuk usaha anda</span>
                        <div className="flex mt-2">
                            <Button className="bg-cyan-700 text-white py-[0.5rem]">Mulai Buka Paket Usaha</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner 3 */}
            <div className="mt-3 px-2">
                <div className="bg-slate-200 h-12 rounded-lg">
                    <img src={AssetBannerBawah2} alt="Product" className="w-full h-full" />
                </div>
            </div>
            {/* List Product */}
            <div className="mt-4">
                <div className="px-2">
                    <h1 className="text-sm font-bold">Spesial Keluarga Sehat</h1>
                </div>
                <div className="mt-2 px-2">
                    <div className="grid grid-cols-2 mt-3 gap-2">
                        {list.map((item, index) => {
                            return (
                                <Card key={index} className="cursor-pointer flex flex-col" onClick={() => { }}>
                                    <div className="aspect-square rounded-xl bg-slate-200 overflow-hidden">
                                        <img src={item.path} alt={item.title} className="h-full w-full" />
                                    </div>
                                    <div className="mt-2">
                                        <span className="font-medium text-sm">{item.title}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-sm text-orange-600">{formatterCurrency(item.price)}</span>
                                    </div>
                                    <div className="flex gap-3 items-center mt-2">
                                        <div className="rounded-full px-2 bg-green-100">
                                            <span className="text-[9px] text-green-700 font-semibold">{item.status}</span>
                                        </div>
                                        <span className="text-slate-500 text-[10px]">{item.sell} Terjual</span>
                                    </div>
                                    <div className="grow" />
                                    <div className="flex justify-between items-center mt-3">
                                        <div className="leading-4">
                                            <span className="font-medium">Sertifikasi Halal</span><br />
                                            <span className="font-medium text-cyan-600">Fresh/Segar</span>
                                        </div>
                                        <div>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.496 11.983L19.462 15.389C19.5429 15.5292 19.5886 15.687 19.5951 15.8487C19.6017 16.0105 19.5689 16.1715 19.4995 16.3178C19.4302 16.4641 19.3264 16.5914 19.1971 16.6888C19.0678 16.7862 18.9168 16.8508 18.757 16.877L18.644 16.888L18.532 16.887L15.599 16.697L14.296 19.333C14.2253 19.4757 14.1215 19.5995 13.9933 19.6941C13.8651 19.7886 13.7161 19.8512 13.5589 19.8766C13.4016 19.9021 13.2406 19.8896 13.0891 19.8403C12.9376 19.7909 12.8001 19.7061 12.688 19.593L12.606 19.499L12.534 19.389L10.566 15.982C11.9514 15.8954 13.2979 15.4893 14.5002 14.7955C15.7024 14.1017 16.7278 13.1391 17.496 11.983Z" fill="black" />
                                                <path d="M9.43 15.982L7.464 19.39C7.38433 19.5281 7.27285 19.6451 7.13881 19.7314C7.00478 19.8177 6.85208 19.8707 6.69342 19.8861C6.53476 19.9014 6.37472 19.8787 6.22663 19.8197C6.07853 19.7607 5.94667 19.6672 5.842 19.547L5.766 19.447L5.702 19.333L4.398 16.698L1.467 16.888C1.30555 16.8984 1.14399 16.8695 0.996149 16.8038C0.848312 16.738 0.718607 16.6375 0.618141 16.5107C0.517675 16.3839 0.449443 16.2346 0.419289 16.0756C0.389135 15.9167 0.397957 15.7528 0.445 15.598L0.485 15.491L0.535 15.391L2.503 11.982C3.27067 13.1381 4.29547 14.1009 5.4972 14.795C6.69892 15.4891 8.04497 15.8947 9.43 15.982Z" fill="black" />
                                                <path d="M10 0L10.24 0.00399995C12.0539 0.0662278 13.7727 0.830561 15.0339 2.13577C16.2951 3.44098 17 5.18502 17 7L16.997 7.193L16.99 7.385L16.972 7.63L16.946 7.872L16.922 8.05C16.8562 8.48165 16.7501 8.90617 16.605 9.318L16.489 9.626L16.336 9.974C15.7699 11.18 14.8714 12.1994 13.7461 12.9125C12.6208 13.6257 11.3153 14.0029 9.98308 14C8.65083 13.9971 7.34708 13.614 6.22492 12.896C5.10276 12.1779 4.2088 11.1545 3.648 9.946L3.518 9.649L3.466 9.516L3.386 9.299L3.291 9.005C3.25707 8.89115 3.22606 8.77644 3.198 8.661L3.138 8.39L3.089 8.119L3.069 7.98L3.03 7.657L3.006 7.292L3 7C2.99997 5.18502 3.70489 3.44098 4.96607 2.13577C6.22726 0.830561 7.94609 0.0662278 9.76 0.00399995L10 0Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <Button className="bg-cyan-700 text-white py-[0.5rem]">Pesan Sekarang</Button>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default MainPage;