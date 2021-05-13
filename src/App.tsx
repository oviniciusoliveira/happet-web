import "leaflet/dist/leaflet.css";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { AuthProvider } from "./contexts/auth";
import { DashboardProvider } from "./contexts/dashboard";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("@theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
      <AuthProvider>
        <DashboardProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ToastContainer />
            <Routes toggleTheme={toggleTheme} />
          </ThemeProvider>
        </DashboardProvider>
      </AuthProvider>
    </>
  );
}

export default App;
