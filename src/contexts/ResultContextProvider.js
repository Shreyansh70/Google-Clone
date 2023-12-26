import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext();
const baseURL = 'https://google-api31.p.rapidapi.com'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
              }
        });

        const data = await response.json();
        console.log(data);
        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value = {{results , searchTerm, isLoading , getResults , setSearchTerm}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);