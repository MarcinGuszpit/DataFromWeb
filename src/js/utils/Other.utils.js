export const getElementClass = (check, className, classAdditionalText) => {
    if (check) {
        return `${className} ${classAdditionalText}`;
    }
    return className;
}