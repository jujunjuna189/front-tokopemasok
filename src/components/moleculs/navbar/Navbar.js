import HelpAdmin from "../help/HelpAdmin";

const Navbar = (props) => {

    return (
        <div className="flex justify-center sticky top-0 z-10 bg-white">
            <div className="w-full max-w-[31.25rem] shadow-md pl-3 py-[0.50rem]">
                <div className="flex justify-between gap-4 items-center">
                    <div className="py-[0.2rem]">
                        <h2 className="text-cyan-700 font-bold text-lg">Tokopemasok</h2>
                    </div>
                    <HelpAdmin />
                </div>
            </div>
        </div>
    );
}

export default Navbar;