'use client'
import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
    const [success, setSuccess] = useState({
        success:null,
        message:''
    });

    return (
        <NotificationContext.Provider value={{ success, setSuccess }}>
            {children}
        </NotificationContext.Provider>
    );
}
export default NotificationProvider;