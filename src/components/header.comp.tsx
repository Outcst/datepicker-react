import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const PageHeaderComp: FC = () => {
    return (
        <header>
            Sandays Calculations
            <ul>
                <li><NavLink to="/sundays">Sundays</NavLink></li>
                <li><NavLink to="/sundays/updated">Updated sundays</NavLink></li>
            </ul>
        </header>
    );
};

export default PageHeaderComp;