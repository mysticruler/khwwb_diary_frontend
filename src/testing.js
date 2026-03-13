import Navbar from "./Navbar";
import "./testing.css";

function Testing() {
  return (
    <>
      <Navbar />

      <div className="office-wrapper">

        <div className="main-box">
          123 Offices
        </div>

        <svg className="lines" width="600" height="350">

          {/* 1 */}
          <path className="draw-line v1" d="M150 190 L150 240" />
          <path className="draw-line h1" d="M150 240 L400 240" />

          {/* 2 */}
          <path className="draw-line v2" d="M150 240 L150 290" />
          <path className="draw-line h2" d="M150 290 L400 290" />

          {/* 3 */}
          <path className="draw-line v3" d="M150 290 L150 340" />
          <path className="draw-line h3" d="M150 340 L400 340" />

        </svg>

        <div className="sub-box box1">14 District Offices</div>
        <div className="sub-box box2">108 Sub Offices</div>
        <div className="sub-box box3">1 Special Office (CPTA)</div>

      </div>
    </>
  );
}

export default Testing;