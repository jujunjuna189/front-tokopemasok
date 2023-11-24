import { useEffect, useRef } from "react";

const SimpleCarousel = (props) => {
    const refCarousel = useRef();
    const timeOut = useRef(null);

    const countDimension = () => {
        let data = [];
        let dimension = refCarousel.current?.scrollWidth / props.children.length - 0.3;
        for (let i = 0; i < props.children.length; i++) {
            data.push(dimension * i);
        }

        return data;
    }

    const position = (position) => {
        refCarousel.current.scrollLeft = countDimension()[position];
    }

    const onScroll = (e) => {
        clearTimeout(timeOut.current);

        timeOut.current = setTimeout(() => {
            const positionIndex = findClosestValueIndex(countDimension(), refCarousel.current.scrollLeft);
            position(positionIndex);
        }, 300);
    }

    const findClosestValueIndex = (arr, target) => {
        let closestIndex = 0;
        let closestDifference = Math.abs(target - arr[0]);

        for (let i = 1; i < arr.length; i++) {
            const difference = Math.abs(target - arr[i]);

            if (difference < closestDifference) {
                closestIndex = i;
                closestDifference = difference;
            }
        }

        return closestIndex;
    }

    const main = () => {
        let position_index = 0;
        position(position_index);
        setInterval(() => {
            position_index = position_index >= (props.children.length - 1) ? 0 : position_index + 1;
            position(position_index)
        }, 6000);
    }

    useEffect(() => {
        main();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex gap-3 overflow-x-auto scrollbar-hidden px-2 scroll-smooth" ref={refCarousel} onScroll={(e) => onScroll(e)}>
            {props.children}
        </div>
    );
}

export default SimpleCarousel;