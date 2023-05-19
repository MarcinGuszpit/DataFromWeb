import React from "react";

export const MFPrintout = ({data}) => {
    return (
        <React.Fragment>
            {data &&
                <div className={"printout-results"}>
                    <label className={"print-label"}>Zarejestrowana nazwa:</label>
                    <div className={"print-value"}>{data.name}</div>
                    <label className={"print-label"}>Status podmiotu:</label>
                    <div className={"print-value"}>{data.statusVat}</div>
                    <label className={"print-label"}>Numer NIP:</label>
                    <div className={"print-value"}>{data.nip}</div>
                    <label className={"print-label"}>Numer regon:</label>
                    <div className={"print-value"}>{data.regon}</div>
                    <label className={"print-label"}>Miejsce prowadzenia działalności:</label>
                    <div className={"print-value"}>{data.residenceAddress}</div>
                    <label className={"print-label"}>Numery zarejestrowanych kont bankowych:</label>
                    {(data.accountNumbers).map((elem, index) => <div key={index} className={'account-value'}>{elem}</div>)}
                </div>}
        </React.Fragment>
    )
}