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
import { ITEMS } from "./data/items";

// Temporary pages (we will move these later)
function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <p>{ITEMS.length} items available</p>
    </div>
  );
}

function ItemPage() {
  return (
    <div>
      <h2>Item Detail</h2>
    </div>
  );
}

function BookingPage() {
  return (
    <div>
      <h2>Booking</h2>
    </div>
  );
}

function LoginPage() {
  return <h2>Login</h2>;
}

export function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  // Simple pattern matching for routes we need
  if (path === "/") return <HomePage />;
  if (path === "/login") return <LoginPage />;

  const itemMatch = path.match(/^\/item\/(.+)$/);
  if (itemMatch) return <ItemPage />;

  const bookMatch = path.match(/^\/book\/(.+)$/);
  if (bookMatch) return <BookingPage />;

  // Fallback
  return (
    <div>
      <h2>Not Found</h2>
      <p>Path: {path}</p>
    </div>
  );
}

