import React, { createContext, useContext, useState } from 'react';

// Create a context box
const UserContext = createContext();

// Context: Think of it like a special box where you can store and share data across your entire app. 
// This UserContext will hold information about the logged-in user.

// Create a hook to use the context easily
export const useUser = () => useContext(UserContext);

// Create a provider component
export const UserProvider = ({ children }) => {

    // This is a special component provided by React that allows
    //  you to share data with components that are nested within it
    
    const [user, setUser] = useState(null);

    return (
        // Put the user information inside the context box
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
