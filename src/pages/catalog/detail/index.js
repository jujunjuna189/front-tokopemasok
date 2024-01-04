import { Button, Content, FooterSection, NavbarWithBack } from "../../../components";
import { UseCatalogDetailContext } from "../../../contexts/catalog/detail";
import { formatterCurrency } from "../../../utils";


const CatalogDetailPage = () => {
    const { element, catalog, buyNow } = UseCatalogDetailContext();

    return (
        <Content element={element} footer={false} navbar={false} padding={false}>
            <NavbarWithBack title="Detail Produk" />
            <div className="p-3">
                <div className="aspect-square bg-slate-400 rounded-lg border overflow-hidden">
                    <img src={catalog.path} alt={catalog.title} />
                </div>
                <div className="flex gap-3 items-center mt-2">
                    <div className="rounded-full px-2 bg-green-100">
                        <span className="text-[9px] text-green-700 font-semibold">{catalog.status}</span>
                    </div>
                    <span className="text-slate-500 text-[10px]">{catalog.sell} Terjual</span>
                </div>
                <div className="mt-1">
                    <span className="font-bold text-base">{catalog.title}</span><br />
                    <span className="font-bold text-base text-orange-600">{formatterCurrency(catalog.price)}</span>
                </div>
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
                <div className="border rounded-lg mt-3 p-3">
                    <div className="flex gap-3 items-center">
                        <div className="rounded-full p-2 border border-cyan-600 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-cyan-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l18 0" /><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" /><path d="M5 21l0 -10.15" /><path d="M19 21l0 -10.15" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /></svg>
                        </div>
                        <div className="flex flex-col leading-4">
                            <span className="font-semibold text-[13px]">Toko Bu Hj</span>
                            <small>Pemilik Toko</small>
                        </div>
                    </div>
                </div>
                <div className="mt-3">{catalog.description}</div>
            </div>
            <FooterSection>
                <div className="flex justify-between items-center">
                    <div className="leading-3">
                        <small>Subtotal</small><br />
                        <span className="font-bold text-base text-orange-600">Rp 190.000</span>
                    </div>
                    <Button className="px-[1.5rem] py-[0.6rem] text-white bg-cyan-600" onClick={() => buyNow()}>Pesan Sekarang</Button>
                </div>
            </FooterSection>
        </Content>
    );
}

export default CatalogDetailPage;