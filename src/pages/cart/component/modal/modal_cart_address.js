import { useState } from "react";
import { Button, InputArea } from "../../../../components";

const ModalCartAddress = (props) => {
    const [controller, setController] = useState({});

    const onAdd = () => {
        props.onAdd && props.onAdd(controller);
        setController({});
    }

    const onDelete = ({ id }) => {
        props.onDelete && props.onDelete(id);
    }

    const onClose = () => {
        props.onClose && props.onClose();
    }

    const onChangeUserAddress = ({ fullAddress }) => {
        props.onChangeUserAddress && props.onChangeUserAddress({ fullAddress: fullAddress });
    }

    return (
        <div className="fixed bottom-0 top-0 flex justify-center items-end w-full max-w-[31.25rem] bg-black bg-opacity-25">
            <div className="bg-white p-2 rounded-t-lg w-full h-[90%] shadow">
                <div className="flex gap-2 items-center justify-center">
                    <div className="rounded-full p-1 bg-cyan-700 text-white cursor-pointer" onClick={() => onClose()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                    </div>
                    <div className="text-center w-full pr-10"><span className="font-semibold text-[18px] text-cyan-700">Pilih Alamat</span></div>
                </div>
                <div className="mt-2">
                    <small>Tekan alamat untuk memilih alamat pengantaran</small>
                    {props.userAddress?.map((item, index) => {
                        return (
                            <div className="mt-1 border rounded-lg px-2 py-2 flex justify-between items-center" key={index}>
                                <div className="flex flex-col w-full cursor-pointer" onClick={() => onChangeUserAddress({ fullAddress: item.full_address })}>
                                    <span className="font-semibold text-sm">{item.full_address}</span>
                                    <small>Pastikan alamat yang dimasukan sesuai dengan contoh</small>
                                    <small>Contoh: (Dusun. Rt/Rw. Desa. Kec. Kab. Prov.)</small>
                                </div>
                                <div>
                                    <div className="border border-slate-600 rounded-full p-1 cursor-pointer" onClick={(e) => { if (e.defaultPrevented) return; e.preventDefault(); onDelete({ id: item.id }) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /></svg>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="mt-2 flex flex-col">
                        <span className="font-semibold text-sm">Bandung Padasuka</span>
                        <small>Contoh: (Dusun. Rt/Rw. Desa. Kec. Kab. Prov.) Tambahkan jalan atau patokan agar kurir mudah menemukanmu</small>
                    </div>
                    <div className="mt-1">
                        <InputArea placeholder="Tuliskan alamat lengkap pengantaran" value={controller.fullAddress} onChange={(value) => setController({ fullAddress: value })} />
                    </div>
                    <div className="mt-1">
                        <Button onClick={() => onAdd()} className="border border-cyan-700 text-cyan-700 py-[0.5rem]">Tambah Alamat</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCartAddress;