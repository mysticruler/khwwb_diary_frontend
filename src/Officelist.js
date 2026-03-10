import "./Officelist.css";
import Navbar from "./Navbar";
import { useState } from "react";

function Officelist() {

const [activeDistrict, setActiveDistrict] = useState(null);
const [search, setSearch] = useState("");

const districts = [
"Thiruvananthapuram","Kollam","Pathanamthitta","Alappuzha","Kottayam","Idukki",
"Ernakulam","Thrissur","Palakkad","Malappuram","Kozhikode","Wayanad","Kannur","Kasaragod"
];

const createDummyOffices = (district) => {

let arr = [];

for(let i=1;i<=10;i++){
arr.push({
name: district + " Office " + i,
address: "Building " + i + ", Market Road, " + district + ", Kerala - 69500" + i,
phone: "0471 24567" + i,
mail: "office" + i + "@example.com"
});
}

return arr;

};

const filteredDistricts = districts.filter(d =>
d.toLowerCase().includes(search.toLowerCase())
);

return(
<>
<Navbar/>

<div className="office-container">

{/* HERO SECTION */}

<div className="office-hero">

<h1>Office Network</h1>

<p>
KHWWB delivers its services through a strong statewide field structure ensuring
efficient wage distribution, worker registration and welfare delivery.
</p>

<div className="stats">

<div className="stat-card">
<span>📍</span>
<h3>Head Office</h3>
<p>Ernakulam</p>
</div>

<div className="stat-card">
<span>🏣</span>
<h3>14</h3>
<p>District Offices</p>
</div>

<div className="stat-card">
<span>⚓</span>
<h3>Special Office</h3>
<p>Cochin Port Trust</p>
</div>

<div className="stat-card">
<span>🛍️</span>
<h3>107</h3>
<p>Sub Offices</p>
</div>

</div>
</div>

{/* HEAD OFFICE */}

<div className="head-office-card">

<h2 className="head-title">Head Office</h2>

<div className="head-row">

<div className="head-item">
<span className="head-icon">📍</span>
<div>
<p className="label">Address</p>
<p className="value">
Kerala Headload Workers Welfare Board, Head Office,
Ernakulam, Kerala
</p>
</div>
</div>

<div className="divider"></div>

<div className="head-item">
<span className="head-icon">☎</span>
<div>
<p className="label">Phone</p>
<p className="value">0484-2401990</p>
</div>
</div>

<div className="divider"></div>

<div className="head-item">
<span className="head-icon">✉</span>
<div>
<p className="label">Email</p>
<p className="value">khwwb@kerala.gov.in</p>
</div>
</div>

</div>
</div>


{/* DISTRICT OFFICE LIST */}

<div className="office-header">

<h2>District Offices</h2>

<input
type="text"
placeholder="Search district..."
className="search-bar"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>


<div className="district-container">

{filteredDistricts.map((district,index)=>{

const offices = createDummyOffices(district);

return(

<div key={index}>

<div
className="district-row"
onClick={()=>setActiveDistrict(activeDistrict===index ? null : index)}
>
{district}
</div>

{activeDistrict===index &&(

<div className="table-wrapper">

<table className="office-table">

<thead>
<tr>
<th>Office Name</th>
<th>Address</th>
<th>Phone</th>
<th>Mail ID</th>
</tr>
</thead>

<tbody>

{offices.map((office,i)=>(
<tr key={i}>
<td>{office.name}</td>
<td className="address">{office.address}</td>
<td>{office.phone}</td>
<td>{office.mail}</td>
</tr>
))}

</tbody>

</table>

</div>

)}

</div>

);

})}

</div>

</div>

</>
);

}

export default Officelist;