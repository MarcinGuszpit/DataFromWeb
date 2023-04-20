import React, {useState} from "react";
import {countires, rateTables} from "../../constants/constants";
import {ComboBoxItem} from "./ComboBoxItem.component";
import './ComboBox.component.scss';
import {getElementClass} from "../../utils/Other.utils";

export const ComboBoxComponent = () => {

    const [country, setCountry] = useState({});
    const [showList, setShowList] = useState(false);

    const changeCountry = (value) => {
        const elem = countires.find((elem) => {
            return elem.id === value;
        })
        if (elem) {
            toggleList();
            setCountry(elem);
        }
    }

    const toggleList = () => {
        setShowList(!showList);
    }

    const getValue = () => {
        if (country && country.desc) {
            return country.desc;
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
                    {countires.map((elem, index) =>
                        <ComboBoxItem key={index} id={elem.id} value={elem.desc} action={changeCountry}/>
                    )}
                </ul>

            </div>
        </React.Fragment>
    )
}