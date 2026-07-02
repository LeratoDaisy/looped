/* ============================================================
 * This is a near-empty shell ON PURPOSE.
 *
 * We are not giving you a component structure, a router, a state
 * pattern, or a design. Those are the decisions being assessed —
 * designing them is your job, and defending them in your Decision
 * Log is the point.
 *
 * Delete this placeholder. Build the product described in BRIEF.md.
 * Type your data using src/data/types.ts. Load it via
 * src/data/items.ts (or reshape that — your call).
 * ============================================================ */
// Avoid depending on react-router-dom in this minimal starter to prevent
// "Cannot find module 'react-router-dom'" when the package isn't installed.
// Implement a tiny, dependency-free router based on window.location.pathname.

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { HomePage } from "./pages/HomePage";
import { ItemPage } from "./pages/ItemPage";
import { BookingPage } from "./pages/BookingPage";
import { BookingConfirmPage } from "./pages/BookingConfirmPage";
import { LoginPage } from "./pages/LoginPage";

export function App() {
  const [isAuthed, setIsAuthed] = useState(
    localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthed(localStorage.getItem("auth") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN (always accessible) */}
        <Route path="/login" element={<LoginPage />} />

        {/* HOME */}
        <Route
          path="/"
          element={isAuthed ? <HomePage /> : <Navigate to="/login" />}
        />

        {/* ITEM DETAILS */}
        <Route
          path="/item/:id"
          element={isAuthed ? <ItemPage /> : <Navigate to="/login" />}
        />

        {/* BOOKING FLOW */}
        <Route
          path="/book/:id"
          element={isAuthed ? <BookingPage /> : <Navigate to="/login" />}
        />

        <Route
          path="/book/:id/confirm"
          element={
            isAuthed ? <BookingConfirmPage /> : <Navigate to="/login" />
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}