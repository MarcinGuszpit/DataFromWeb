import React, {useState} from "react";

export const AppContext = React.createContext({
    printOutName: '',
    printOutProps: {},
    data: [],
    setPrintOutProps: () => {
    },
    getData: () => {
    }
})

export const AppContextProvider = ({children}) => {
    const [printOutName, setPrintOutName] = useState('');
    const [printOutProps, setPrintOutProps] = useState(null);
    const [data, setData] = useState([]);

    const changePrintOutProps = (obj) => {
        console.log(obj);
        fetchVATVIESData(obj.params);
    }

    const fetchData = () => {
        console.log('fetching data from web');
    }

    const fetchNBPData = (params) => {

    }

    const fetchMFData = (params) => {

    }

    const fetchVATVIESData = (params) => {
        console.log(params);
        let xmls = `
            <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
              <soapenv:Header/>
              <soapenv:Body>
              <tns1:checkVatApprox xmlns:tns1="urn:ec.europa.eu:taxud:vies:services:checkVat:types">
                <tns1:countryCode>${params.country.id}</tns1:countryCode>
                <tns1:vatNumber>${params.txt}</tns1:vatNumber>
              </tns1:checkVatApprox>
              </soapenv:Body>
            </soapenv:Envelope>`;

        // const response = await axios.post(
        //     "http://ec.europa.eu/taxation_customs/vies/services/checkVatService",
        //     xmls,
        //     { headers: { "Content-Type": "text/xml" } }
        // );

        fetch(`http://ec.europa.eu/taxation_customs/vies/checkVatTestService.wsdl`, {
            method: "POST",
            // mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            }, body: xmls
        }).then((response) => {
            console.log(response);
        })


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
            getData: fetchData
        }}>
            {children}
        </AppContext.Provider>
    )
}