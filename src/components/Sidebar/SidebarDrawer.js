import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { extendTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider as CoreAppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout as CoreDashboardLayout } from "@toolpad/core/DashboardLayout";
import Dashboard from "./Dashboard";
import Check1 from "./Check/Check1";
import Check2 from "./Check/Check2";
import Track1 from "./Track/Track1";
import Analyze1 from "./Analyze/Analyze1";
import Graph1 from "./Graph/Graph1";
import Graph2 from "./Graph/Graph2";
import Graph3 from "./Graph/Graph3";

const NAVIGATION = [
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  {
    segment: "check",
    title: "Check",
    icon: <BarChartIcon />,
    children: [
      { segment: "check1", title: "Check1", icon: <DescriptionIcon /> },
      { segment: "check2", title: "Check2", icon: <DescriptionIcon /> },
    ],
  },
  {
    segment: "track",
    title: "Track",
    icon: <BarChartIcon />,
    children: [
      { segment: "track1", title: "Track1", icon: <DescriptionIcon /> },
    ],
  },
  {
    segment: "analyze",
    title: "Analyze",
    icon: <BarChartIcon />,
    children: [
      { segment: "analyze1", title: "Analyze1", icon: <DescriptionIcon /> },
    ],
  },
  {
    segment: "graph",
    title: "Graph",
    icon: <LayersIcon />,
    children: [
      { segment: "graph1", title: "Graph1", icon: <DescriptionIcon /> },
      { segment: "graph2", title: "Graph2", icon: <DescriptionIcon /> },
      { segment: "graph3", title: "Graph3", icon: <DescriptionIcon /> },
    ],
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
});

// Custom AppProvider using React Router
function AppProvider({ children, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();

  const router = React.useMemo(
    () => ({
      pathname: location.pathname,
      searchParams: new URLSearchParams(location.search),
      navigate: (path) => navigate(path),
    }),
    [location, navigate]
  );

  return (
    <CoreAppProvider {...props} router={router}>
      {children}
    </CoreAppProvider>
  );
}

// Breadcrumb Component
function Breadcrumb() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <div style={{ padding: "16px", fontSize: "16px", fontWeight: "bold" }}>
      {segments.length === 0 ? (
        <span>Home</span>
      ) : (
        segments.map((segment, index) => (
          <span key={index}>
            {index > 0 && " / "}
            <span
              style={{
                color: index === segments.length - 1 ? "grey" : "dark-grey",
              }}
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </span>
          </span>
        ))
      )}
    </div>
  );
}

// Override DashboardLayout
function DashboardLayout({ children }) {
  return (
    <CoreDashboardLayout>
      <Breadcrumb />
      {children}
    </CoreDashboardLayout>
  );
}

export default function DashboardLayoutBasic() {
  return (
    <Router>
      <AppProvider
        navigation={NAVIGATION}
        theme={demoTheme}
        branding={{ title: <span>Dashboard</span> }}
      >
        <DashboardLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/check/check1" element={<Check1 />} />
            <Route path="/check/check2" element={<Check2 />} />
            <Route path="/track/track1" element={<Track1 />} />
            <Route path="/analyze/analyze1" element={<Analyze1 />} />
            <Route path="/graph/graph1" element={<Graph1 />} />
            <Route path="/graph/graph2" element={<Graph2 />} />
            <Route path="/graph/graph3" element={<Graph3 />} />
          </Routes>
        </DashboardLayout>
      </AppProvider>
    </Router>
  );
}
