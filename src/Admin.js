import { useEffect, useState } from "react";
import "./Admin.css";

const API = "https://khwwb-diary-backend.onrender.com";
// const API = "http://localhost:5000";

function Admin() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    phone: "",
    name: "",
    visitors: "",
    address: "",
    category: "",
    section: "",
    purpose: "",
    remarks: "",
  });

  const [purposeOptions, setPurposeOptions] = useState([]);

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
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    const res = await fetch(`${API}/get-visitors`);
    const result = await res.json();
    setData(result);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete?")) return;

    await fetch(`${API}/delete-visitor/${id}`, {
      method: "DELETE",
    });

    fetchVisitors();
  };

  const handleEdit = (item) => {
    setEditId(item.id);

    setForm({
      phone: item.phone || "",
      name: item.name || "",
      visitors: item.visitors || "",
      address: item.address || "",
      category: item.category || "",
      section: item.section || "",
      purpose: item.purpose || "",
      remarks: item.remarks || "",
    });

    setPurposeOptions(purposeMap[item.category] || ["OTHER"]);
  };

  const handleCategoryChange = (value) => {
    setForm({ ...form, category: value, purpose: "" });
    setPurposeOptions(purposeMap[value] || ["OTHER"]);
  };

  const handleUpdate = async () => {
    await fetch(`${API}/update-visitor/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Updated ✅");
    setEditId(null);
    resetForm();
    fetchVisitors();
  };

  const handleAdd = async () => {
    await fetch(`${API}/add-visitor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Added ✅");
    resetForm();
    fetchVisitors();
  };

  const resetForm = () => {
    setForm({
      phone: "",
      name: "",
      visitors: "",
      address: "",
      category: "",
      section: "",
      purpose: "",
      remarks: "",
    });
  };

  const formatDate = (createdAt) => {
    if (!createdAt) return "";

    if (createdAt._seconds) {
      return new Date(createdAt._seconds * 1000).toLocaleString();
    }

    return new Date(createdAt).toLocaleString();
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">ADMIN PANEL</h1>

      {/* FORM */}
      <div className="form-box">
        <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Visitors" value={form.visitors} onChange={(e) => setForm({ ...form, visitors: e.target.value })} />
        <input placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />

        <select value={form.category} onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value=""></option>
          {Object.keys(purposeMap).map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })}>
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

        <select value={form.purpose} onChange={(e) => setForm({ ...form, purpose: e.target.value })}>
          <option value=""></option>
          {purposeOptions.map((p, i) => (
            <option key={i}>{p}</option>
          ))}
        </select>

        <input placeholder="Remarks" value={form.remarks} onChange={(e) => setForm({ ...form, remarks: e.target.value })} />

        {editId ? (
          <button className="update-btn" onClick={handleUpdate}>Update</button>
        ) : (
          <button className="add-btn" onClick={handleAdd}>Add</button>
        )}
      </div>

      {/* TABLE */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Purpose</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{formatDate(item.createdAt)}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.purpose}</td>

              <td>
                <button className="edit-btn" onClick={() => handleEdit(item)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;