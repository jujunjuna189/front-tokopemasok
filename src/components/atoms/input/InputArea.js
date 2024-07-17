const InputArea = (props) => {
    return (
        <textarea rows="4" cols="50" className="border rounded-md px-3 py-2 w-full focus:outline-none" value={props.value ?? ''} placeholder={props.placeholder} onChange={(event) => { props.onChange && props.onChange(event.target.value) }} />
    );
}

export default InputArea;