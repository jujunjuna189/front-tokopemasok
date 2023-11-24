import { useNavigate } from "react-router-dom";

const NavbarWithBack = (props) => {
    const navigation = useNavigate();

    return (
        <div className="flex justify-center sticky top-0 z-10 bg-white">
            <div className="w-full max-w-[31.25rem] shadow-md px-3 py-[0.50rem]">
                <div className="flex justify-between gap-4 items-center py-[0.40rem]">
                    <div className="flex gap-1 items-center cursor-pointer" onClick={() => navigation(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg>
                        <span className="font-bold text-sm">{props.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 6l16 0"></path>
                                <path d="M4 12l16 0"></path>
                                <path d="M4 18l16 0"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarWithBack;