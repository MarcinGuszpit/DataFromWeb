import React, {useContext, useEffect} from "react";
import {AppContext} from "../context/App.context";
import {MFPrintout} from "../components/printouts/MF.printout";
import {Link} from "react-router-dom";
import {NBPPrintout} from "../components/printouts/NBP.printout";

export const PrintPage = () => {
    const appContext = useContext(AppContext);

    useEffect(() => {
        appContext.isDataLoaded(false);
    }, []);

    return (
        <React.Fragment>
                {appContext.data && <div className={"print-page-wrapper"}>
                    <h2 className={"subpage-title"}>Drukowanie</h2>
                    {appContext.printOutName && <h3 className={"print-title"}>{appContext.printOutName}</h3>}
                    {getPrintout(appContext)}
                    <div className={"buttons-wrapper"}>
                        <button className={"btn btn-alert"} onClick={() => {
                            appContext.clearAll()
                        }}>Wyczyść dane
                        </button>
                        <button className={"btn btn-ok"} onClick={()=>{window.print()}}>Wydrukuj</button>
                        <Link to={'/'} className={"btn btn-ok"}>Powrót do strony głównej</Link>
                    </div>
                </div>}


                {!appContext.data && <div className={"error-page"}>
                    <div className={"icon-wrapper"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                             className="bi bi-exclamation-octagon-fill" viewBox="0 0 16 16">
                            <path
                                d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </div>
                    <div className={"error-content"}>
                        <h3 className={"error-title"}>Brak danych do drukowania</h3>
                        <p className={"error-description"}>Nie pobrano odpowiednich danych do drukowania!</p>
                        <Link to={"/"} className={'error-link'}>Powrót do strony głównej</Link>
                    </div>
                </div>}

        </React.Fragment>
    )
}

const getPrintout = (appContext) => {
    if (appContext.printOutProps && appContext.printOutProps.type) {
        switch (appContext.printOutProps.type) {
            case 'MF': {
                return <MFPrintout data={appContext.data}></MFPrintout>
            }
            case 'NBP': {
                return <NBPPrintout data={appContext.data}></NBPPrintout>
            }
        }
    }
}