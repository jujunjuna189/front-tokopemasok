import { Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./contexts/cart";
import { CartLocalContextProvider } from "./contexts/cart_local";
import { LoginContextProvider } from "./contexts/login";
import { MainContextProvider } from "./contexts/main";
import { OrderContextProvider } from "./contexts/order";
import { OrderDetailContextProvider } from "./contexts/order_detail";
import { ProfileContextProvider } from "./contexts/profile";
import { RegisterContextProvider } from "./contexts/register";
import { MobileAppsPage, CartLocalPage, CartPage, LoginPage, MainPage, OrderDetailPage, OrderPage, ProfilePage, RegisterPage } from "./pages";
import { RouteName } from "./router/RouteName";

function App() {
  return (
    <Routes>
      {/* Download App Path */}
      <Route path={RouteName.MOBILE_APPS} element={
        <MobileAppsPage />
      } />
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
      <Route path={RouteName.CART_LOCAL} element={
        <CartLocalContextProvider>
          <CartLocalPage />
        </CartLocalContextProvider>
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
