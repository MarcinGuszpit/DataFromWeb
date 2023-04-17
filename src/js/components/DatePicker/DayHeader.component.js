import {days, daysShort} from "../../utils/DateManipulation.utils";


export const DayHeader = ({isDaysShort,cellClass}) => {
    return (
        <tr>
            {(getDaysTable(isDaysShort)).map((day, index) =>
                <td key={index} className={cellClass}>{day}</td>
            )}
        </tr>
    );
}

function getDaysTable(isDaysShort) {
    if (isDaysShort) {return daysShort}
    return days;
}

