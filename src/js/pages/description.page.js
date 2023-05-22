import React from 'react';
import {Link} from "react-router-dom";

export const DescriptionPage = () => {
    return (<React.Fragment>

        <div className={"page-info"}>

            <div className={"info-card"}>
                <div className={"title-wrapper"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="info-icon" viewBox="0 0 16 16">
                        <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                    </svg>
                    <h2 className={"info-title"}>Dane ministerstwa finansów</h2>
                </div>

                <p className={"info-description"}>Na tej podstronie możesz pobrać dane przedsiębiorstw, dostępnych w
                    publicznym API
                    Ministerstwa Finansów. Możesz wyszukać dane wybranego przedsiębiorstwa jeśli znasz
                    NIP, REGON lub numer konta bankowego.
                    <Link to={'/NIP'} className={"info-link"}>Kliknij aby przejść do podstrony</Link>
                </p>
            </div>

            <div className={"info-card"}>
                <div className={"title-wrapper"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="info-icon" viewBox="0 0 16 16">
                        <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                    </svg>
                    <h2 className={"info-title"}>Tabele kursów</h2>
                </div>

                <p className={"info-description"}>
                    Umożliwia pobranie tablic kursów walut NBP, z wybranego dnia
                    <Link to={'/kursy-nbp'} className={"info-link"}>Kliknij aby przejść do podstrony</Link>
                </p>
            </div>

        </div>

    </React.Fragment>)
}