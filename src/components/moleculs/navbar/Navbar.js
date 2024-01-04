import { useNavigate } from "react-router-dom";
import { RouteName } from "../../../router/RouteName";

const Navbar = (props) => {
    const navigation = useNavigate();

    return (
        <div className="flex justify-center sticky top-0 z-10 bg-white">
            <div className="w-full max-w-[31.25rem] shadow-md px-3 py-[0.50rem]">
                <div className="flex justify-between gap-4 items-center">
                    <div className="py-[0.2rem]">
                        <h2 className="text-cyan-700 font-bold text-lg">Tokopemasok</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="cursor-pointer" onClick={() => navigation(RouteName.CATALOG_DETAIL)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                <path d="M17 17h-11v-14h-2"></path>
                                <path d="M6 5l14 1l-1 7h-13"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;