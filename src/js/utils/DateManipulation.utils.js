export const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
export const days = ['Niedziela', 'Poniedziałek', ' Wtorek', ' Środa', 'Czwartek', 'Piątek', ' Sobota'];
export const daysShort = ['Nie', 'Pon', ' Wto', 'Śro', ' Czw', 'Pią', ' Sob'];

export const getMonthNames = (monthsTable, index) => {
    return monthsTable[index];
}

export const lastDayOfPreviousMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}


export const firstDayWeekOfMonth = (date) => {
    const dateTemp = new Date(date.getTime());
    dateTemp.setDate(1);
    return dateTemp.getDay();
}

export const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export const createDaysOfMonthArray = (date) => {
    const firstDay = firstDayWeekOfMonth(date);
    const daysInPrevious = lastDayOfPreviousMonth(date);
    const daysCount = daysInMonth(date);
    const maxValue = 6 * 7;
    let values = [];
    for (let i = 0; i < maxValue; i++) {
        if (i < firstDay) {
            values.push({
                day: daysInPrevious - firstDay + i + 1,
                enabled: false
            });
        }
        if (i >= firstDay && i < (daysCount + firstDay)) {
            values.push({
                day: i - firstDay + 1,
                enabled: true
            });
        }
        if (i >= (daysCount + firstDay)) {
            values.push({
                day: i - (daysCount + firstDay) + 1,
                enabled: false
            });
        }
    }
    return values;
}

export const isValidDate = (dateAsString) => {
    return (dateAsString && !Number.isNaN(Date.parse(dateAsString)));
}

export function getDateString(date, separator) {
    if (date instanceof Date) {
        const year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);
        const month = new Intl.DateTimeFormat('en', {month: '2-digit'}).format(date);
        const day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);
        return `${year}${separator}${month}${separator}${day}`;
    }
}
