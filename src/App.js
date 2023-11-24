import { Route, Routes } from "react-router-dom";
import { MainContextProvider } from "./contexts/main";
import { MainPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <MainContextProvider>
          <MainPage />
        </MainContextProvider>
      } />
    </Routes>
  );
}

export default App;
