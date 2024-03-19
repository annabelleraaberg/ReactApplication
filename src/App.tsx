import PageHeader from "./components/shared/PageHeader";
import HomePage from "./pages/HomePage";
import EditDriverPage from "./pages/EditDriverPage";
import ShowDriverPage from "./pages/ShowDriverPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage";
import MainNavigation from "./components/shared/MainNavigation";
import "./App.css";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <MainNavigation />
          <PageHeader pageTitle="Formula 1 Drivers" />
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="finddriver" element={<ShowDriverPage />}></Route>
            <Route path="editdriver" element={<EditDriverPage />}></Route>
            <Route path="game" element={<GamePage />}></Route>
            <Route path="search" element={<SearchPage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
