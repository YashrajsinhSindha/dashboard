import "./App.css";
import SidebarDrawer from "./components/Sidebar/SidebarDrawer"; // Import the Demo component
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <SidebarDrawer />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
