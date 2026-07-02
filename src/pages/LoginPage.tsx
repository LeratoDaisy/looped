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
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a", 
        fontFamily: "system-ui"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 360,
          padding: 28,
          borderRadius: 16,
          background: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
        }}
      >
        <h1 style={{ marginBottom: 6 }}>Looped</h1>
        <p style={{ marginTop: 0, color: "#666", marginBottom: 20 }}>
          Borrow. Share. Repeat.
        </p>

        <input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 12,
            borderRadius: 8,
            border: "1px solid #ddd"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 8,
            border: "none",
            background: "#111827",
            color: "white",
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          Sign in
        </button>

        <p
          style={{
            fontSize: 12,
            marginTop: 12,
            color: "#888",
            textAlign: "center"
          }}
        >
          By continuing you agree to community sharing rules
        </p>
      </div>
    </div>
  );
}