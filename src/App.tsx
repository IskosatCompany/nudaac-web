import { ThemeProvider } from "@material-ui/system";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CasaPage from "./pages/CasaPage/CasaPage";
import Home from "./pages/HomePage/Home";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NotesPage from "./pages/NotesPage/NotesPage";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/" element={<NewsPage />} />
          <Route path="/movies/" element={<MoviesPage />} />
          <Route path="/casa/" element={<CasaPage />} />
          <Route path="/notes/" element={<NotesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
