import { ThemeProvider } from "@material-ui/system";
import Axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CasaPage from "./pages/CasaPage/CasaPage";
import Home from "./pages/HomePage/Home";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NotesPage from "./pages/NotesPage/NotesPage";
import { theme } from "./theme";

Axios.defaults.baseURL = "http://localhost:8080";

function App() {
  useEffect(() => {
    Axios.interceptors.response.use(
      (response) => response,
      (err) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        return Promise.reject(err);
      }
    );
  }, []);

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
