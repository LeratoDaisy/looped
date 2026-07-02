import { useParams } from "react-router-dom";
import { ITEMS } from "../data/items";
import { useNavigate } from "react-router-dom";

export function ItemPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const item = ITEMS.find((i) => i.id === id);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>{item.title}</h1>

      {item.photoUrls.length > 0 && (
        <img
          src={item.photoUrls[0]}
          style={{ width: "100%", maxWidth: 500 }}
        />
      )}

      <p>{item.description}</p>

      <h3>Owner</h3>
      <p>{item.owner.displayName}</p>

      <button
      onClick={() => navigate(`/book/${item.id}`)}
      style={{
        padding: 12,
        background: "black",
        color: "white",
        border: "none",
        marginTop: 20,
        cursor: "pointer"
        }}
        >
            BOOK NOW
        </button>
    </main>
  );
}