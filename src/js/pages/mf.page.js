import React, {useState} from "react";
import {RadioGroupComponent} from "../components/RadioGroup/radioGroup.component";
import {dataSelectionTables, rateTables} from "../constants/constants";
import {getElementClass} from "../utils/Other.utils";

export const MfPage = () => {

    const [selection, setSelection] = useState(null);
    const [searchTxt, setSearchTxt] = useState('');

    const changeSelection = () => {}

    const changeSearchTxt = (event) => {
        setSearchTxt(event.target.value);
    }


    return (
        <React.Fragment>
            <div className={"mf-page-wrapper"}>
                <h2 className={"subpage-title"}>Dane przedsiębiorstw z min. finansów.</h2>
                <RadioGroupComponent title={"Wybór pola wyszukiwania"} valuesTable={dataSelectionTables}
                                     actionHandler={changeSelection} groupName={'pole_wyszukiwania'}/>
                <div className={"input-text-wrapper"}>
                    <label className={"form-label"}>Wpisz szukaną wartość</label>
                    <input type="text" value={searchTxt} onChange={changeSearchTxt} className={"form-input"}/>
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