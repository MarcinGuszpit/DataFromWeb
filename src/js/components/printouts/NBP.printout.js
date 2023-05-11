import React from "react";

export const NBPPrintout = ({data}) => {
    return (
        <React.Fragment>
            {data && <div className={"printout-results"}>
                <label>Tabela</label>
                <div>{data.table}</div>
                <label>Numer i data</label>
                <div>{data.no} z dnia {data.effectiveDate}</div>
                <table>
                    {data.rates.map((elem, index) => (
                        <tr key={index}>
                            <td>{elem.currency}</td>
                            <td>{elem.code}</td>
                            <td>{elem.mid}</td>
                            <td>{elem.bid}</td>
                            <td>{elem.ask}</td>
                        </tr>))}
                </table>
            </div>
            }
            <span>Dane z NBP</span>
        </React.Fragment>
    )
}