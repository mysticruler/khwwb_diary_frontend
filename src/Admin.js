import { useEffect, useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const API = "https://khwwb-diary-backend.onrender.com";

function Admin() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [groupedData, setGroupedData] = useState({});
  const [editId, setEditId] = useState(null);

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = 2025; y <= currentYear; y++) {
    years.push(y);
  }

  const months = [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    { name: "April", value: 4 },
    { name: "May", value: 5 },
    { name: "June", value: 6 },
    { name: "July", value: 7 },
    { name: "August", value: 8 },
    { name: "September", value: 9 },
    { name: "October", value: 10 },
    { name: "November", value: 11 },
    { name: "December", value: 12 },
  ];

  const [filterType, setFilterType] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

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

  const fetchVisitors = async () => {
    const res = await fetch(`${API}/get-visitors`);
    const result = await res.json();
    setData(result);
  };

  const getDateObj = (createdAt) => {
    if (!createdAt) return null;
    if (createdAt._seconds) return new Date(createdAt._seconds * 1000);
    return new Date(createdAt);
  };

  /* FILTER */
  useEffect(() => {
    let filtered = [...data];

    if (filterType === "month" && selectedMonth && selectedYear) {
      filtered = data.filter((d) => {
        const date = getDateObj(d.createdAt);
        return (
          date &&
          date.getMonth() + 1 === parseInt(selectedMonth) &&
          date.getFullYear() === parseInt(selectedYear)
        );
      });
    }

    if (filterType === "year" && selectedYear) {
      filtered = data.filter((d) => {
        const date = getDateObj(d.createdAt);
        return date && date.getFullYear() === parseInt(selectedYear);
      });
    }

    if (filterType === "custom" && fromDate && toDate) {
      filtered = data.filter((d) => {
        const date = getDateObj(d.createdAt);
        return date && date >= new Date(fromDate) && date <= new Date(toDate);
      });
    }

    filtered.sort((a, b) => getDateObj(b.createdAt) - getDateObj(a.createdAt));
    setFilteredData(filtered);
  }, [data, filterType, selectedMonth, selectedYear, fromDate, toDate]);

  /* GROUP */
  useEffect(() => {
    const grouped = {};
    filteredData.forEach((item) => {
      const date = getDateObj(item.createdAt);
      if (!date) return;

      const key = date.toLocaleDateString("en-GB");

      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    });

    setGroupedData(grouped);
  }, [filteredData]);

  /* EXCEL */
  const downloadExcel = () => {
    const exportData = filteredData.map((item) => ({
      Date: getDateObj(item.createdAt)?.toLocaleString(),
      Phone: item.phone,
      Name: item.name,
      Visitors: item.visitors,
      Address: item.address,
      Category: item.category,
      Section: item.section,
      Purpose: item.purpose,
      Remarks: item.remarks,
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Visitors");

    const buffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([buffer]), "Visitors.xlsx");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete?")) return;
    await fetch(`${API}/delete-visitor/${id}`, { method: "DELETE" });
    fetchVisitors();
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setForm(item);
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
      headers: { "Content-Type": "application/json" },
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
    const d = getDateObj(createdAt);
    return d ? d.toLocaleString() : "";
  };

  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      navigate("/milanistheadmin");
      return;
    }
    fetchVisitors();
  }, [navigate]);

  return (
    <div className="admin-container">
      <h1 className="admin-title">ADMIN PANEL</h1>

      

      {/* FORM (unchanged) */}
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
      </div>

      <div className="button-row">
        {editId ? (
          <button className="update-btn" onClick={handleUpdate}>Update</button>
        ) : (
          <button className="add-btn" onClick={handleAdd}>Add</button>
        )}
      </div>

      {/* FILTER */}
      <div className="filter-box">
        <select onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">All</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
          <option value="custom">Custom</option>
        </select>

        {filterType === "month" && (
          <>
            <select onChange={(e) => setSelectedMonth(e.target.value)}>
              <option value="">Month</option>
              {months.map((m) => (
                <option key={m.value} value={m.value}>{m.name}</option>
              ))}
            </select>

            <select onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="">Year</option>
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </>
        )}

        {filterType === "year" && (
          <select onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        )}

        {filterType === "custom" && (
          <>
            <input type="date" onChange={(e) => setFromDate(e.target.value)} />
            <input type="date" onChange={(e) => setToDate(e.target.value)} />
          </>
        )}

        <button className="download-btn" onClick={downloadExcel}>
          Download Excel
        </button>
      </div>

      {/* GROUPED TABLE */}
      {Object.keys(groupedData).map((date) => (
        <div key={date}>
          <h3 className="date-header">📅 {date}</h3>

          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Phone</th>
                <th>Name</th>
                <th>Visitors</th>
                <th>Address</th>
                <th>Category</th>
                <th>Section</th>
                <th>Purpose</th>
                <th>Remarks</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {groupedData[date].map((item) => (
                <tr key={item.id}>
                  <td>{formatDate(item.createdAt)}</td>
                  <td>{item.phone}</td>
                  <td>{item.name}</td>
                  <td>{item.visitors}</td>
                  <td>{item.address}</td>
                  <td>{item.category}</td>
                  <td>{item.section}</td>
                  <td>{item.purpose}</td>
                  <td>{item.remarks}</td>

                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(item)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Admin;