import { useLocation, useNavigate } from "react-router-dom";

const Footer = (props) => {
    const navigation = useNavigate();
    const location = useLocation();

    return (
        <div className="flex justify-center z-10">
            <div className="w-full max-w-[31.25rem] shadow-all px-3 py-1 fixed bottom-0 bg-white">
                <div className="flex justify-around">
                    <div className="leading-4 cursor-pointer" onClick={() => navigation('/')}>
                        <div className={`flex justify-center ${location.pathname === '/' && 'text-cyan-700'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                            </svg>
                        </div>
                        <span className="text-[11px] font-medium">Home</span>
                    </div>
                    <div className="leading-4 cursor-pointer" onClick={() => navigation('/profile')}>
                        <div className={`flex justify-center ${location.pathname === '/profile' && 'text-cyan-700'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                <path d="M17 17h-11v-14h-2"></path>
                                <path d="M6 5l14 1l-1 7h-13"></path>
                            </svg>
                        </div>
                        <span className="text-[11px] font-medium">Keranjang</span>
                    </div>
                    <div className="leading-4 cursor-pointer" onClick={() => navigation('/chat-contact')}>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8 9h8"></path>
                                <path d="M8 13h6"></path>
                                <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"></path>
                            </svg>
                        </div>
                        <span className="text-[11px] font-medium">Pesan</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;