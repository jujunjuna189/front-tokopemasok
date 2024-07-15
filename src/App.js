import { Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./contexts/cart";
import { LoginContextProvider } from "./contexts/login";
import { MainContextProvider } from "./contexts/main";
import { OrderContextProvider } from "./contexts/order";
import { OrderDetailContextProvider } from "./contexts/order_detail";
import { ProfileContextProvider } from "./contexts/profile";
import { RegisterContextProvider } from "./contexts/register";
import { CartPage, LoginPage, MainPage, OrderDetailPage, OrderPage, ProfilePage, RegisterPage } from "./pages";
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
      <Route path={RouteName.ORDER} element={
        <OrderContextProvider>
          <OrderPage />
        </OrderContextProvider>
      } />
      <Route path={RouteName.ORDER_DETAIL + '/:id'} element={
        <OrderDetailContextProvider>
          <OrderDetailPage />
        </OrderDetailContextProvider>
      } />
      <Route path={RouteName.PROFILE} element={
        <ProfileContextProvider>
          <ProfilePage />
        </ProfileContextProvider>
      } />
    </Routes>
  );
}

export default App;
