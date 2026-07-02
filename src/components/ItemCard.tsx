import type { Item } from "../data/types";

interface Props {
  item: Item;
}

export function ItemCard({ item }: Props) {
  const isFree = !item.price || item.price.amountCents === 0;
  const isPaused = item.status !== "available";

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 12,
        padding: 12,
        background: isPaused ? "#f5f5f5" : "white",
        opacity: isPaused ? 0.6 : 1,
        position: "relative"
      }}
    >
      {/* STATUS BADGE */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            fontSize: 12,
            padding: "4px 8px",
            borderRadius: 6,
            background: isFree ? "#d1fae5" : "#e5e7eb",
            color: "#111"
          }}
        >
          {isFree ? "FREE" : "PAID"}
        </span>

        {isPaused && (
          <span
            style={{
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 6,
              background: "#fee2e2",
              color: "#991b1b"
            }}
          >
            PAUSED
          </span>
        )}
      </div>

      {/* IMAGE */}
      {item.photoUrls.length > 0 ? (
        <img
          src={item.photoUrls[0]}
          alt={item.title}
          style={{
            width: "100%",
            height: 140,
            objectFit: "cover",
            borderRadius: 8,
            marginTop: 8
          }}
        />
      ) : (
        <div
          style={{
            height: 140,
            marginTop: 8,
            background: "#f3f4f6",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#888"
          }}
        >
          No image
        </div>
      )}

      {/* TITLE */}
      <h3 style={{ margin: "10px 0 4px" }}>{item.title}</h3>

      {/* PRICE */}
      <p style={{ margin: 0, fontWeight: 500 }}>
        {isFree
          ? "Free"
          : `R ${(item.price!.amountCents / 100).toFixed(0)} / ${item.price!.period}`}
      </p>

      {/* META */}
      <p style={{ margin: "6px 0 0", fontSize: 12, color: "#666" }}>
        ⭐ {item.owner.rating ?? "No rating"} • {item.category}
      </p>
    </div>
  );
}