import "./Whoiswho.css";
import Navbar from "./Navbar";
import { useState } from "react";

function Whoiswho() {

const [activeFruit,setActiveFruit] = useState(null);

const fruitDistricts = [

{
name:"Thiruvananthapuram",
chairman:"SANAL A SALAM",
secretary:"REKHA T K",
ao:"JAYALEKSHMI K R"
},

{
name:"Kollam",
chairman:"DEEPA P",
secretary:"REKHA I",
ao:"SINDHU S S"
},

{
name:"Pathanamthitta",
chairman:"SURAJ S",
secretary:"SURESH G",
ao:"SRIJA S"
},

{
name:"Alappuzha",
chairman:"PADMAGIRISH G",
secretary:"SASI R",
ao:"SIMI JOHNSON K"
},

{
name:"Kottayam",
chairman:"SUJITHLAL K S",
secretary:"SALINI RADHA S NAIR",
ao:"GEETHA B"
},

{
name:"Idukki",
chairman:"SREEDEVI S",
secretary:"BAIJU BABU",
ao:"ELISHA T R"
},

{
name:"Ernakulam",
chairman:"BIJUMON P N",
secretary:"VANAJA V R",
ao:"VANAJA V R"
},

{
name:"Thrissur",
chairman:"JOVIN",
secretary:"SEENATH T K",
ao:"SALISH KUMAR"
},

{
name:"Palakkad",
chairman:"ANIL SAM P S",
secretary:"PRABHAT M P",
ao:"SUNITHA O G"
},

{
name:"Malappuram",
chairman:"JAYAPRAKASH NARAYANAN K",
secretary:"RAGHAVAN",
ao:"RAJESH S"
},

{
name:"Kozhikode",
chairman:"SINI M",
secretary:"ANILKUMAR P D",
ao:"J JAYAPRAKASH"
},

{
name:"Wayanad",
chairman:"DILEEP CHANDRAN C",
secretary:"ANISH V A",
ao:"DILEEP CHANDRAN C"
},

{
name:"Kannur",
chairman:"JAYESH G",
secretary:"SAJITH CHIRAYIL",
ao:"LILLY PUTHUSSERY KOROTH"
},

{
name:"Kasaragod",
chairman:"SABISHA V",
secretary:"MANOJ K",
ao:"LILLY PUTHUSSERY KOROTH"
}

];

const toggleFruit = (district)=>{
setActiveFruit(activeFruit===district ? null : district);
};

return(
<>

<Navbar/>

<div className="apple-container">

<h1 className="mango-title">Administrative Hierarchy</h1>


{/* CEO */}

<div className="banana-card">

<h2>Chief Executive Officer</h2>

<p className="orange-name">K. Sreelal, Additional Labour Commissioner</p>

<p className="grape-desc">

The Chief Executive Officer is the principal administrative head of the Kerala Headload Workers Welfare Board. The Government may appoint an officer of the Labour Department not below the rank of Joint Labour Commissioner.

</p>

</div>


<div className="pine-line"></div>


{/* FO AND SECRETARY */}

<div className="melon-row">

<div className="kiwi-card">

<h3>Finance Officer</h3>

<p className="orange-name">T N MUHAMMAD SHAFEEK<br /> JOINT SECRETARY,FINANCE</p>

<p className="grape-desc">

The Finance Officer, appointed by Government not below the rank of Deputy Secretary in the Finance Department, manages all financial and accounting matters of the Board under the supervision of the Chief Executive Officer and prepares budgets and ensures proper financial control and accountability and transparency.</p>

</div>

<div className="kiwi-card">

<h3>Secretary</h3>

<p className="orange-name">Vinod Kumar P.G<br /> Deputy Labour Commissioner</p>

<p className="grape-desc">

The Secretary, appointed by Government not below the rank of Deputy Labour Commissioner in the Labour Department, supervises implementation of schemes under the Act, assists the Chief Executive Officer in administration of the Board and District Committees, and exercises delegated administrative and financial powers.

</p>

</div>

</div>


{/* AO SECTION */}

<div className="papaya-section">

<h2 className="peach-heading">Accounts Officers</h2>

<p className="grape-desc plum-text">

The Board has five Accounts Officers handling the Establishment, Finance, Schemes, Audit, and Scattered Workers sections. They correspond with the Board and other offices on routine finance, accounts, and audit matters, prepare and process related records, and sign fair copies of communications approved by the Chief Executive Officer.
</p>

<div className="berry-row">

<div className="coconut-tile">
AO Establishment
<p>SHANUJA SS</p>
</div>

<div className="coconut-tile">
AO Finance
<p>JANCY PT</p>
</div>

<div className="coconut-tile">
AO SCATTRED
<p>BINDU KA</p>
</div>

<div className="coconut-tile">
AO Schemes
<p>SAIYED SINNY SA VAHEED</p>
</div>

<div className="coconut-tile">
AO Audit
<p>MALINI J.V</p>
</div>

</div>

</div>



{/* DISTRICT SECTION */}

<div className="dragonfruit-section">

<h2 className="peach-heading">District Offices</h2>

<p className="dragon-intro">

The District Committee consists of a Chairman, Secretary, and Accounts Officer. The Chairman exercises overall supervision and control over the officers and staff of the District Committee. The Secretary assists the Chairman in managing the general administration and coordinating day-to-day office functions. The Accounts Officer handles financial, accounts, and audit matters, corresponds with the Board office on routine financial issues, and signs fair copies of communications approved by the Chairman.

</p>


<div className="lychee-container">

{fruitDistricts.map((district)=>(

<div key={district.name} className="guava-row">

<div
className="jackfruit-header"
onClick={()=>toggleFruit(district.name)}
>

{district.name}

</div>


{activeFruit===district.name &&(

<div className="durian-expand">

<div className="avocado-card">

<b>District Chairman</b>
<p>{district.chairman}</p>

</div>

<div className="avocado-card">

<b>District Secretary</b>
<p>{district.secretary}</p>

</div>

<div className="avocado-card">

<b>District Accounts Officer</b>
<p>{district.ao}</p>

</div>

</div>

)}

</div>

))}

</div>

</div>

</div>

</>

);

}

export default Whoiswho;