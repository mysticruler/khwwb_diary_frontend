import { useState, useEffect } from "react";
import "./Homepage.css";

function Homepage() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [section, setSection] = useState("");
  const [purpose, setPurpose] = useState("");
  const [remarks, setRemarks] = useState("");
  const [visitors, setVisitors] = useState(1);
  const [purposeOptions, setPurposeOptions] = useState([]);
  const [todayVisitors, setTodayVisitors] = useState([]);

  const BASE_URL = "https://khwwb-diary-backend.onrender.com";

  const purposeMap = {
    "P.S.C": ["RANK LIST", "VACANCY", "OTHER"],
    "EMPLOYER": ["ENQUIRY", "DISPUTE", "OTHER"],
    "WORKER": ["APPLICATION FOLLOW UP", "COMPLAINT", "PENSION"],
    "PUBLIC": ["COMPLAINT", "ENQUIRY", "OTHER"],
    "BANK": ["F.D DETAILS", "OTHER"],
    "OTHERS": ["COMPLAINTS", "OTHER"],
    "PENSIONER": ["OTHER"],
    "RETIRED-STAFFS": ["OTHER"]
  };

  useEffect(() => {
    fetchTodayVisitors();
  }, []);

  /* ============================= */
  /* 🔥 AUTO FETCH NAME (FIXED) */
  /* ============================= */
  useEffect(() => {
    const delayDebounce = setTimeout(async () => {

      // ✅ Only run when phone is exactly 10 digits
      if (phone.length !== 10) return;

      try {
        const res = await fetch(`${BASE_URL}/get-by-phone/${phone}`);
        if (!res.ok) return;

        const data = await res.json();

        // ✅ Autofill only if data exists
        if (data) {
          setName(data.name || "");
          setAddress(data.address || "");

        }

      } catch {
        console.log("No previous data");
      }

    }, 500); // debounce

    return () => clearTimeout(delayDebounce);

  }, [phone]);

  /* FETCH TODAY VISITORS */
  const fetchTodayVisitors = async () => {
    try {
      const res = await fetch(`${BASE_URL}/today-visitors`);

      if (!res.ok) {
        console.error("API Error:", res.status);
        setTodayVisitors([]);
        return;
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setTodayVisitors(data);
      } else {
        setTodayVisitors([]);
      }

    } catch (err) {
      console.log("Fetch error:", err);
      setTodayVisitors([]);
    }
  };

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    setPurposeOptions(purposeMap[selected] || ["OTHER"]);
    setPurpose("");
  };

  const handleSubmit = async () => {
    if (!phone || !name) {
      alert("Phone and Name are required ❗");
      return;
    }

    const data = {
      phone,
      name,
      visitors,
      address,
      category,
      section,
      purpose,
      remarks
    };

    try {
      const res = await fetch(`${BASE_URL}/add-visitor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        alert("Error saving ❌");
        return;
      }

      alert("Saved Successfully ✅");

      setPhone("");
      setName("");
      setAddress("");
      setCategory("");
      setSection("");
      setPurpose("");
      setRemarks("");
      setVisitors(1);

      fetchTodayVisitors();

    } catch {
      alert("Error saving ❌");
    }
  };

  return (
    <div className="container">

      <div className="header">
        <h1 className="title">KHWWB VISITORS DIARY</h1>
      </div>

      <div className="form-wrapper">
        <div className="form-row">

          <div className="field">
            <label>PHONE *</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="field">
            <label>NAME *</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);

              }}
            />
          </div>

          <div className="field">
            <label>VISITORS</label>
            <div className="counter">
              <button onClick={() => setVisitors(Math.max(1, visitors - 1))}>-</button>
              <span>{visitors}</span>
              <button onClick={() => setVisitors(visitors + 1)}>+</button>
            </div>
          </div>

          <div className="field">
            <label>ADDRESS</label>
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);

              }}
            />
          </div>

          <div className="field">
            <label>CATEGORY</label>
            <select value={category} onChange={handleCategoryChange}>
              <option value=""></option>
              <option>PUBLIC</option>
              <option>P.S.C</option>
              <option>EMPLOYER</option>
              <option>BANK</option>
              <option>WORKER</option>
              <option>PENSIONER</option>
              <option>RETIRED-STAFFS</option>
              <option>OTHERS</option>
            </select>
          </div>

          <div className="field">
            <label>SECTION</label>
            <select value={section} onChange={(e) => setSection(e.target.value)}>
              <option value=""></option>
              <option>C.E.O</option>
              <option>FINANCE OFFICER</option>
              <option>SECRETARY</option>
              <option>ESTABLISHMENT</option>
              <option>FINANCE</option>
              <option>PENSION</option>
              <option>WELFARE</option>
              <option>E.C.C</option>
              <option>SCATTERED</option>
            </select>
          </div>

          <div className="field">
            <label>PURPOSE</label>
            <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
              <option value=""></option>
              {purposeOptions.map((p, i) => (
                <option key={i}>{p}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>REMARKS</label>
            <input value={remarks} onChange={(e) => setRemarks(e.target.value)} />
          </div>

        </div>

        <div className="submit-wrapper">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>

      <div className="today-section">
        <h2>Today's Visitors</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Category</th>
              <th>Section</th>
              <th>Purpose</th>
              <th>Remarks</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(todayVisitors) && todayVisitors.length === 0 ? (
              <tr>
                <td colSpan="3">No visitors today</td>
              </tr>
            ) : (
              todayVisitors.map((v) => (
                <tr key={v.id}>
                  <td>{v.name}</td>
                  <td>{v.address}</td>
                  <td>{v.category}</td>
                  <td>{v.section}</td>
                  <td>{v.purpose}</td>
                  <td>{v.remarks}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Homepage;