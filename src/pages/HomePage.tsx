import { useState } from "react";
import { ITEMS } from "../data/items";
import { ItemCard } from "../components/ItemCard";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const availableItems = ITEMS.filter((item) => {
    const isAvailable = item.status === "available";

    const matchesSearch =
      search.trim() === "" ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return isAvailable && matchesSearch;
  });

  return (
    <main style={{ padding: 24 }}>
      <h1>Looped</h1>

      <input
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 20 }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16
        }}
      >
        {availableItems.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/item/${item.id}`)}
            style={{ cursor: "pointer" }}
          >
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </main>
  );
}