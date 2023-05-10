import React, {useContext} from "react";
import {AppContext} from "../context/App.context";
import {MFPrintout} from "../components/printouts/MF.printout";
import {Link} from "react-router-dom";
export const PrintPage = () => {
    const appContext = useContext(AppContext);
    console.log(appContext.data);
    console.log(appContext.printOutName);
    return (
        <React.Fragment>
            <div className={"mf-page-wrapper"}>
                <h2 className={"subpage-title"}>Drukowanie</h2>
                {appContext.printOutName &&<div>{appContext.printOutName}</div>}
                <MFPrintout data={appContext.data}></MFPrintout>

                <Link to={'/'}>Powrót do strony głównej</Link>

            </div>

        </React.Fragment>
    )
}