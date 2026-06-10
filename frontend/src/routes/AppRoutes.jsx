import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginSignup from "../pages/LoginSignup";
import Dashboard from "../pages/Dashboard";
import MovieLoading from "../pages/MovieLoading";
import Booking from "../pages/Booking";
import SeatAllocation from "../pages/SeatAllocation";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies" element={<MovieLoading />} />
        <Route path="/booking/:movieId" element={<Booking />} />
        <Route path="/seats/:showId" element={<SeatAllocation />} />
      </Routes>
    </BrowserRouter>
  );
}