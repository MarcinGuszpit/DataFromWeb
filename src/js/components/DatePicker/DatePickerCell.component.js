import {getElementClass} from "../../utils/Other.utils";

export const DatePickerCell = ({isEnabled, action,value, cellClass}) => {
    const onClick = () => {
        if (isEnabled) {
            action(value);
        }
    }
    return (
        <td className={setClass(isEnabled,cellClass)} onClick={onClick}>{value}</td>
    );
};


const setClass = (isEnabled,cellClass) => {
    return getElementClass(isEnabled, cellClass, 'enabled');
}
