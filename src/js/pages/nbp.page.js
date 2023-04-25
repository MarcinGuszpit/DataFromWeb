import React, {useContext, useState} from "react";
import {RadioGroupComponent} from "../components/RadioGroup/RadioGroup.component";
import {rateTables} from "../constants/constants";
import {DatePickerComponent} from "../components/DatePicker/DatePicker.component";
import './page.styles.scss';
import {findInTable, getElementClass} from "../utils/Other.utils";
import {AppContext} from "../context/App.context";


export const dateSelectionTable = [
    {id: 'today', desc: 'Dzisiaj'},
    {id: 'date', desc: 'Wybierz określoną datę'},
];

export const NBPPage = () => {
    const appContext = useContext(AppContext);
    const [selectedTable, setSelected] = useState(null);
    const [dateType, setDateType] = useState(null);
    const [date, setDate] = useState(new Date());
    const [disabled, setDisabled] = useState(true);


    const changeSelectedTable = (elemId) => {
        const elem = findInTable(elemId, rateTables);
        setSelected(elem);
    }

    const clearAllData = () => {
        setSelected(null);
        setDate(new Date());
        setDateType(null);
        setDisabled(true);
    }

    const changeDateType = (elemId) => {
        const elem = findInTable(elemId, dateSelectionTable);
        switch (elemId) {
            case 'today': {
                setDisabled(true);
                break;
            }
            case 'date': {
                setDisabled(false);
                break;
            }
        }
        setDateType(elem);
    }

    const changeDateHandler = (value) => {
        setDate(value);
    }

    const setPrintProperties = () => {
        appContext.setPrintOutProps({
            printOutName: 'Dane z tabeli kursów NBP',
            printType: 'NBP',
            params: {
                selectedTable: selectedTable,
                dateType: dateType,
                date: date
            }
        })
    }

    return (
        <React.Fragment>
            <div className={'npb-page-wrapper'}>
                <h2 className={"subpage-title"}>Wybór kursów średnich NBP</h2>
                <RadioGroupComponent selected={selectedTable} title={"Wybór tabeli kursów"} valuesTable={rateTables}
                                     actionHandler={changeSelectedTable} groupName={'tabele_kursow'}/>
                <RadioGroupComponent title={"Wybór dnia"} valuesTable={dateSelectionTable} selected={dateType}
                                     actionHandler={changeDateType} groupName={'wybor_dnia'}/>
                <div className={getElementClass(disabled, 'component-wrapper', 'disabled')}>
                    <h3 className={"form-label"}>Wybierz datę.</h3>
                    <div className={"wrap-container"}><DatePickerComponent value={date}
                                                                           changeValue={changeDateHandler}/></div>
                </div>
                <div className={"buttons-wrapper"}>
                    <button className={"btn btn-alert"} onClick={clearAllData}>Wyczyść</button>
                    <button
                        className={getElementClass(!enableButton(selectedTable, dateType, date), "btn btn-ok", "disabled")}
                        onClick={setPrintProperties}
                    >Pobierz
                        dane
                    </button>
                </div>
            </div>
        </React.Fragment>)
}

const enableButton = (rate, dateType, date) => {
    if (rate === null || dateType === null) {
        return false;
    } else {
        if (dateType.id === 'today') {
            return true;
        }
        if (dateType.id === 'date') {
            return date instanceof Date;
        }
    }
    return false;
}