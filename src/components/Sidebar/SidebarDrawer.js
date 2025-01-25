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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider as CoreAppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout as CoreDashboardLayout } from "@toolpad/core/DashboardLayout";
import Dashboard from "./Dashboard";

const NAVIGATION = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "orders", title: "Orders", icon: <ShoppingCartIcon /> },
  { kind: "divider" },
  { kind: "header", title: "Analytics" },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      { segment: "sales", title: "Sales", icon: <DescriptionIcon /> },
      { segment: "traffic", title: "Traffic", icon: <DescriptionIcon /> },
    ],
  },
  { segment: "integrations", title: "Integrations", icon: <LayersIcon /> },
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
  console.log(location)
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

// Override DashboardLayout
function DashboardLayout({ children }) {
  return <CoreDashboardLayout>{children}</CoreDashboardLayout>;
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
            {/* <Route path="/orders" element={<Orders />} />
            <Route path="/reports/sales" element={<Sales />} />
            <Route path="/reports/traffic" element={<Traffic />} />
            <Route path="/integrations" element={<Integrations />} /> */}
          </Routes>
        </DashboardLayout>
      </AppProvider>
    </Router>
  );
}
