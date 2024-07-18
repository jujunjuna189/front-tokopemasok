import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../router/RouteName";
import { Button } from "../../atoms";

const ScreenNoAuth = () => {
    const navigation = useNavigate();
    return (
        <div className="flex justify-center items-center fixed bottom-0 top-0 w-full max-w-[31.25rem]">
            <div className="flex flex-col text-center">
                <span className="font-semibold text-lg">Masuk Dengan Akun?</span>
                <span>Fitur belum tersedia, fitur akan terbuka saat anda masuk dengan akun</span>
                <div className="mt-4 flex justify-center">
                    <Button className="bg-cyan-700 text-white py-[0.5rem]" onClick={() => navigation(RouteName.LOGIN)}>Masuk Akun</Button>
                </div>
            </div>
        </div>
    );
}

export default ScreenNoAuth;