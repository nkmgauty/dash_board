import "./App.css";
import Dashboard from "./Components/Dashboard";
import GDPR from "./Components/GDPR";
import Consent from "./Components/GDPR_contents/Consent";
import General from "./Components/GDPR_contents/General";
import ROA from "./Components/GDPR_contents/ROA";
import RTBI from "./Components/GDPR_contents/RTBI";
import RTDP from "./Components/GDPR_contents/RTDP";
import Leads_Reports from "./Components/Leads_Reports";
import Shifts_page from "./Components/Shifts_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calender from "./Components/Calender";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="shift_page" element={<Shifts_page />} />
            <Route path="leads_reports" element={<Leads_Reports />} />
            <Route path="gdpr" element={<GDPR />} />
            <Route path="calender" element={<Calender />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
