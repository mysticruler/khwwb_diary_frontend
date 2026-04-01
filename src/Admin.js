import { useEffect, useState } from "react";
import "./Admin.css";

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    try {
      const res = await fetch("https://khwwb-diary-backend.onrender.com/get-visitors");
      const result = await res.json();
      setData(result);
    } catch (err) {
      alert("Error fetching data ❌");
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">VISITORS LIST</h1>

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
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                {item.createdAt
                  ? new Date(item.createdAt._seconds * 1000).toLocaleString()
                  : ""}
              </td>
              <td>{item.phone}</td>
              <td>{item.name}</td>
              <td>{item.visitors}</td>
              <td>{item.address}</td>
              <td>{item.category}</td>
              <td>{item.section}</td>
              <td>{item.purpose}</td>
              <td>{item.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;