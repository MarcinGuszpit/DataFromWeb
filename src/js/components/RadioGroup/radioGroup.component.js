import React, {useState} from "react";
import "./radioGroup.component.scss"

const testValues = [
    {id: 'a', desc: 'tabela kursów A'},
    {id: 'b', desc: 'tabela kursów B'},
    {id: 'c', desc: 'tabela kursów C'}
]
export const RadioGroupComponent = () => {
    const [selected, setSelected] = useState(testValues[0]);
    const onClickHandler = (value) => {
        console.log(value);
    }
    return (
        <div className={"radio-button-group"}>
            {createRadioGroup(testValues, 'tabele_kursow', onClickHandler)}
        </div>
    )
}

const createRadioGroup = (values, groupName, func) => {
    let group = [];
    group = values.map((value, index) => {
        return (
            <div className={"button-wrapper"}>
                <input type={"radio"} key={index} id={'rb_' + groupName + "_" + value.id} onClick={() => {
                    func(value.id)
                }} value={value.id} name={groupName} className={"radio-button"}/>
                <label htmlFor={'rb_' + groupName + "_" + value.id} className={"radio-label"}>{value.desc}</label>
            </div>)
    })
    return group;

}