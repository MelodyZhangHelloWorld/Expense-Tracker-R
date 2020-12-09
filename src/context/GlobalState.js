import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


//Initial state

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Bonus', amount: 150 }
    ]
}

//Create context
export const GlobalContext = createContext(initialState);

/* in order for other components to have access to 
this stored global state, there should be a provider
wrapping all children components*/
export const GlobalProvider = ({ children }) => {
    const [state,  dispatch] = useReducer(AppReducer, initialState); //**

    return (<GlobalContext.Provider 
     value={{ transactions: state.transactions}} >    
        {children} </GlobalContext.Provider> )
}