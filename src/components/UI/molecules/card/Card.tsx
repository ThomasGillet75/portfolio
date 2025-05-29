import './card.style.css';
import type ICard from "./ICard.ts";

function Card(card: ICard) {

    return(
        <>
            <div className={"card center"}>
                {card.title}
            </div>
        </>
    )
}

export default Card;