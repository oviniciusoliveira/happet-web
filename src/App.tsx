import "leaflet/dist/leaflet.css";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./contexts/auth";
import { DashboardProvider } from "./contexts/dashboard";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthProvider>
        <DashboardProvider>
          <GlobalStyle />
          <ToastContainer />
          <Routes />
        </DashboardProvider>
      </AuthProvider>
    </>
  );
}

export default App;
