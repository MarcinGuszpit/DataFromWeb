import React from 'react';


export const ComboBoxItem = ({id,value,action}) => {

    const onClickHandler = () => {
        if (action) {
            action(id);
        }
    }

    return (
        <li className="list-element" onClick={onClickHandler}>{value}</li>
    )
}

