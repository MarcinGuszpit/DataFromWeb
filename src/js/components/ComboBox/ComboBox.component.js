import React, {useState} from "react";
import {countries, rateTables} from "../../constants/constants";
import {ComboBoxItem} from "./ComboBoxItem.component";
import './ComboBox.component.scss';
import {getElementClass} from "../../utils/Other.utils";

export const ComboBoxComponent = ({selected, elements, actionChange}) => {
    const [showList, setShowList] = useState(false);

    const changeElement = (value) => {
        toggleList();
        actionChange(value);
    }

    const toggleList = () => {
        setShowList(!showList);
    }

    const getValue = () => {
        if (selected && selected.desc) {
            return selected.desc;
        }
        return '';
    }

    return (
        <React.Fragment>
            <div className="combobox">
                <div className="inputs">
                    <div className="input-field">{getValue()}</div>
                    <button className="input-btn" onClick={toggleList}><span>&#x25bc;</span></button>
                </div>
                <ul className={getElementClass(showList, 'list-of-elements', 'show')}>
                    {elements.map((elem, index) =>
                        <ComboBoxItem key={index} id={elem.id} value={elem.desc} action={changeElement}/>
                    )}
                </ul>

            </div>
        </React.Fragment>
    )
}