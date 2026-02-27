
import "./governingBody.css";
import Navbar from "./Navbar";
import mee from "./images/mee.jpg";   // 👈 your image path













function GoverningBody() {

  const members = [
    { sl: 1, name: "Shri.R.Ramachandran", desig: "Board Chairman", phone: "9447040901", email: "" },
    { sl: 2, name: "Shri.V.K.C.Mammad Koya (ex.MLA)", desig: "Board Member", phone: "9847002412", email: "" },
    { sl: 3, name: "Shri.C.Nazar", desig: "Board Member", phone: "9495641380", email: "" },
    { sl: 4, name: "Shri.Vallanchira Abdul Majeed", desig: "Board Member", phone: "9567000069", email: "" },
    { sl: 5, name: "Shri.K.Velu", desig: "Board Member", phone: "9446727811", email: "" },
    { sl: 6, name: "Shri.A.K.Hafees", desig: "Board Member", phone: "9447075070", email: "" },
    { sl: 7, name: "Shri.Raju Apsara", desig: "Board Member", phone: "9446382363", email: "" },
    { sl: 8, name: "Shri.Binny Immatty", desig: "Board Member", phone: "9447737793", email: "" },
    { sl: 9, name: "Shri.V.Gopinathan", desig: "Board Member", phone: "9895444695", email: "" },
    { sl: 10, name: "Shri.Ahammad Sherif", desig: "Board Member", phone: "9447089734", email: "" },
    { sl: 11, name: "Shri.D.Lal", desig: "Board Member", phone: "9447130687", email: "" },
    { sl: 12, name: "Shri.R.H.Biju", desig: "Board Member", phone: "9495011122", email: "" },
    { sl: 13, name: "Shri.Renjith.P.Manohar", desig: "Board Member", phone: "9447103056", email: "" },
    { sl: 14, name: "Smt.Sreelatha.M", desig: "Board Member", phone: "9388192798", email: "" },
    { sl: 15, name: "Shri.K.Sreelal", desig: "Chief Executive", phone: "9447326643", email: "" }
  ];

  return (
    <>
      {/* ✅ COMMON NAVBAR */}
      <Navbar />

      {/* ✅ PAGE CONTENT */}
      <div className="gb-container page-top-space">

        <div className="gb-header-box">

  <div className="gb-title-row">
  
  <h1 className="gb-title">GOVERNING BODY</h1>
  
</div>

  <p className="gb-description">
    The Governing Body of the Kerala Headload Workers Welfare Board is called the Board.
    It is constituted by the Government of Kerala under the Kerala Headload Workers Act, 1978,
    and all members are appointed by the Government by notification in the Gazette.
    The Board consists of fifteen members including the Chairman, comprising five representatives
    of employers, five representatives of headload workers and five representatives of the Government.
    The Board administers and implements the functions and welfare schemes of the Welfare Board in
    accordance with the provisions of the Act and the Rules.
  </p>

</div>

        <div className="gb-table">

          <div className="gb-row gb-header">
            <div>Sl.No</div>
            <div>Name</div>
            <div>Designation</div>
            <div>Mobile</div>
            <div>Email</div>
          </div>

          {members.map((m) => (
            <div className="gb-row" key={m.sl}>
              <div>{m.sl}</div>
              <div>{m.name}</div>
              <div>{m.desig}</div>
              <div>{m.phone}</div>
              <div>{m.email || "-"}</div>
            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default GoverningBody;