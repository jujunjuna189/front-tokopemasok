import { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom";

const RegisterContext = createContext();

export const RegisterContextProvider = ({ children }) => {
    const navigation = useNavigate();

    return (
        <RegisterContext.Provider value={{ navigation }}>
            {children}
        </RegisterContext.Provider>
    );
}

export const UseRegisterContext = () => {
    return useContext(RegisterContext);
}