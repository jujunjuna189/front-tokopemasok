import { useEffect } from "react";
import { Button } from "../../../../components";

const BuyNowModal = (props) => {

    const onClickOutside = () => {
        props.onClickOutside && props.onClickOutside();
    }

    const onSave = async () => {
    }

    useEffect(() => {
    }, []);

    return (
        <div className="fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-10">
            <div className="absolute min-h-[78.5vh] w-full max-w-[31.25rem] h-full bg-black opacity-30" onClick={() => onClickOutside()} />
            <div className="p-3 border w-full md:w-auto rounded-lg bg-white z-10 mx-5">
                <div className="leading-3">
                    <span className="text-base font-semibold">Atur Jumlah dan Subtotal</span><br />
                    <hr className="my-2" />
                </div>
                <div className="flex flex-col gap-1 py-2">
                    <div className="flex gap-2 my-3">
                        <div className="flex gap-2 border py-1 rounded-xl items-center">
                            <div className="text-slate-500 text-lg font-bold cursor-pointer px-3" onClick={() => { }}>-</div>
                            <span className="text-base">0</span>
                            <div className="text-slate-500 text-lg font-bold cursor-pointer px-3" onClick={() => { }}>+</div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span>Stok:</span>
                            <div>
                                <div className="px-2 bg-green-200 text-green-600 rounded-lg"><span className="text-[11px] font-semibold">Tersedia</span></div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Sub Total</span>
                        <span className="text-base font-semibold">Rp 190.000</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-center gap-2">
                        <Button className="border py-[0.5rem] px-[1rem]" onClick={() => onSave()}>Masukan Keranjang</Button>
                        <Button className="border border-orange-600 text-orange-600 py-[0.5rem] px-[1rem]" onClick={() => onSave()}>Pesan Sekarang</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyNowModal;