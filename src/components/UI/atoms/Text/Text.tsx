import './text.style.css';
import type IText from "./IText.ts";

function Text(text : IText) {
    return (<div className={"text-container center"}><span className="text">{text.text}</span></div>);
}

export default Text;