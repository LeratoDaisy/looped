import { useParams, useNavigate } from "react-router-dom";
import { ITEMS } from "../data/items";

export function ItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = ITEMS.find((i) => i.id === id);

  if (!item) return <p>Item not found</p>;

  const isFree = !item.price || item.price.amountCents === 0;

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 12 }}>
        ← Back
      </button>

      <h1>{item.title}</h1>

      {item.photoUrls.length > 0 && (
        <img
          src={item.photoUrls[0]}
          style={{ width: "100%", maxWidth: 500, borderRadius: 8 }}
        />
      )}

      <p style={{ marginTop: 12 }}>{item.description}</p>

      <p>
        <strong>
          {isFree
            ? "Free"
            : `R ${(item.price!.amountCents / 100).toFixed(0)} / ${item.price!.period}`}
        </strong>
      </p>

      <p style={{ color: "#666" }}>
        ⭐ {item.owner.rating ?? "No rating"} • {item.category}
      </p>

      <button
        disabled={item.status !== "available"}
        onClick={() => navigate(`/book/${item.id}`)}
        style={{
          padding: 12,
          background: item.status === "available" ? "black" : "#ccc",
          color: "white",
          border: "none",
          marginTop: 20,
          cursor: item.status === "available" ? "pointer" : "not-allowed"
        }}
      >
        {item.status === "available" ? "BOOK NOW" : "NOT AVAILABLE"}
      </button>
    </main>
  );
}