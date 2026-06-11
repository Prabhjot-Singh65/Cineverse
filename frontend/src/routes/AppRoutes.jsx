import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import LoginSignup from "../pages/LoginSignup";
import Booking from "../pages/Booking";
import SeatAllocation from "../pages/SeatAllocation";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/booking/:movieId" element={<Booking />} />
        <Route path="/seats/:showId" element={<SeatAllocation />} />
        <Route path="/booking/:movieId" element={<Booking />} />
        <Route path="/seats" element={<SeatAllocation />} />
      </Routes>
    </BrowserRouter>
  );
}