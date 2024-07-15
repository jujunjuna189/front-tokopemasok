import { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { RouteName } from "../../router/RouteName";
import { clearLocal, getLocalUser } from "../../utils";

const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const user = getLocalUser();

    const onLogout = () => {
        clearLocal();
        navigation(RouteName.MAIN);
    }

    return (
        <ProfileContext.Provider value={{ navigation, user, onLogout }}>
            {children}
        </ProfileContext.Provider>
    );
}

export const UseProfileContext = () => {
    return useContext(ProfileContext);
}