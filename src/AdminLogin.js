import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const API = "https://khwwb-diary-backend.onrender.com";
// const API = "http://localhost:5000";

function AdminLogin() {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (pin.length !== 6) {
      alert("Enter 6 digit PIN");
      return;
    }

    try {
      const res = await fetch(`${API}/admin-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pin }),
      });

      const result = await res.json();

      if (result.success) {
        localStorage.setItem("adminAuth", "true"); // ✅ store session
        navigate("/milanistheadmin/dashboard");
      } else {
        alert("Wrong PIN ❌");
      }

    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">ENTER ADMIN PIN</h2>

      <div className="form-box" style={{ maxWidth: "300px", margin: "auto" }}>
        <input
          type="password"
          placeholder="Enter 6 digit PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
      </div>

      <div className="button-row">
        <button className="add-btn" onClick={handleLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;