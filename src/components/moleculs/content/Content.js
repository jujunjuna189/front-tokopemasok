import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Content = (props) => {
    return (
        <div className="text-[12px]">
            {props.navbar !== false && (<Navbar />)}
            <div className="relative">
                <div className="flex justify-center">
                    {props.jumbotron && (<img src={props.jumbotron} alt="Background-bg" className="h-[14.438rem] object-cover object-left" />)}
                </div>
                <div className="flex justify-center">
                    <div className={`${props.padding !== false && 'px-3'} min-h-[78.5vh] w-full max-w-[31.25rem] pb-16 relative ${props.jumbotron && 'mt-[-14.5rem]'}`}>
                        {props.children}
                        {props.element && props.element}
                        {props.loader && <div className="fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 z-30">
                            <div className="absolute bg-slate-900 opacity-30 w-full h-full">oke</div>
                            <div className="bg-slate-500 py-1 px-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`animate-spin text-white`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"></path>
                                    <path className="animate-pulse" d="M17 12a5 5 0 1 0 -5 5"></path>
                                </svg>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            {props.footer !== false && (<Footer />)}
        </div>
    );
}

export default Content;