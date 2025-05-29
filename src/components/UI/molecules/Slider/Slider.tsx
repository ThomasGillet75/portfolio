import "./slider.style.css"
import {EDirection} from "../../../../utils/enum/EDirection.ts";
import ArrowButton from "../../atoms/ArrowButton/ArrowButton.tsx";
import * as React from "react";
import ItemCounter from "../../atoms/ItemCounter/ItemCounter.tsx";
import {useEffect, useState} from "react";
import type {ISlider} from "./ISlider.ts";

function Slider(sliderProps: ISlider) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);

    useEffect(() => {
        const count = React.Children.count(sliderProps.children);
        setMaxIndex(count);
        if (currentIndex >= count && count > 0) {
            setCurrentIndex(count - 1);
        } else if (count === 0) {
            setCurrentIndex(0);
        }
    }, [sliderProps.children, currentIndex]);

    const handleClick = (side: EDirection) => {
        console.log(side);
        if (maxIndex === 0) return;

        if (side === EDirection.LEFT) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + maxIndex) % maxIndex);
        } else if (side === EDirection.RIGHT) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % maxIndex);
        }
    }

    const handleItemCounter = (index: number) => {
        if (index < 0 || index >= maxIndex) return;
        setCurrentIndex(index);
    };

    const childrenArray = React.Children.toArray(sliderProps.children);

    return (
        <div className="slider"
             style={{backgroundColor: sliderProps.color[currentIndex]}}>
            <div className="slider-content">
                <ArrowButton side={EDirection.LEFT} onClick={handleClick} color="white"/>
                {childrenArray.map((child, index) => (
                    <div
                        className="slider-item"
                        key={index}
                        style={{display: index === currentIndex ? 'block' : 'none'}}
                    >
                        {child}
                    </div>
                ))}
                <ArrowButton side={EDirection.RIGHT} onClick={handleClick} color="white"/>
            </div>
            <div className="item-counter-position">
                <ItemCounter index={currentIndex} max={maxIndex}
                             callback={handleItemCounter}/>
            </div>
        </div>
    );
}

export default Slider;