import React, {useState, useContext} from "react";
import {RadioGroupComponent} from "../components/RadioGroup/RadioGroup.component";
import {dataSelectionTables} from "../constants/constants";
import {DatePickerComponent} from "../components/DatePicker/DatePicker.component";
import {findInTable, getElementClass} from "../utils/Other.utils";
import {AppContext} from "../context/App.context";

export const MfPage = () => {

    const appContext = useContext(AppContext);

    const [selection, setSelection] = useState(null);
    const [searchTxt, setSearchTxt] = useState('');
    const [date, setDate] = useState(new Date());

    const changeDateHandler = (value) => {
        setDate(value);
    }

    const changeSelection = (elemId) => {
        const elem = findInTable(elemId, dataSelectionTables);
        setSelection(elem);
    }

    const changeSearchTxt = (event) => {
        setSearchTxt(event.target.value);
    }

    const clearAll = () => {
        setSelection(null);
        setSearchTxt('');
        setDate(new Date());
    }

    const setPrintProperties = () => {
        appContext.setPrintOutProps({
            printOutName: 'Dane przedsiębiorstw z min. finansów',
            printType: 'MF',
            params: {
                selection: selection,
                txt: searchTxt,
                date: date
            }
        })
    }


    return (
        <React.Fragment>
            <div className={"mf-page-wrapper"}>
                <h2 className={"subpage-title"}>Dane przedsiębiorstw z min. finansów.</h2>
                <RadioGroupComponent selected={selection} title={"Wybór pola wyszukiwania"}
                                     valuesTable={dataSelectionTables}
                                     actionHandler={changeSelection} groupName={'pole_wyszukiwania'}/>
                <div className={"input-text-wrapper"}>
                    <label className={"form-label"}>Wpisz szukaną wartość</label>
                    <input type="text" value={searchTxt} onChange={changeSearchTxt} className={"form-input"}/>
                </div>

                <div className={'component-wrapper'}>
                    <h3 className={"form-label"}>Dane sprawdzane na dzień.</h3>
                    <div className={"wrap-container"}>
                        <DatePickerComponent value={date} changeValue={changeDateHandler}/>
                    </div>
                </div>

                <div className={"buttons-wrapper"}>
                    <button className={"btn btn-alert"} onClick={clearAll}>Wyczyść</button>
                    <button
                        className={getElementClass(!enableButton(selection, searchTxt, date), "btn btn-ok", "disabled")}
                        onClick={setPrintProperties}
                    >
                        Pobierz dane
                    </button>
                </div>

            </div>
        </React.Fragment>)
}

const enableButton = (selection, searchTxt, date) => {
    return (selection && selection.id && selection.desc && searchTxt && searchTxt.length > 0 && date instanceof Date)
}