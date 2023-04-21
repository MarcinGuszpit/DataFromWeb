import React, {useContext} from "react";
import {AppContext} from "../context/App.context";
export const PrintPage = () => {
    const appContext = useContext(AppContext);
    return (
        <React.Fragment>
            <h2>Drukowanie</h2>
            {appContext.data && <div>Zawiera jakieś dane</div>}
        </React.Fragment>
    )
}