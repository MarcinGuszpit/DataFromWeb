import React from "react";
import "./RadioGroup.component.scss"

export const RadioGroupComponent = ({selected, title, valuesTable, actionHandler, groupName}) => {

    const onClickHandler = (value) => {
        if (actionHandler) {
            actionHandler(value);
        }
    }

    return (
        <div className={"radio-button-group"}>
            <h4 className={"group-title"}>{title}</h4>
            <div>
                {createRadioGroup(selected, valuesTable, groupName, onClickHandler)}
            </div>
        </div>
    )
}

const createRadioGroup = (selected, values, groupName, func) => {
    let group = [];
    group = values.map((value, index) => {
        return (
            <label htmlFor={'rb_' + groupName + "_" + value.id} className={"radio-label"} key={index}>
                <input type={"radio"} id={'rb_' + groupName + "_" + value.id} onClick={() => {
                    func(value.id)
                }} value={value.id} name={groupName} className={"radio-button"}
                       checked={elementFound(selected, value)} readOnly/>
                <div className={"radio-wrapper"}>
                    <span className={"fake-checkmark"}></span>
                </div>
                <span className={"label-title"}>{value.desc}</span>
            </label>)
    })
    return group;
}

const elementFound = (selected, current) => {
    if (selected && selected.id) {
        return selected.id === current.id;
    }
    return false;
}