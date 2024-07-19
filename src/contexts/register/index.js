import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { registerRepo } from "../../repo";
import { RouteName } from "../../router/RouteName";
import { setLocalUser } from "../../utils";

const RegisterContext = createContext();

export const RegisterContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const [controller, setController] = useState({});
    const [loader, setLoader] = useState(false);

    const onSetController = (field, value) => {
        setController({ ...controller, [field]: value });
    }

    const onRegister = async () => {
        setLoader(true);
        await registerRepo({ body: { ...controller } }).then((res) => {
            setLoader(false);
            if (res !== false) {
                setLocalUser(res);
                navigation(RouteName.MAIN);
            }
        });
    }

    return (
        <RegisterContext.Provider value={{ navigation, loader, onSetController, onRegister }}>
            {children}
        </RegisterContext.Provider>
    );
}

export const UseRegisterContext = () => {
    return useContext(RegisterContext);
}