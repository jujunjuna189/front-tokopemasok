import { Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./contexts/cart";
import { LoginContextProvider } from "./contexts/login";
import { MainContextProvider } from "./contexts/main";
import { RegisterContextProvider } from "./contexts/register";
import { CartPage, LoginPage, MainPage, RegisterPage } from "./pages";
import { RouteName } from "./router/RouteName";

function App() {
  return (
    <Routes>
      <Route path={RouteName.MAIN} element={
        <MainContextProvider>
          <MainPage />
        </MainContextProvider>
      } />
      <Route path={RouteName.LOGIN} element={
        <LoginContextProvider>
          <LoginPage />
        </LoginContextProvider>
      } />
      <Route path={RouteName.REGISTER} element={
        <RegisterContextProvider>
          <RegisterPage />
        </RegisterContextProvider>
      } />
      <Route path={RouteName.CART} element={
        <CartContextProvider>
          <CartPage />
        </CartContextProvider>
      } />
    </Routes>
  );
}

export default App;
