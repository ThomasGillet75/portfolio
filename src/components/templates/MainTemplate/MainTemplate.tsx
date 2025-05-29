import Header from "../../UI/organisms/header/Header.tsx";
import * as React from "react";
import './MainTemplate.style.css';

function MainTemplate({children}: {children: React.ReactNode}) {
    return (
        <div className="main-template">
            <Header/>
            {children}
        </div>
    );
}

export default MainTemplate;