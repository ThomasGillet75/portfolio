import type {IItemCounter} from "./IItemCounter.ts";
import "./itemCounter.style.css"

function ItemCounter(itemCounterProps: IItemCounter) {

    const showCounter = () => {
        const buttons = [];
        for (let i = 0; i < itemCounterProps.max; i++) {
            if (i === itemCounterProps.index) {
                buttons.push(<button key={i}
                                     className="item-counter-actual"></button>);
                continue;
            }
            buttons.push(<button key={i} className="item-counter" onClick={()=>itemCounterProps.callback(i)}></button>);
        }
        return <>{buttons}</>;
    }

    return (
        <div className="flex-row-center item-counter-container">
            {
                showCounter()
            }
        </div>
    );
}

export default ItemCounter;