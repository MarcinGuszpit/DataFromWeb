import React, {useState} from "react";
import {RadioGroupComponent} from "../components/RadioGroup/radioGroup.component";
import {rateTables} from "../constants/constants";
import {DatePickerComponent} from "../components/DatePicker/DatePicker.component";
import './page.styles.scss';

export const dateSelectionTable = [
    {id: 'today', desc: 'Dzisiaj'},
    {id: 'data', desc: 'Wybierz określoną datę'},
];

export const NBPPage = () => {
    const [selectedTable, setSelected] = useState(null);
    const [date, setDate] = useState(new Date());

    const changeSelectedTable = (value) => {
        const elem = rateTables.find((elem) => {
            return elem.id === value;
        })
        console.log(elem);
        setSelected(elem);
    }

    const changeDateMethod = (value) => {
        console.log(value);
    }

    const changeDateHandler = (value) => {
        console.log(value);
        setDate(value);
    }

    return (
        <React.Fragment>
            <div className={'npb-page-wrapper'}>
                <h2 className={"page-title"}>Wybór kursów średnich NBP</h2>
                <RadioGroupComponent title={"Wybór tabeli kursów"} valuesTable={rateTables}
                                     actionHandler={changeSelectedTable} groupName={'tabele_kursow'}/>
                <RadioGroupComponent title={"Wybór dnia"} valuesTable={dateSelectionTable}
                                     actionHandler={changeDateMethod} groupName={'wybor_dnia'}/>
                <div className={"date-picker-wrapper"}>
                    <DatePickerComponent value={date} changeValue={changeDateHandler}/>
                </div>
            </div>
        </React.Fragment>)
}