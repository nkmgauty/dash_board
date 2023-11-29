import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Shifts_page from "../Shifts_page";
import Leads_Reports from "../Leads_Reports";
import GDPR from "../GDPR";
import Calender from "../../Components/Calender";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="shift_page" element={<Shifts_page />} />
            <Route path="leads_reports" element={<Leads_Reports />} />
            <Route path="GDPR" element={<GDPR />} />
            <Route path="GDPR" element={<Calender />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
