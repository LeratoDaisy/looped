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

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ItemPage } from "./pages/ItemPage";
import { BookingPage } from "./pages/BookingPage";
import { BookingConfirmPage } from "./pages/BookingConfirmPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home / Marketplace */}
        <Route path="/" element={<HomePage />} />

        {/* Item detail page */}
        <Route path="/item/:id" element={<ItemPage />} />

        {/* Booking flow */}
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/book/:id/confirm" element={<BookingConfirmPage />} />
      </Routes>
    </BrowserRouter>
  );
}