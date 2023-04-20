import React, {useState} from "react";
import {RadioGroupComponent} from "../components/RadioGroup/radioGroup.component";
import {dataSelectionTables} from "../constants/constants";
import {DatePickerComponent} from "../components/DatePicker/DatePicker.component";

export const MfPage = () => {

    const [selection, setSelection] = useState(null);
    const [searchTxt, setSearchTxt] = useState('');
    const [date, setDate] = useState(new Date());

    const changeDateHandler = (value) => {
        setDate(value);
    }

    const changeSelection = (value) => {
        setSelection(value);
    }

    const changeSearchTxt = (event) => {
        setSearchTxt(event.target.value);
    }

    const clearAll = () => {
        setSelection(null);
        setSearchTxt('');
        setDate(new Date());
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

                <div className={'component-wrapper'}>
                    <h3 className={"form-label"}>Dane sprawdzane na dzień.</h3>
                    <div className={"wrap-container"}><DatePickerComponent value={date} changeValue={changeDateHandler}/></div>

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