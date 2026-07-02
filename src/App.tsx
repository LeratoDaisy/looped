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

import { useState } from "react";
import { ITEMS } from "./data/items";
import { ItemCard } from "./components/ItemCard";

export function App() {
  const [search, setSearch] = useState("");

  const availableItems = ITEMS.filter((item) => {
    const isAvailable = item.status === "available";

    const matchesSearch =
      search.trim() === "" ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return isAvailable && matchesSearch;
  });

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Looped</h1>

      <input
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 10,
          width: "100%",
          marginBottom: 20
        }}
      />

      <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16
        }}
        >
          {availableItems.map((item) => (
            <ItemCard key={item.id} item={item} />
            ))}
            </div>
            </main>
            );
          }