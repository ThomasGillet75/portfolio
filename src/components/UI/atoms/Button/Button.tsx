import "./button.style.css"
import type {IButton} from "./IButton.ts";

function Button(buttonProps: IButton) {

    return (
        <button className="button center" onClick={buttonProps.onClick}>
            {buttonProps.children}
        </button>
    );
}

export default Button;