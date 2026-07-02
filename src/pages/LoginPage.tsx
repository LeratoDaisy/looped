import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.trim()) return;

    localStorage.setItem("auth", "true");
    localStorage.setItem("email", email);

    navigate("/");
  };

  return (
    <main
      style={{
        padding: 24,
        fontFamily: "system-ui",
        maxWidth: 400,
        margin: "0 auto"
      }}
    >
      <h1>Looped</h1>
      <p>Sign in to continue</p>

      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 12
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: 12,
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Login
      </button>
    </main>
  );
}