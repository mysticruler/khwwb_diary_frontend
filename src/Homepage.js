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

  const purposeMap = {
    "P.S.C": ["P.S.C Rank List", "Vacancy", "Other"],
    "BANK": ["FD Related", "Other"],
    "EMPLOYER": ["Enquiry", "Dispute", "Other"],
    "WORKER": ["Application", "Follow Up", "Pension", "Complaint", "Other"],
    "PUBLIC": ["Complaint", "Enquiry", "Other"],
  };

  useEffect(() => {
    fetchTodayVisitors();
  }, []);

  /* AUTO FETCH NAME & ADDRESS */
  const handlePhoneChange = async (value) => {
    setPhone(value);

    if (value.length < 5) return;

    try {
      const res = await fetch(`https://khwwb-diary-backend.onrender.com/get-by-phone/${value}`);
      const data = await res.json();

      if (data) {
        setName(data.name || "");
        setAddress(data.address || "");
      }
    } catch (err) {
      console.log("No previous data");
    }
  };

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    setPurposeOptions(purposeMap[selected] || ["Other"]);
    setPurpose("");
  };

  const fetchTodayVisitors = async () => {
    try {
      const res = await fetch("https://khwwb-diary-backend.onrender.com/today-visitors");
      const data = await res.json();
      setTodayVisitors(data);
    } catch (err) {
      console.log(err);
    }
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
      const res = await fetch("https://khwwb-diary-backend.onrender.com/add-visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      await res.json();

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

    } catch (err) {
      alert("Error saving ❌");
    }
  };

  return (
    <>
      <div className="container">

        <div className="header">
          <h1 className="title">
            KHWWB VISITORS DIARY
          </h1>
        </div>

        <div className="form-wrapper">
          <div className="form-row">

            <div className="field">
              <label>PHONE *</label>
              <input
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
              />
            </div>

            <div className="field">
              <label>NAME *</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
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
              <input value={address} onChange={(e) => setAddress(e.target.value)} />
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
              </select>
            </div>

            <div className="field">
              <label>SECTION</label>
              <select value={section} onChange={(e) => setSection(e.target.value)}>
                <option value=""></option>
                <option>FINANCE</option>
                <option>PENSION</option>
                <option>WELFARE</option>
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

            <div className="field">
              <label>&nbsp;</label>
              <button className="submit-btn" onClick={handleSubmit}>
                SUBMIT
              </button>
            </div>

          </div>
        </div>

        {/* TODAY VISITORS */}
        <div className="today-section">
          <h2>Today's Visitors</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Purpose</th>
              </tr>
            </thead>

            <tbody>
              {todayVisitors.map((v, i) => (
                <tr key={i}>
                  <td>{v.name}</td>
                  <td>{v.address}</td>
                  <td>{v.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}

export default Homepage;