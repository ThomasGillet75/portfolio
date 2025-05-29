import type {EDirection} from "../../../../utils/enum/EDirection.ts";

export interface IArrowButton {
    color?: string;
    side: EDirection;
    onClick: (side: EDirection) => void;
}