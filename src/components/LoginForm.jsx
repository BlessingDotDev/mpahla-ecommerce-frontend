import { useState } from "react";
import axios from "axios";
import "./LoginForm.scss";

export function LoginForm({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("/api/auth/login", { email, password });
      console.log("Login successful:", res.data);

      // Save token if using JWT
      localStorage.setItem("token", res.data.token);

      if (onLoginSuccess) onLoginSuccess(res.data.user);
      onClose(); // Close modal
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-overlay-wrapper">
      <div className="login-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Login</h2>
        {error && <div className="login-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
