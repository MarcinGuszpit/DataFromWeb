import {useState} from "react";
import './DatePicker.component.scss';
import {createDaysOfMonthArray, getMonthNames, isValidDate, months} from "../../utils/DateManipulation.utils";
import {DayHeader} from "./DayHeader.component";
import {DatePickerCell} from "./DatePickerCell.component";
import {getElementClass} from "../../utils/Other.utils";

export const DatePickerComponent = ({value, changeValue, fieldStates, labelName, propertyName}) => {
    const [dateInput, setDateInput] = useState(value.toLocaleDateString());
    const [showCalendar, setShowCalendar] = useState(false);

    const changeDateStr = (event) => {
        const val = event.target.value;
        if (isValidDate(val)) {
            changeValue(new Date(val));
        }
        setDateInput(event.target.value);
    }

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    }

    const changeMonth = (event) => {

        let month = value.getMonth();
        const operation = event.target.getAttribute('data-operation');
        if (operation === 'down') {
            month = month - 1;
        } else {
            month = month + 1;
        }
        const year = value.getFullYear();
        const tempDate = new Date(year, month, 1);
        changeValue(tempDate);
        setDateInput(tempDate.toLocaleDateString());
    }

    const changeDay = (day) => {
        const tempDate = new Date(value.toString());
        tempDate.setDate(day);
        changeValue(tempDate);
        setDateInput(tempDate.toLocaleDateString());
    }

    return (
        <div className="datepicker">
            <div className="inputs">
                <input type="text" className="input-field" value={dateInput} onChange={changeDateStr}/>
                <button className="input-btn" onClick={toggleCalendar}><span>&#128198;</span></button>
            </div>
            <div className={getElementClass(showCalendar, 'picker', 'show')}>
                <div className="month-selection">
                    <button className="prev-btn" onClick={changeMonth} data-operation={'down'}>
                        <span>&#9664;</span></button>
                    <span className="month-display">
                        {`${value.getFullYear()} - ${getMonthNames(months, value.getMonth())}`}
                    </span>
                    <button className="next-btn" onClick={changeMonth} data-operation={'up'}>
                        <span>&#9658;</span></button>
                </div>
                <table className="days-table">
                    <thead className="days-header">
                    <DayHeader cellClass={'cell-header'} isDaysShort={true}/>
                    </thead>
                    <tbody className="days-body">
                    {createTableRows(6, 7, createDaysOfMonthArray(value), changeDay)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


const createTableRows = (maxHeight, maxWidth, daysTable, action) => {
    let rows = [];
    if (daysTable.length > 0) {
        for (let i = 0; i < maxHeight; i++) {
            rows.push(<tr key={i}>{createTableCells(i, maxWidth, daysTable, action)}</tr>)
        }
    }
    return rows;
}

const createTableCells = (row, maxWidth, daysTable, action) => {
    let cells = [];
    for (let i = 0; i < maxWidth; i++) {
        const id = row * maxWidth + i;
        const val = daysTable[id];
        cells.push(<DatePickerCell key={id} value={val.day} cellClass={'cell-day'} isEnabled={val.enabled}
                                   action={action}/>);
    }
    return cells;
}
