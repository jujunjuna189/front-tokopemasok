import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components";

const ScreenNoCart = () => {
    const navigation = useNavigate();
    return (
        <div className="flex justify-center items-center fixed bottom-0 top-0 w-full max-w-[31.25rem]">
            <div className="flex flex-col text-center">
                <span className="font-semibold text-lg">Pesanan Belum Ada!!</span>
                <span>Pesanan masih kosong, Pilih produk kebutuhan anda tekan dan pesan</span>
                <div className="mt-4 flex justify-center">
                    <Button className="bg-cyan-700 text-white py-[0.5rem]" onClick={() => navigation(-1)}>Pesan Sekarang</Button>
                </div>
            </div>
        </div>
    );
}

export default ScreenNoCart;