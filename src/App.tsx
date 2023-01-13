import { ThemeProvider } from "@material-ui/system";
import Axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import "./App.css";
import CasaPage from "./pages/CasaPage/CasaPage";
import Home from "./pages/HomePage/Home";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NotesPage from "./pages/NotesPage/NotesPage";
import { theme } from "./theme";
import { fetcher } from "./utils";

Axios.defaults.baseURL = "http://localhost:8080/api/v1";

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
      <SWRConfig
        value={{
          fetcher,
          revalidateOnFocus: false,
          errorRetryCount: 3,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/" element={<NewsPage />} />
            <Route path="/movies/" element={<MoviesPage />} />
            <Route path="/casa/" element={<CasaPage />} />
            <Route path="/notes/" element={<NotesPage />} />
          </Routes>
        </Router>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
