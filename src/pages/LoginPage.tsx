import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { HomePage } from "./HomePage";
import { ItemPage } from "./ItemPage";
import { BookingPage } from "./BookingPage";
import { BookingConfirmPage } from "./BookingConfirmPage";

export function LoginPage() {
  return <div>Login</div>;
}

export function App() {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("auth");
    setIsAuthed(saved === "true");
  }, []);

  const requireAuth = (element: React.ReactNode) => {
    return isAuthed ? element : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={requireAuth(<HomePage />)} />
        <Route path="/item/:id" element={requireAuth(<ItemPage />)} />
        <Route path="/book/:id" element={requireAuth(<BookingPage />)} />
        <Route
          path="/book/:id/confirm"
          element={requireAuth(<BookingConfirmPage />)}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}