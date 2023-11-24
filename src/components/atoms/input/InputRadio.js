import { useEffect, useState } from "react";

const InputRadio = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState(props.data);
    const [isActive, setIsActive] = useState({});

    const render = (field) => {
        return isActive[field] ? renderActive() : renderNonActive();
    }

    const onSetIsActive = (field, value) => {
        props.onChange && props.onChange({ value: field });
        setIsActive({ [field]: value });
    }

    const renderActive = () => {
        return (
            <div className="rounded-full p-[0.1rem] border-[0.2rem] border-violet-500 flex justify-center items-center">
                <div className="bg-violet-500 rounded-full p-[0.3rem]" />
            </div>
        );
    }

    const renderNonActive = () => {
        return (
            <div className="rounded-full p-[0.1rem] border-[0.2rem] border-violet-300 flex justify-center items-center">
                <div className="rounded-full p-[0.3rem]" />
            </div>
        );
    }

    useEffect(() => {
        onSetIsActive(props.value, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`flex ${props.flex ? 'items-center gap-4' : 'flex-col gap-2'} flex-wrap`}>
            {data.map((item, index) => {
                return (
                    <div className="flex items-center gap-1 cursor-pointer" key={index} onClick={() => onSetIsActive(item, !isActive[item] ?? true)}>
                        {render(item)}
                        <span className="font-medium">{item}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default InputRadio;