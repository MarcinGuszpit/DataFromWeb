import React, {useState} from "react";
import {ComboBoxComponent} from "../components/ComboBox/ComboBox.component";
import {countires} from "../constants/constants";
import {findInTable} from "../utils/Other.utils";


export const VATVIESPage = () => {
    const [country, setCountry] = useState(null);
    const [searchTxt, setSearchTxt] = useState('');


    const changeCountry = (elemId) => {
        const elem = findInTable(elemId, countires);
        setCountry(elem);
    }

    const changeSearchTxt = (event) => {
        setSearchTxt(event.target.value);
    }

    const clearAll = () => {
        setCountry(null);
        setSearchTxt('');
    }

    return (
        <React.Fragment>
            <div className={"vat-vies-page-wrapper"}>
                <h2 className={"subpage-title"}>Sprawdzanie aktualnych danych VAT VIES</h2>
                <div className={'component-wrapper'}>
                    <h3 className={"form-label"}>Wybierz kraj pochodzenia.</h3>
                    <div className={'wrap-container'}><ComboBoxComponent selected={country} elements={countires}
                                                                         actionChange={changeCountry}/></div>
                </div>

                <div className={"input-text-wrapper"}>
                    <label className={"form-label"}>Wpisz numer VAT</label>
                    <input type="text" className={"form-input"} value={searchTxt} onChange={changeSearchTxt}/>
                </div>

                <div className={"buttons-wrapper"}>
                    <button className={"btn btn-alert"} onClick={clearAll}>Wyczyść</button>
                    <button
                        className={"btn btn-ok"}>Pobierz dane
                    </button>
                </div>


            </div>
        </React.Fragment>)
}