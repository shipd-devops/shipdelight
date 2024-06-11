
'use client';
import { createContext, useEffect, useState, ReactNode } from "react";
interface ContextProps {
    md: boolean,
    setMd: any,
    shake: boolean,
    setShake: any,
}
export const GlobalContext = createContext<ContextProps>({
    md: false,
    setMd:() => {},
    shake: false,
    setShake:() => {},
})

interface ProtectedRouteProps {
    children?: ReactNode;
}
export const GlobalContextProvider: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [md, setMd] = useState<boolean>(false);
    const [shake, setShake] = useState<boolean>(false);
    return (
        <GlobalContext.Provider value={{ md, setMd, setShake, shake}}>
            {children}
        </GlobalContext.Provider>
    )
};