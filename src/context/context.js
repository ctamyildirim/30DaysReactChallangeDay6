import { useContext, createContext } from 'react'

export const MainContext = createContext();

export const CalenderContext = () => useContext(MainContext);