import { useEffect, useRef } from "react";

const VerticalCarousel = (props) => {
    const refCarousel = useRef();

    const countDimension = () => {
        let data = [];
        let dimension = refCarousel.current?.scrollHeight / props.children.length;
        for (let i = 0; i < props.children.length; i++) {
            data.push(dimension * i);
        }

        return data;
    }

    const position = (position) => {
        (refCarousel.current || {}).scrollTop = countDimension()[position];
    }

    const main = () => {
        let position_index = 0;
        position(position_index);
        setInterval(() => {
            position_index = position_index >= (props.children.length - 1) ? 0 : position_index + 1;
            position(position_index)
        }, 5000);
    }

    useEffect(() => {
        main()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`overflow-y-auto scrollbar-hidden scroll-smooth ${props.className}`} ref={refCarousel}>
            {props.children}
        </div>
    );
}

export default VerticalCarousel;