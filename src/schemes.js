import Navbar from "./Navbar";
import "./schemes.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function Sschemes() {

const { type } = useParams();
const [activeScheme, setActiveScheme] = useState(type || "unattached");

const [category, setCategory] = useState("all");
const [keyword, setKeyword] = useState("");
const [search, setSearch] = useState("");
const [openTile, setOpenTile] = useState(null);
const [openSection, setOpenSection] = useState(null);

useEffect(()=>{
setActiveScheme(type || "unattached");
},[type])

const welfareData = [
{
id:1,
name:"Medical Assistance",
amount:"₹ 5000",
type:"worker",
keyword:"medical",
eligibility:[
"Worker must be registered",
"Minimum 1 year membership"
],
documents:[
"Medical bills",
"Hospital certificate"
],
others:[
"Amount depends on hospital expense"
]
},

{
id:2,
name:"Death Benefit",
amount:"₹ 25000",
type:"family",
keyword:"death",
eligibility:[
"Registered worker death",
"Family member claim within 6 months"
],
documents:[
"Death certificate",
"Worker ID card"
],
others:[
"Immediate relief payment"
]
},

{
id:3,
name:"Education Scholarship",
amount:"₹ 10000",
type:"children",
keyword:"education",
eligibility:[
"Child of registered worker",
"Minimum marks requirement"
],
documents:[
"Marklist",
"School certificate"
],
others:[
"Once per academic year"
]
},

{
id:4,
name:"Pension Scheme",
amount:"₹ 3000 / month",
type:"worker",
keyword:"pension",
eligibility:[
"Worker age above 60",
"Minimum 10 years contribution"
],
documents:[
"Age proof",
"Contribution record"
],
others:[
"Paid monthly"
]
}

];

const filteredSchemes = welfareData.filter((item)=>{

return(
(category === "all" || item.type === category) &&
item.name.toLowerCase().includes(search.toLowerCase()) &&
(keyword === "" || item.keyword === keyword)
)

});

const toggleTile = (id)=>{
setOpenTile(openTile === id ? null : id);
setOpenSection(null);
}

const toggleSection = (section)=>{
setOpenSection(openSection === section ? null : section);
}

const toggleCategory = (type)=>{
setCategory(category === type ? "all" : type);
}

return (
<>
<Navbar />

<div className="scheme-container">

<div className="scheme-tabs">

<button
className={activeScheme==="unattached"?"active":""}
onClick={()=>setActiveScheme("unattached")}
>
Unattached Scheme
</button>

<button
className={activeScheme==="scattered"?"active":""}
onClick={()=>setActiveScheme("scattered")}
>
Scattered Scheme
</button>

<button
className={activeScheme==="attached"?"active":""}
onClick={()=>setActiveScheme("attached")}
>
Attached Scheme
</button>

</div>


<div className="scheme-description">

{activeScheme==="unattached" &&
<p>
This is the principal scheme of the Board covering unattached headload workers who are organised into functional groups known as pools under the respective Sub Offices and District Offices. Employers remit wages along with the prescribed welfare levy to the concerned office for the work executed by the workers, and the Board distributes monthly wages based on recorded attendance. Workers registered under this scheme are eligible for comprehensive welfare measures including pension, medical assistance, educational support, financial aid, housing assistance and other social security benefits for themselves and their families. The scheme ensures regulated employment, job security and a transparent wage distribution system.</p>}

{activeScheme==="scattered" &&
<p>
This scheme is intended for headload workers who are not included in the pool system. Workers registered under this scheme remit a monthly contribution at the rate fixed by the Board from time to time and are not part of the monthly wage distribution mechanism. They are eligible for specified welfare benefits under the scheme. Pension to these workers is funded by the Government and disbursed through the Board as per the scheme provisions. The scheme provides social security coverage to workers engaged independently in different sectors.</p>}

{activeScheme==="attached" &&
<p>
This scheme covers headload workers attached to specific establishments. Workers registered under this scheme receive welfare benefits in accordance with the contributions remitted for them as per the scheme provisions. The scheme ensures social security protection to workers who are engaged on a regular basis under individual employers.</p>}

</div>


<div className="benefit-header">

<h2>Welfare Benefits</h2>

<div className="filters">

<button
className={category==="worker"?"active":""}
onClick={()=>toggleCategory("worker")}
>
Worker
</button>

<button
className={category==="family"?"active":""}
onClick={()=>toggleCategory("family")}
>
Family
</button>

<button
className={category==="children"?"active":""}
onClick={()=>toggleCategory("children")}
>
Children
</button>

<select onChange={(e)=>setKeyword(e.target.value)}>

<option value="">All</option>
<option value="pension">Pension</option>
<option value="medical">Medical</option>
<option value="death">Death</option>
<option value="education">Education</option>

</select>

<input
type="text"
placeholder="Search welfare..."
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

</div>


<div className="tiles">

{filteredSchemes.map((item)=>(

<div className="tile" key={item.id}>

<div className="tile-top">

<div className="tile-name">
{item.name}
</div>

<div className="tile-amount">
{item.amount}
</div>

<button className="apply-btn">
Apply
</button>

</div>

<div className="tile-sub">

<span onClick={()=>{toggleTile(item.id);toggleSection("eligibility")}}>
Eligibility Conditions
</span>

<span onClick={()=>{toggleTile(item.id);toggleSection("documents")}}>
Documents Required
</span>

<span onClick={()=>{toggleTile(item.id);toggleSection("others")}}>
Others
</span>

</div>


{openTile === item.id && openSection==="eligibility" &&

<div className="tile-expand">

<ul>
{item.eligibility.map((e,i)=>(
<li key={i}>{e}</li>
))}
</ul>

</div>

}


{openTile === item.id && openSection==="documents" &&

<div className="tile-expand">

<ul>
{item.documents.map((e,i)=>(
<li key={i}>{e}</li>
))}
</ul>

</div>

}


{openTile === item.id && openSection==="others" &&

<div className="tile-expand">

<ul>
{item.others.map((e,i)=>(
<li key={i}>{e}</li>
))}
</ul>

</div>

}

</div>

))}

</div>

</div>

</>
);

}

export default Sschemes;