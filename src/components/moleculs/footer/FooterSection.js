const FooterSection = (props) => {
    return (
        <div className="flex justify-center w-full">
            <div className="w-full max-w-[31.25rem] shadow-all px-4 py-[0.80rem] fixed bottom-0 bg-white">
                {props.children}
            </div>
        </div>
    );
}

export default FooterSection;