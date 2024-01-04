import { Route, Routes } from "react-router-dom";
import { CatalogDetailContextProvider } from "./contexts/catalog/detail";
import { MainContextProvider } from "./contexts/main";
import { CatalogDetailPage, MainPage } from "./pages";
import { RouteName } from "./router/RouteName";

function App() {
  return (
    <Routes>
      <Route path={RouteName.MAIN} element={
        <MainContextProvider>
          <MainPage />
        </MainContextProvider>
      } />
      <Route path={`${RouteName.CATALOG_DETAIL}/:id`} element={
        <CatalogDetailContextProvider>
          <CatalogDetailPage />
        </CatalogDetailContextProvider>
      } />
    </Routes>
  );
}

export default App;
