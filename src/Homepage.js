import { useState } from "react";
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

  const purposeMap = {
    "P.S.C": ["P.S.C Rank List", "Vacancy", "Other"],
    "BANK": ["FD Related", "Other"],
    "EMPLOYER": ["Enquiry", "Dispute", "Other"],
    "WORKER": ["Application", "Follow Up", "Pension", "Complaint", "Other"],
    "PUBLIC": ["Complaint", "Enquiry", "Other"],
  };

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    setPurposeOptions(purposeMap[selected] || ["Other"]);
    setPurpose("");
  };

  const handleSubmit = async () => {
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

      // CLEAR FORM
      setPhone("");
      setName("");
      setAddress("");
      setCategory("");
      setSection("");
      setPurpose("");
      setRemarks("");
      setVisitors(1);

    } catch (err) {
      alert("Error saving ❌");
    }
  };

  return (
    <>
      <div className="container">

        <div className="header">
          <h1 className="title">
            KERALA HEADLOAD WORKERS WELFARE BOARD <br />VISITORS DIARY
          </h1>
        </div>

        <div className="form-wrapper">
          <div className="form-row">

            <div className="field">
              <label>PHONE</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="field">
              <label>NAME</label>
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
                <option>PENSIONER</option>
                <option>RETIRED STAFF</option>
                <option>OTHER</option>
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
                <option>PENSION</option>
                <option>WELFARE</option>
                <option>ECC</option>
                <option>FINANCE</option>
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

            <div className="field">
              <label>&nbsp;</label>
              <button className="submit-btn" onClick={handleSubmit}>
                SUBMIT
              </button>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default Homepage;