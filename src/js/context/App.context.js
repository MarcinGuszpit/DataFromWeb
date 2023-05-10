import React, {useState} from "react";
import {getDateString} from "../utils/DateManipulation.utils";

export const AppContext = React.createContext({
    printOutName: '',
    printOutProps: {},
    data: [],
    setPrintOutProps: () => {
    }
})

export const AppContextProvider = ({children}) => {

    const [printOutName, setPrintOutName] = useState('');
    const [printOutProps, setPrintOutProps] = useState(null);
    const [data, setData] = useState(null);


    const changePrintOutProps = (obj, callback) => {
        console.log('change print options');
        if (obj && obj.printType && obj.params) {
            setPrintOutName(obj.printOutName);
            setPrintOutProps({
                name: obj.printOutName,
                type: obj.printType
            })
            switch (obj.printType) {
                case 'MF': {
                    fetchMFData(obj.params, callback);
                    break;
                }
                case 'NBP': {
                    fetchNBPData(obj.params, callback);
                    break;
                }

            }
        }
    }

    const fetchNBPData = (params, callback) => {

        const {date, dateType, selectedTable} = {...params};

        if ((dateType && dateType.id) && (selectedTable && selectedTable.id)) {
            const table = selectedTable.id;
            let dateString = '';
            if (dateType.id === 'date') {
                dateString = '/' + getDateString(date, '-');
            }

            fetch(`http://api.nbp.pl/api/exchangerates/tables/${table}${dateString}/?format=json`)
                .then(response => response.json())
                .then((data) => {
                    if (data && data.length > 0) {
                        setData(data[0]);
                        callback();
                    }
                }).catch(() => {
                setData(null);
            });
        }
    }

    const fetchMFData = (params, callback) => {
        const {date, selection, txt} = {...params};

        let urlFragment = '';
        if (selection && selection.id) {
            switch (selection.id) {
                case 'nip': {
                    urlFragment = 'nip/';
                    break;
                }
                case 'regon': {
                    urlFragment = 'regon/'
                    break;
                }

                case 'account': {
                    urlFragment = 'bank-account/'
                    break;
                }
            }
        }

        if (txt && txt.length > 0) {
            urlFragment = urlFragment + txt;
        }

        fetch(`https://wl-api.mf.gov.pl/api/search/${urlFragment}/?date=${getDateString(date, '-')}`)
            .then(response => response.json())
            .then((data) => {
                if (data && data.result && data.result.subject) {
                    setData(data.result.subject);
                    callback();
                }
            }).catch(() => {
            setData(null);
        });

    }

    const fetchVATVIESData = (params) => {
        console.log(params);
        // let xmls = `
        //     <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
        //       <soapenv:Header/>
        //       <soapenv:Body>
        //       <tns1:checkVat xmlns:tns1="urn:ec.europa.eu:taxud:vies:services:checkVat">
        //         <tns1:countryCode>${params.country.id}</tns1:countryCode>
        //         <tns1:vatNumber>${params.txt}</tns1:vatNumber>
        //       </tns1:checkVat>
        //       </soapenv:Body>
        //     </soapenv:Envelope>`;
        //
        // console.log(xmls);
        //
        // fetch(`http://ec.europa.eu/taxation_customs/vies/services/checkVatService`).then((response) => {
        //     console.log(response);
        // }).catch(err => console.log(err));


        // fetch(`https://ec.europa.eu/taxation_customs/vies/rest-api/ms/${params.country.id}/vat/${params.txt}`,{
        //     mode: "no-cors",
        // }).then(response => response.json()).then((data)=>{
        //     console.log(data);
        // });

    }


    return (
        <AppContext.Provider value={{
            printOutName: printOutName,
            printOutProps: printOutProps,
            data: data,
            setPrintOutProps: changePrintOutProps,
        }}>
            {children}
        </AppContext.Provider>
    )
}