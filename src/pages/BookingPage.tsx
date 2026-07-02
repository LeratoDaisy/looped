import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <main style={{ padding: 24 }}>
      <h1>Booking</h1>
      <p>Item ID: {id}</p>

      <label>Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <br /><br />

      <label>End Date</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <br /><br />

      <button
        onClick={() =>
          navigate(`/book/${id}/confirm`, {
            state: { startDate, endDate }
          })
        }
        disabled={!startDate || !endDate}
      >
        Continue
      </button>
    </main>
  );
}