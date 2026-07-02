import { useLocation, useParams } from "react-router-dom";

export function BookingConfirmPage() {
  const { id } = useParams();
  const location = useLocation();

  const state = location.state as
    | { startDate: string; endDate: string }
    | undefined;

  return (
    <main style={{ padding: 24 }}>
      <h1>Booking Confirmed</h1>

      <p>Item: {id}</p>

      <p>Start: {state?.startDate}</p>
      <p>End: {state?.endDate}</p>

      <h3>Success 🎉</h3>
    </main>
  );
}