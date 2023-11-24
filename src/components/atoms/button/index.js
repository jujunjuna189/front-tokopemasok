const Button = (props) => {
    return (
        <div className={`font-semibold py-[0.3rem] px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer whitespace-pre ${props.className}`} onClick={() => (props.onClick && !props.loader) && props.onClick()}>
            {!props.loader && props.children}
            {props.loader && (
                <svg xmlns="http://www.w3.org/2000/svg" className={`animate-spin ${props.dark ? 'text-violet-500' : 'text-white'}`} width="21" height="21" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"></path>
                    <path className="animate-pulse" d="M17 12a5 5 0 1 0 -5 5"></path>
                </svg>
            )}
        </div>
    );
}

export default Button;