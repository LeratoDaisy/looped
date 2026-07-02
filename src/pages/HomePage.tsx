import { useState } from "react";
import { ITEMS } from "../data/items";
import { ItemCard } from "../components/ItemCard";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const navigate = useNavigate();

  const availableItems = ITEMS.filter((item) => {
    const isAvailable = item.status === "available";

    const matchesSearch =
      search.trim() === "" ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || item.category === category;

    const isFree = !item.price || item.price.amountCents === 0;

    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "free" && isFree) ||
      (priceFilter === "paid" && !isFree);

    return isAvailable && matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Looped</h1>

      {/* SEARCH */}
      <input
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 10,
          width: "100%",
          marginBottom: 16
        }}
      />

      {/* FILTERS */}
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="power-tools">Power Tools</option>
          <option value="hand-tools">Hand Tools</option>
          <option value="garden">Garden</option>
          <option value="kitchen">Kitchen</option>
          <option value="outdoor">Outdoor</option>
          <option value="party">Party</option>
          <option value="other">Other</option>
        </select>

        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="all">All Prices</option>
          <option value="free">Free Only</option>
          <option value="paid">Paid Only</option>
        </select>
      </div>

      {availableItems.length === 0 && (
        <div style={{ padding: 20, color: "#666" }}>
          <h3>No items found</h3>
          <p>Try adjusting your search or filters.</p>
          </div>
        )}

      {/* GRID */}
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