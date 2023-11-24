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
                    </div>
                </div>
            </div>
            {props.footer !== false && (<Footer />)}
        </div>
    );
}

export default Content;