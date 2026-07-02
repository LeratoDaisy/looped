import type { Item } from "../data/types";

interface Props {
  item: Item;
}

export function ItemCard({ item }: Props) {
  const isFree = !item.price || item.price.amountCents === 0;

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 10,
        padding: 12,
        background: "white"
      }}
    >
      {/* Image */}
      {item.photoUrls.length > 0 ? (
        <img
          src={item.photoUrls[0]}
          alt={item.title}
          style={{
            width: "100%",
            height: 140,
            objectFit: "cover",
            borderRadius: 8
          }}
        />
      ) : (
        <div
          style={{
            height: 140,
            background: "#f2f2f2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            color: "#888"
          }}
        >
          No image
        </div>
      )}

      {/* Title */}
      <h3 style={{ margin: "10px 0 5px" }}>{item.title}</h3>

      {/* Price */}
      <p style={{ margin: 0, fontWeight: 500 }}>
        {isFree
          ? "Free"
          : `R ${(item.price!.amountCents / 100).toFixed(0)} / ${item.price!.period}`}
      </p>

      {/* Meta */}
      <small style={{ color: "#666" }}>
        {item.category} • {item.distanceKm ?? "Unknown distance"} km
      </small>
    </div>
  );
}