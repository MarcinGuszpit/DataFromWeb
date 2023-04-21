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
    }

    const fetchData = () => {
        console.log('fetching data from web');
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