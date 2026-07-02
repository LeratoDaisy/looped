import type { Item } from "../data/types";

interface Props {
  item: Item;
}

export function ItemCard({ item }: Props) {
  const isFree = item.price === null || item.price.amountCents === 0;
  const isPaused = item.status !== "available";

  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: 12,
      padding: 12,
      opacity: isPaused ? 0.5 : 1
    }}>
      {item.photoUrls.length > 0 ? (
        <img
          src={item.photoUrls[0]}
          alt={item.title}
          style={{ width: "100%", borderRadius: 8 }}
        />
      ) : (
        <div style={{
          height: 120,
          background: "#f3f3f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          No image
        </div>
      )}

      <h3>{item.title}</h3>

      <p>
        {isFree
          ? "Free"
          : `R ${(item.price!.amountCents / 100).toFixed(0)} / ${item.price!.period}`}
      </p>

      <small>{item.category}</small>
    </div>
  );
}