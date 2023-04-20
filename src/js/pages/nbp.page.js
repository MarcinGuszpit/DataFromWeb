import React, {useState} from "react";
import {RadioGroupComponent} from "../components/RadioGroup/radioGroup.component";
import {rateTables} from "../constants/constants";
import {DatePickerComponent} from "../components/DatePicker/DatePicker.component";
import './page.styles.scss';
import {getElementClass} from "../utils/Other.utils";
import {isValidDate} from "../utils/DateManipulation.utils";

export const dateSelectionTable = [
    {id: 'today', desc: 'Dzisiaj'},
    {id: 'date', desc: 'Wybierz określoną datę'},
];

export const NBPPage = () => {
    const [selectedTable, setSelected] = useState(null);
    const [date, setDate] = useState(new Date());
    const [dateType, setDateType] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const changeSelectedTable = (value) => {
        const elem = rateTables.find((elem) => {
            return elem.id === value;
        })
        setSelected(elem);
    }

    const clearAllData = () => {
        setSelected(null);
        setDate(new Date());
        setDateType(null);
        setDisabled(true);
    }

    const changeDateType = (value) => {
        setDateType(value);
        switch (value) {
            case 'today': {
                setDisabled(true);
                break;
            }
            case 'date': {
                setDisabled(false);
                break;
            }
        }
    }

    const changeDateHandler = (value) => {
        setDate(value);
    }

    return (
        <React.Fragment>
            <div className={'npb-page-wrapper'}>
                <h2 className={"subpage-title"}>Wybór kursów średnich NBP</h2>
                <RadioGroupComponent title={"Wybór tabeli kursów"} valuesTable={rateTables}
                                     actionHandler={changeSelectedTable} groupName={'tabele_kursow'}/>
                <RadioGroupComponent title={"Wybór dnia"} valuesTable={dateSelectionTable}
                                     actionHandler={changeDateType} groupName={'wybor_dnia'}/>
                <div className={getElementClass(disabled, 'component-wrapper', 'disabled')}>
                    <h3 className={"form-label"}>Wybierz datę.</h3>
                    <div className={"wrap-container"}><DatePickerComponent value={date} changeValue={changeDateHandler}/></div>

                </div>
                <div className={"buttons-wrapper"}>
                    <button className={"btn btn-alert"} onClick={clearAllData}>Wyczyść</button>
                    <button
                        className={getElementClass(!enableButton(selectedTable, dateType, date), "btn btn-ok", "disabled")}>Pobierz
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
        if (dateType === 'today') {
            return true;
        }
        if (dateType === 'date') {
            return isValidDate(date.toString());
        }
    }
    return false;
}