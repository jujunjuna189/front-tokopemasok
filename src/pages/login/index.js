import { ArrowBack, Button, Content, HelpAdmin, InputEmail, InputPassword } from "../../components";
import { UseLoginContext } from "../../contexts/login";
import { RouteName } from "../../router/RouteName";

const LoginPage = () => {
    const { navigation, loader, onSetController, onLogin } = UseLoginContext();

    return (
        <Content navbar={false} footer={false} padding={false} loader={loader}>
            <div className="py-4 pl-2 flex justify-between">
                <ArrowBack label={'Masuk Akun'} />
                <HelpAdmin />
            </div>
            <div className="px-6 mt-8">
                <div className="flex flex-col">
                    <span className="font-bold text-lg leading-[.8rem]">Masuk ke aplikasi</span>
                    <span className="text-cyan-700 font-bold text-lg">Tokopemasok</span>
                </div>
                <div className="mt-5">
                    <span>Alamat Email</span>
                    <InputEmail placeholder="contoh@gmail.com" onChange={(value) => onSetController('email', value)} />
                </div>
                <div className="mt-3">
                    <span>Kata Sandi</span>
                    <InputPassword placeholder="Masukan kata sandi" onKeyDown={() => onLogin()} onChange={(value) => onSetController('password', value)} />
                </div>
                <div className="my-4">
                    <span>Lupa kata sandi? <span className="text-cyan-700 font-semibold cursor-pointer" onClick={() => { }}>Reset kata sandi</span></span>
                </div>
                <div className="flex flex-col gap-2">
                    <Button className="bg-cyan-700 text-white py-[0.5rem]" onClick={() => onLogin()}>Masuk</Button>
                    <div className="text-center">
                        <span>Belum punya akun?</span>
                    </div>
                    <Button className="border border-cyan-700 text-cyan-700 py-[0.5rem]" onClick={() => navigation(RouteName.REGISTER)}>Daftar Sekarang</Button>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <span>Butuh bantuan? Hubungi kami di <span className="text-cyan-700 font-semibold cursor-pointer" onClick={() => { }}>Layanan Pelanggan</span></span>
                </div>
            </div>
        </Content>
    );
}

export default LoginPage;