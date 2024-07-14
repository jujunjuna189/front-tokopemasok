import { useLocation, useNavigate } from "react-router-dom";
import { RouteName } from "../../../router/RouteName";

const Footer = (props) => {
    const navigation = useNavigate();
    const location = useLocation();

    return (
        <div className="flex justify-center z-10">
            <div className="w-full max-w-[31.25rem] shadow-all px-3 py-[0.65rem] fixed bottom-0 bg-white">
                <div className="flex justify-around">
                    <div className="leading-4 cursor-pointer" onClick={() => navigation(RouteName.MAIN)}>
                        <div className={`flex justify-center ${location.pathname === RouteName.MAIN && 'text-cyan-700'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                            </svg>
                        </div>
                        <span className="text-[11px] font-medium">Beranda</span>
                    </div>
                    <div className="leading-4 cursor-pointer" onClick={() => navigation(RouteName.CART)}>
                        <div className="flex justify-center bg-cyan-700 rounded-full p-[0.40rem] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                        </div>
                    </div>
                    <div className="leading-4 cursor-pointer" onClick={() => navigation('/chat-contact')}>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 12h6" /><path d="M9 16h6" /></svg>
                        </div>
                        <span className="text-[11px] font-medium">Pesanan</span>
                    </div>
                    <div className="leading-4 cursor-pointer" onClick={() => navigation('/chat-contact')}>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                        </div>
                        <span className="text-[11px] font-medium">Biodata</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;