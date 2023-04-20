import React, {useState} from "react";
import {ComboBoxComponent} from "../components/ComboBox/ComboBox.component";
import {countires} from "../constants/constants";


export const VATVIESPage = () => {
    const [country, setCountry] = useState(null);


    const changeCountry = (value) => {

        console.log(value);
    }

    return (
        <React.Fragment>
            <div className={"vat-vies-page-wrapper"}>
                <h2 className={"subpage-title"}>Sprawdzanie aktualnych danych vat-vies</h2>
                <div className={'component-wrapper'}>
                    <h3 className={"form-label"}>Wybierz kraj pochodzenia.</h3>
                    <div className={'wrap-container'}><ComboBoxComponent elements={countires}
                                                                         actionChange={changeCountry}/></div>
                </div>

                <div className={"input-text-wrapper"}>
                    <label className={"form-label"}>Wpisz numer VAT</label>
                    <input type="text" className={"form-input"}/>
                </div>

                <div className={"buttons-wrapper"}>
                    <button className={"btn btn-alert"}>Wyczyść</button>
                    <button
                        className={"btn btn-ok"}>Pobierz dane
                    </button>
                </div>


            </div>
        </React.Fragment>)
}