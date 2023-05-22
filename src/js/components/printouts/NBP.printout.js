import React from "react";

export const NBPPrintout = ({data}) => {
    return (
        <React.Fragment>
            {data && <div className={"printout-results"}>
                <label className={"print-label"}>Tabela</label>
                <div className={"print-value"}>{data.table}</div>
                <label className={"print-label"}>Numer i data</label>
                <div className={"print-value"}>{data.no} z dnia {data.effectiveDate}</div>
                <table className={'rates-table'}>
                    <tbody>
                    {data.rates.map((elem, index) => (
                        <tr key={index}>
                            <td>{elem.currency}</td>
                            <td>{elem.code}</td>
                            {elem.mid && <td>{elem.mid}</td>}
                            {elem.bid &&<td>{elem.bid}</td>}
                            {elem.ask &&<td>{elem.ask}</td>}
                        </tr>))}
                    </tbody>
                </table>
            </div>
            }
        </React.Fragment>
    )
}