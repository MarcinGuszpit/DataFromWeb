import {rateTables} from "../constants/constants";

export const getElementClass = (check, className, classAdditionalText) => {
    if (check) {
        return `${className} ${classAdditionalText}`;
    }
    return className;
}

export const findInTable = (elemId, table) => {
    return table.find((elem) => {
        return elem.id === elemId;
    })
}