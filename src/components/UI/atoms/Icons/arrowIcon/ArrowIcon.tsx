import type IArrowIcon from "./IArrowIcon.ts";
import {EDirection} from "../../../../../utils/enum/EDirection.ts";

function ArrowIcon(arrowIconProps: IArrowIcon ) {

    const getRotation = () => {
        console.log(arrowIconProps.color);

        switch (arrowIconProps.side) {
            case EDirection.UP:
                return 'rotate(-90deg)';
            case EDirection.DOWN:
                return 'rotate(90deg)';
            case EDirection.RIGHT:
                return 'rotate(180deg)';
            case EDirection.LEFT:
                return 'rotate(0deg)';
            default:
                return 'rotate(0deg)';
        }
    };

    const svgStyle = {
        transform: getRotation(),
        transition: 'transform 0.2s ease-in-out',
    };

    const color = arrowIconProps.color || 'currentColor';

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="48px"
             viewBox="0 -960 960 960" width="48px" fill={color}
             style={svgStyle}>
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
        </svg>
    );
}

export default ArrowIcon;