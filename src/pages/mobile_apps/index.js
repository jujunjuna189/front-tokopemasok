import { Button, Content } from "../../components";

const MobileAppsPage = () => {
    return (
        <Content navbar={false} footer={false}>
            <div className="bg-cyan-50 pt-36 pb-4 px-4">
                <span className="font-semibold text-lg">Banyak kemudahan hanya dalam genggaman, <br />Unduh Aplikasi <span className="text-cyan-700">Tokopemasok</span></span>
                <div className="mt-4">
                    Pesanan, Riwayat dan Keuntungan fitur laiinya bisa anda dapatkan dengan mengunduh Aplikasi Tokopemasok
                </div>
                <div className="mt-3 flex">
                    <Button className="bg-cyan-700 text-white py-[0.5rem]" onClick={() => window.open(process.env.REACT_APP_ENV + '/storage/apps/app-release.apk')}>Unduh Sekarang</Button>
                </div>
            </div>
        </Content>
    );
}

export default MobileAppsPage;