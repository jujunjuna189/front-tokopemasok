import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginRepo } from "../../repo";
import { RouteName } from "../../router/RouteName";
import { setLocalUser } from "../../utils";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const [controller, setController] = useState();
    const [loader, setLoader] = useState(false);

    const onSetController = (field, value) => {
        setController({ ...controller, [field]: value });
    }

    const onLogin = async () => {
        setLoader(true);
        await loginRepo({ body: { ...controller } }).then((res) => {
            setLoader(false);
            if (res !== false) {
                setLocalUser(res);
                navigation(RouteName.MAIN);
            }
        });
    }

    return (
        <LoginContext.Provider value={{ navigation, loader, controller, onSetController, onLogin }}>
            {children}
        </LoginContext.Provider>
    );
}

export const UseLoginContext = () => {
    return useContext(LoginContext);
}