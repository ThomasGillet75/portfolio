import './layout.style.css';
import Slider from "../../molecules/Slider/Slider.tsx";
import { Link } from 'react-router-dom';

function layout() {
    return (
        <div className="layout">
            <Slider color={['#329480', '#327294']}>
                <Link to="/Placeholder">Placeholder</Link>
                <Link to="/Placeholder">Placeholder</Link>
            </Slider>
        </div>
    )
}

export default layout;