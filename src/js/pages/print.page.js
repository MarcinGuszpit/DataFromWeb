import React, {useContext} from "react";
import {AppContext} from "../context/App.context";
import {MFPrintout} from "../components/printouts/MF.printout";
import {Link} from "react-router-dom";
import {NBPPrintout} from "../components/printouts/NBP.printout";
export const PrintPage = () => {
    const appContext = useContext(AppContext);
    console.log(appContext.data);
    console.log(appContext.printOutName);
    return (
        <React.Fragment>
            <div className={"mf-page-wrapper"}>
                <h2 className={"subpage-title"}>Drukowanie</h2>
                {appContext.printOutName &&<div>{appContext.printOutName}</div>}
                <NBPPrintout data={appContext.data}></NBPPrintout>

                <Link to={'/'}>Powrót do strony głównej</Link>

            </div>

        </React.Fragment>
    )
}