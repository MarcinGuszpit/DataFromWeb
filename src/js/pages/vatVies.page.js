import React, {useContext, useState} from "react";
import {ComboBoxComponent} from "../components/ComboBox/ComboBox.component";
import {countries} from "../constants/constants";
import {findInTable, getElementClass} from "../utils/Other.utils";
import {AppContext} from "../context/App.context";
import {useNavigate} from "react-router-dom";


export const VATVIESPage = () => {
    const appContext = useContext(AppContext);
    const [country, setCountry] = useState(null);
    const [searchTxt, setSearchTxt] = useState('');
    const navigate = useNavigate();

    const callbackOk = () => {
        navigate('/PrintOut');
    }

    const changeCountry = (elemId) => {
        const elem = findInTable(elemId, countries);
        setCountry(elem);
    }

    const changeSearchTxt = (event) => {
        setSearchTxt(event.target.value);
    }

    const clearAll = () => {
        setCountry(null);
        setSearchTxt('');
    }

    const setPrintProperties = () => {
        appContext.setPrintOutProps({
            printOutName: 'Sprawdzanie danych firm z sytemu VAT-VIES',
            printType: 'VATVIES',
            params: {
                country: country,
                txt: searchTxt,
                date: new Date()
            }
        }, callbackOk);
    }

    return (
        <React.Fragment>
            <div className={"vat-vies-page-wrapper"}>
                <h2 className={"subpage-title"}>Sprawdzanie aktualnych danych VAT VIES</h2>
                <div className={'component-wrapper'}>
                    <h3 className={"form-label"}>Wybierz kraj pochodzenia.</h3>
                    <div className={'wrap-container'}><ComboBoxComponent selected={country} elements={countries}
                                                                         actionChange={changeCountry}/></div>
                </div>

                <div className={"input-text-wrapper"}>
                    <label className={"form-label"}>Wpisz numer VAT</label>
                    <input type="text" className={"form-input"} value={searchTxt} onChange={changeSearchTxt}/>
                </div>

                <div className={"buttons-wrapper"}>
                    <button className={"btn btn-alert"} onClick={clearAll}>Wyczyść</button>
                    <button
                        className={getElementClass(!enableButton(country, searchTxt), "btn btn-ok", "disabled")}
                        onClick={setPrintProperties}>Pobierz dane
                    </button>
                </div>


            </div>
        </React.Fragment>)
}

const enableButton = (country, searchTxt) => {
    return (country && country.id && country.desc && searchTxt && searchTxt.length > 0)
}