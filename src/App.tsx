import { ThemeProvider } from "@material-ui/system";
import Axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import "./App.css";
import { ActivitiesPage } from "./pages/ActivitiesPage";

import { CulturePage } from "./pages/CulturePage";
import { Home } from "./pages/HomePage";
import { RepositoryPage } from "./pages/RepositoryPage";
import { ResumePage } from "./pages/ResumePage";
import { SchedulePage } from "./pages/SchedulePage";

import { theme } from "./theme";
import { fetcher } from "./utils";

export enum WebRoutes {
  HOME = "/",
  SCHEDULE = "/schedule/",
  RESUME = "/resumes/",
  ACTIVITY = "/activities/",
  CULTURE = "/culture/",
  REPOSITORY = "/repositories/",
}

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
            <Route path={WebRoutes.HOME} element={<Home />} />
            <Route path={WebRoutes.SCHEDULE} element={<SchedulePage />} />
            <Route path={WebRoutes.RESUME} element={<ResumePage />} />
            <Route path={WebRoutes.ACTIVITY} element={<ActivitiesPage />} />
            <Route path={WebRoutes.CULTURE} element={<CulturePage />} />
            <Route path={WebRoutes.REPOSITORY} element={<RepositoryPage />} />
          </Routes>
        </Router>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
