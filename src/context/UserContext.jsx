import React, { createContext, useState } from 'react'

export const userContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState({ name: 'Edgar Avila', email: 'correo@correo.com' });

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};