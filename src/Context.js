import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    
        const initialValue = {
            "name": '',
            "phone": '',
            "email": '',
            'work': '',
            "city": ''
        }
    
        const [details, setDetails] = useState(initialValue)
        const [friendDetails, setFriendDetails] = useState([]) 
  
    return (
        <Context.Provider value={{ details, setDetails, friendDetails, setFriendDetails}}>
            {children}
        </Context.Provider>
    );
};
