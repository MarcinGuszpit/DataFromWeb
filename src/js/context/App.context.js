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
        fetchVATVIESData(obj.params);
        // if (obj && obj.printType && obj.params) {
        //     setPrintOutName(obj.printOutName);
        //     setPrintOutProps({
        //         name: obj.printOutName,
        //         type: obj.printType
        //     })
        //     switch (obj.printType) {
        //         case 'MF': {
        //             fetchMFData(obj.params, callback);
        //             break;
        //         }
        //         case 'NBP': {
        //             fetchNBPData(obj.params, callback);
        //             break;
        //         }
        //
        //     }
        // }
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

    const fetchVATVIESData = (params, callback) => {
        // const {country, txt} = {...params};
        // let xmls = `
        //     <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns1="urn:ec.europa.eu:taxud:vies:services:checkVat:types">
        //         <soapenv:Header>
        //         </soapenv:Header>
        //         <soapenv:Body>
        //          <tns1:checkVat>
        //             <tns1:countryCode>${country.id}</tns1:countryCode>
        //             <tns1:vatNumber>${txt}</tns1:vatNumber>
        //          </tns1:checkVat>
        //         </soapenv:Body>
        //     </soapenv:Envelope>`;
        //
        //
        // const txtReq = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns1="urn:ec.europa.eu:taxud:vies:services:checkVat:types">\n' +
        //     '    <soapenv:Header>\n' +
        //     '    </soapenv:Header>\n' +
        //     '    <soapenv:Body>\n' +
        //     '        <tns1:checkVat>\n' +
        //     '            <tns1:countryCode>PL</tns1:countryCode>\n' +
        //     '            <tns1:vatNumber>6131001463</tns1:vatNumber>\n' +
        //     '        </tns1:checkVat>\n' +
        //     '    </soapenv:Body>\n' +
        //     '</soapenv:Envelope>';
        //
        // fetch(`http://ec.europa.eu/taxation_customs/vies/services/checkVatService.wsdl`, {
        //     method: "POST", body: txtReq, headers: {
        //         "Host": "83.30.200.10",
        //         "User-Agent": "Mozilla/5.0",
        //         "Connection": "keep-alive",
        //         "Accept-Encoding": "gzip, deflate, br",
        //         "Accept": "*/*",
        //         "Content-Type": "text/xml"
        //     }
        // })
        //     .then(response => response.text()).then((data) => {
        //         console.log(data);
        //     }).catch(err => {
        //         console.log('Error');
        //         console.log(err)
        //     });

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "text/xml");
        //
        // var raw = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n    <soapenv:Header>\r\n    </soapenv:Header>\r\n    <soapenv:Body>\r\n        <tns1:checkVat xmlns:tns1=\"urn:ec.europa.eu:taxud:vies:services:checkVat:types\">\r\n            <tns1:countryCode>PL</tns1:countryCode>\r\n            <tns1:vatNumber>7720100029</tns1:vatNumber>\r\n        </tns1:checkVat>\r\n    </soapenv:Body>\r\n</soapenv:Envelope>";
        //
        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };
        //
        // fetch("http://ec.europa.eu/taxation_customs/vies/services/checkVatService.wsdl", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));


        console.log('something');
        // WARNING: For POST requests, body is set to null by browsers.
        var data = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n    <soapenv:Header>\r\n    </soapenv:Header>\r\n    <soapenv:Body>\r\n        <tns1:checkVat xmlns:tns1=\"urn:ec.europa.eu:taxud:vies:services:checkVat:types\">\r\n            <tns1:countryCode>PL</tns1:countryCode>\r\n            <tns1:vatNumber>7720100029</tns1:vatNumber>\r\n        </tns1:checkVat>\r\n    </soapenv:Body>\r\n</soapenv:Envelope>";

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "http://ec.europa.eu/taxation_customs/vies/services/checkVatService.wsdl");
        xhr.setRequestHeader("Content-Type", "text/xml");

        xhr.send(data);


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