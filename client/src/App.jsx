import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { Dashboard } from "@/pages/Dashboard";
import { Metrics } from "@/pages/Metrics";
import { Alerts } from "@/pages/Alerts";
import { Reports } from "@/pages/Reports";
import { Baselines } from "@/pages/Baselines";
import { Settings } from "@/pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="metrics" element={<Metrics />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="reports" element={<Reports />} />
          <Route path="baselines" element={<Baselines />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
