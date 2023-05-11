import React from "react";

export const MFPrintout = ({data}) => {
    return (
        <React.Fragment>
            {data &&
                <div className={"printout-results"}>
                    <label>Zarejestrowana nazwa:</label>
                    <div>{data.name}</div>
                    <label>Status podmiotu:</label>
                    <div>{data.statusVat}</div>
                    <label>Numer NIP:</label>
                    <div>{data.nip}</div>
                    <label>Numer regon:</label>
                    <div>{data.regon}</div>
                    <label>Miejsce prowadzenia działalności:</label>
                    <div>{data.residenceAddress}</div>
                    <label>Numery zarejestrowanych kont bankowych:</label>
                    {data.accountNumbers.map((elem, index) => <div key={index}>{elem}</div>)}
                </div>}
        </React.Fragment>
    )
}