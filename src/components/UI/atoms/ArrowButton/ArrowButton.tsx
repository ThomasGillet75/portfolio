import ArrowIcon from "../Icons/arrowIcon/ArrowIcon.tsx";
import "./arrowButton.style.css";
import type {IArrowButton} from "./IArrowButton.ts";

function ArrowButton(props: IArrowButton) {
    const handleButtonClick = () => {
        props.onClick(props.side);
        console.log(props.color);
    };

    return (
        <button
            className="arrow-button center"
            onClick={handleButtonClick}
        >
            <ArrowIcon side={props.side} color={props.color}/>
        </button>
    );
}

export default ArrowButton;