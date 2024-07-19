import { ArrowBack, Button, Content, HelpAdmin, InputEmail, InputPassword, InputText } from "../../components";
import { UseRegisterContext } from "../../contexts/register";

const RegisterPage = () => {
    const { loader, onSetController, onRegister } = UseRegisterContext();

    return (
        <Content navbar={false} footer={false} padding={false} loader={loader}>
            <div className="py-4 pl-2 flex justify-between">
                <ArrowBack label={'Daftar Akun'} />
                <HelpAdmin />
            </div>
            <div className="px-6 mt-8">
                <div className="flex flex-col">
                    <span className="font-bold text-lg leading-[.8rem]">Daftar Akun</span>
                    <span className="text-cyan-700 font-bold text-lg">Tokopemasok</span>
                </div>
                <div className="mt-5">
                    <span>Nama Lengkap</span>
                    <InputText placeholder="Masukan Nama Lengkap" onChange={(value) => onSetController('name', value)} />
                </div>
                <div className="mt-5">
                    <span>Alamat Email</span>
                    <InputEmail placeholder="contoh@gmail.com" onChange={(value) => onSetController('email', value)} />
                </div>
                <div className="mt-3">
                    <span>Kata Sandi</span>
                    <InputPassword placeholder="Masukan kata sandi" onKeyDown={() => onRegister()} onChange={(value) => onSetController('password', value)} />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <Button className="bg-cyan-700 text-white py-[0.5rem]" onClick={() => onRegister()}>Daftar Sekarang</Button>
                </div>
                <div className="text-center mt-5">
                    <span>Butuh bantuan? Hubungi kami di <span className="text-cyan-700 font-semibold cursor-pointer" onClick={() => { }}>Layanan Pelanggan</span></span>
                </div>
            </div>
        </Content>
    );
}

export default RegisterPage;