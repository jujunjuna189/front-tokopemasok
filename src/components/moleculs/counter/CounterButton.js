const CounterButton = (props) => {
    return (
        <div className="flex gap-2">
            <span className="bg-cyan-700 text-white rounded-full p-1 cursor-pointer" onClick={props.onMin}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /></svg>
            </span>
            <span className="px-2 font-semibold text-sm">{props.value ?? 0}</span>
            <span className="bg-cyan-700 text-white rounded-full p-1 cursor-pointer" onClick={props.onPlus}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            </span>
        </div>
    );
}

export default CounterButton;