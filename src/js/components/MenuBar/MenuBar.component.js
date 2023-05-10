import React from 'react';
import './MenuBar.component.scss'
import {Link} from "react-router-dom";

export const MenuBarComponent = (elements) => {
    return (
        <React.Fragment>
            <div className={"menu-bar"}>
                <div className={"icon-wrapper"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list"
                         viewBox="0 0 16 16">
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
                <ul className={"menu-elements"}>
                    <li><Link to={"/"}>strona główna</Link></li>
                    <li><Link to={"/kursy-nbp"}>tabele kursów NBP</Link></li>
                    <li><Link to={"/VAT-VIES"}>informacja VAT VIES</Link></li>
                    <li><Link to={"/NIP"}>wyszukiwanie danych przedsiębiorstw</Link></li>
                    <li><Link to={"/PrintOut"}>wydruki</Link></li>
                </ul>
            </div>
        </React.Fragment>)
}