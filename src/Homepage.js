<<<<<<< HEAD
import { useState } from "react";
import "./Homepage.css";
=======
import { useEffect, useState, useRef } from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";



import "./Homepage.css";
import PVS from "./images/PVS.png";
import VSK from "./images/VSK.png";
import KSL from "./images/KSL.png";
import AR from "./images/AR.png";
// import BGintro from "./images/BGintro.mp4";
import logo from "./images/lolo.png";


import indiaGov from "./images/indiagov.jpg";
import keralaGov from "./images/keralagov.jpg";
import keralaCovid from "./images/keralabattlescovid.jpg";
import labourMinistry from "./images/ministry-labour.jpg";
import thozhilali from "./images/TS-1.png";
import cmoKerala from "./images/cmo-kerala.jpg";
import kcis from "./images/k-cis.jpg";
import aalay from "./images/aalay.jpg";
import chiak from "./images/chiak.jpg";
import bhavanam from "./images/bhavanam.jpg";
import psc from "./images/psc.png";
import kcm from "./images/keralacm.png";


import androidBanner from "./images/android.PNG";
import iosBanner from "./images/ios.PNG";

import AnimatedNumber from "./AnimatedNumber";


import hero2 from "./images/hero3.png";


import MediaShowcase from "./MediaShowcase";





>>>>>>> 297c1ee7ef3aa3c9c0627c137ee30e561b0a43fb

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

<<<<<<< HEAD
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
=======
  // const [showIntro, setShowIntro] = useState(true);
  // const [fadeOut, setFadeOut] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showOverlay, setShowOverlay] = useState(false);




  const newsItems = [
    { text: "Subject: SCATTERED QUOTATION NOTICE", isNew: true },
    { text: "Welfare Details 2024", isNew: true },
    { text: "IT MANAGER - RANKL LIST", isNew: false },
    { text: "SCATTERED AUDIT C A QUATATION", isNew: false },
    { text: "IT Manager Vacancy", isNew: false },
    { text: "ഓഡിറ്റ് കൊട്ടെഷൻ നോട്ടീസ്", isNew: false },
    { text: "FINAL SENIORITY LIST-LDC as on 01-02-2023", isNew: false },
    { text: "K-FONE NEW TENDER NOTICE 2026", isNew: false },
    { text: "BOARD VACANCY 2026", isNew: true },
    { text: "TENDER NOTICE BOARD INTERNET", isNew: false },
    { text: "BOARD MEETING FEB-2026", isNew: true }
  ];


  const wrapperRef = useRef(null);
  const tickerRef = useRef(null);
  const graphRef = useRef(null);


  // useEffect(() => {
  //   document.body.classList.add("intro-active");

  //   // Start fading video
  //   const fadeTimer = setTimeout(() => {
  //     setFadeOut(true);
  //   }, 3500);

  //   // Show PNG when fade starts
  //   const overlayTimer = setTimeout(() => {
  //     setShowOverlay(true);
  //   }, 3500);

  //   // Remove video completely
  //   const removeTimer = setTimeout(() => {
  //     setShowIntro(false);
  //     document.body.classList.remove("intro-active");
  //   }, 4500);

  //   return () => {
  //     clearTimeout(fadeTimer);
  //     clearTimeout(overlayTimer);
  //     clearTimeout(removeTimer);
  //   };
  // }, []);





  useEffect(() => {
    const section = document.getElementById("mottos");
    const items = Array.from(document.querySelectorAll(".motto-wrap"));

    let lastScrollY = window.scrollY;
    let activeCount = 0;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // start animation as soon as section enters
      const start = vh * 0.75;
      const end = vh * 0.25;

      const progress = Math.min(
        Math.max((start - rect.top) / (start - end), 0),
        1
      );

      const targetCount = Math.floor(progress * items.length);
      const scrollingDown = window.scrollY > lastScrollY;

      if (scrollingDown) {
        // 1 → 2 → 3 → 4
        while (activeCount < targetCount) {
          items[activeCount]?.classList.add("active");
          activeCount++;
        }
      } else {
        // 4 → 3 → 2 → 1
        while (activeCount > targetCount) {
          activeCount--;
          items[activeCount]?.classList.remove("active");
        }
      }

      lastScrollY = window.scrollY;
>>>>>>> 297c1ee7ef3aa3c9c0627c137ee30e561b0a43fb
    };

    try {
      const res = await fetch("http://localhost:5000/add-visitor", {
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

<<<<<<< HEAD
        <div className="header">
          <h1 className="title">
            KERALA HEADLOAD WORKERS WELFARE BOARD VISITORS DIARY
          </h1>
=======


      {/* {showIntro && (
        <div className={`video-intro ${fadeOut ? "hide" : ""}`}>
          <video
            src={BGintro}
            autoPlay
            muted
            playsInline
          />
        </div>
      )} */}

      <h6 className="emg">
        TOLL FREE NUMBER : 1800 4253 545 |

        <a href="/en" className="lang-btn active">English</a>

        <a href="/ml" className="lang-btn">മലയാളം</a>
      </h6>

      {/* NAVBAR */}
      <nav className="navbar glass">
        <div className="logo">
          <img src={logo} alt="KHWWB Logo" className="logo-img" />
          <span className="shiny-text">KERALA HEADLOAD WORKERS WELFARE BOARD</span>
>>>>>>> 297c1ee7ef3aa3c9c0627c137ee30e561b0a43fb
        </div>

        <div className="form-wrapper">
          <div className="form-row">

<<<<<<< HEAD
            <div className="field">
              <label>PHONE</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
=======
        <ul className="nav-links">
          <li className="nav-item">Home</li>

          <li className="nav-item dropdown">
            About Us
            <div className="dropdown-menu glass">
              <span>Board</span>
              <span><Link to="/governing-body">Governing Body</Link></span>
              <span><Link to="/Whoiswho">Administrative Hierarchy</Link></span>

              {/* Schemes with submenu */}
              <div className="submenu-wrapper">
                <span className="submenu-title">Schemes ▸</span>

                <div className="submenu glass">

                  <span>
                    <Link to="/schemes/unattached">Unattached Scheme</Link>
                  </span>

                  <span>
                    <Link to="/schemes/scattered">Scattered Scheme</Link>
                  </span>

                  <span>
                    <Link to="/schemes/attached">Attached Scheme</Link>
                  </span>

                </div>
              </div>

              <span><Link to="/Officelist">Office Details</Link></span>
            </div>
          </li>

          <li className="nav-item dropdown">
            Documents
            <div className="dropdown-menu glass">

              {/* Act and Rules submenu */}
              <div className="submenu-wrapper">
                <span className="submenu-title">Act & Rules ▸</span>
                <div className="submenu glass">
                  <span>Act & Rules</span>
                  <span>Circular</span>
                  <span>Orders</span>
                </div>
              </div>

              <span>Whats New?</span>
              <span>Archives</span>
              <span>Coolie Pattika</span>

              {/* Workers submenu */}
              <div className="submenu-wrapper">
                <span className="submenu-title">Workers ▸</span>
                <div className="submenu glass">
                  <span>Forms</span>
                  <span>Welfare Details</span>
                </div>
              </div>

              {/* Employers submenu */}
              <div className="submenu-wrapper">
                <span className="submenu-title">Board Staff ▸</span>
                <div className="submenu glass">
                  <span>CPF Rules</span>
                  <span>Staff Rules</span>
                  <span>Forms</span>
                  <span>Pay Revision</span>
                  <span>D.A</span>
                  <span>seniority list</span>
                  <span>Others</span>
                </div>
              </div>

              <span>Employer</span>
              <span>Forms</span>
              <span>Tender & Notices</span>
              <span>Welfare Details Unattached</span>
              <span>Welfare Details Scattered</span>
>>>>>>> 297c1ee7ef3aa3c9c0627c137ee30e561b0a43fb

            <div className="field">
              <label>NAME</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>

<<<<<<< HEAD
            <div className="field">
              <label>VISITORS</label>
              <div className="counter">
                <button onClick={() => setVisitors(Math.max(1, visitors - 1))}>-</button>
                <span>{visitors}</span>
                <button onClick={() => setVisitors(visitors + 1)}>+</button>
=======
          <li className="nav-item dropdown">
            RTI
            <div className="dropdown-menu glass">
              <span>RTI Act</span>
              <span>Online RTI Application</span>
              <span>List Of Officials</span>
            </div>
          </li>

          <li className="nav-item dropdown">
            Online Services
            <div className="dropdown-menu glass">
              <span>Grievance Redressal</span>
              <span>Worker Request</span>
              <span>Online Welfare Application</span>
              <span>Online Payment</span>


            </div>
          </li>

          <li className="search-li">
            <button className="nav-search-icon" aria-label="Search">🔍</button>
          </li>
        </ul>






        <div
          className="login-wrapper"
          onMouseLeave={() => setShowLogin(false)}
        >
          <button
            className="login-btn"
            onClick={() => setShowLogin(prev => !prev)}
          >
            Login
          </button>

          {showLogin && (
            <div className="login-popup glass">
              <p>Worker Login</p>
              <p>Employer Login</p>
              <p>Admin Login</p>
            </div>
          )}
        </div>


      </nav>

      {/* HERO */}

      <section className="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url(${hero2})`,
            "--hero-x": "50%",
            "--hero-y": "100%",
            "--hero-zoom": "1.8",
          }}
        ></div>



      </section>



      {/* QUICK SERVICES */}
      <section >

        <section className="quick-services compact">
          <div className="quick-header">
            <h2 className="quick-title">QUICK SERVICES</h2>

            <form className="quick-search inline">
              <div className="search-pill glass">
                <span className="search-icon">🔍</span>
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search services..."
                />
              </div>
            </form>
          </div>



          <div className="quick-grid">

            {/* Complaint Management */}
            <div className="quick-card glass motion-tile">
              <div className="icon-wrap complaint">
                ⚠️
                <span className="ripple"></span>
                <span className="ripple delay"></span>
              </div>
              <div className="tile-text">
                <span>Complaint</span>
                <strong>Management</strong>
>>>>>>> 297c1ee7ef3aa3c9c0627c137ee30e561b0a43fb
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

<<<<<<< HEAD
      </div>
    </>
=======

      </section>

      {/* ===================== GOOGLE MAP + QUICK LINKS ===================== */}
      <section className="map-section">
        <div className="map-and-links container">

          {/* LEFT: MAP */}
          <div className="map-card">

            <h3>HEAD OFFICE LOCATION</h3>

            <div className="map-wrapper">
              <iframe
                title="KHWWB Head Office"
                src="https://www.google.com/maps?q=Kerala+Headload+Workers+Welfare+Board+SRM+Road+Ernakulam&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT: IMPORTANT LINKS */}
          <aside className="links-card">
            <h3 className="links-title">IMPORTANT LINKS</h3>

            <div className="links-grid important-links">
              <a href="https://www.india.gov.in/" target="_blank" rel="noreferrer">
                <img src={indiaGov} alt="India Government" />
              </a>

              <a href="https://www.kerala.gov.in/" target="_blank" rel="noreferrer">
                <img src={keralaGov} alt="Kerala Government" />
              </a>

              <a href="https://keralabattlescovid.in/" target="_blank" rel="noreferrer">
                <img src={keralaCovid} alt="Kerala Battles Covid" />
              </a>

              <a href="https://labour.gov.in/" target="_blank" rel="noreferrer">
                <img src={labourMinistry} alt="Ministry of Labour" />
              </a>

              <a href="https://thozhilalishreshta.lc.kerala.gov.in/" target="_blank" rel="noreferrer">
                <img src={thozhilali} alt="Thozhilali Shreshta" />
              </a>

              <a href="http://cmo.kerala.gov.in/" target="_blank" rel="noreferrer">
                <img src={cmoKerala} alt="CMO Kerala" />
              </a>

              <a href="https://kcis.kerala.gov.in/login.php" target="_blank" rel="noreferrer">
                <img src={kcis} alt="KCIS" />
              </a>

              <a href="https://lcas.lc.kerala.gov.in/office/aalay/" target="_blank" rel="noreferrer">
                <img src={aalay} alt="Aalay Portal" />
              </a>

              <a href="http://www.chiak.org/" target="_blank" rel="noreferrer">
                <img src={chiak} alt="CHIAK" />
              </a>

              <a href="https://bfk.kerala.gov.in" target="_blank" rel="noreferrer">
                <img src={bhavanam} alt="Bhavanam Foundation" />
              </a>

              <a href="https://thulasi.psc.kerala.gov.in/thulasi/" target="_blank" rel="noreferrer">
                <img src={psc} alt="PSC" />
              </a>

              <a href="https://keralacm.gov.in/" target="_blank" rel="noreferrer">
                <img src={kcm} alt="kerala cm" />
              </a>




            </div>


          </aside>

        </div>
      </section>


      {/* ===================== DOWNLOAD BANNERS ===================== */}
      <section className="download-banners">
        <div className="banner-wrapper">

          {/* Android – from left */}
          <img
            src={androidBanner}
            alt="Download Android App"
            className="download-banner banner-left"
          />

          {/* iOS – from right */}
          <img
            src={iosBanner}
            alt="Download iOS App"
            className="download-banner banner-right"
          />

        </div>
      </section>


      {/* ===================== FOOTER ===================== */}
      <footer className="footer glass-footer">
        <div className="footer-container">

          <div className="footer-grid">

            {/* Column 1 */}
            <div className="footer-col">
              <h3>Head Load Workers Welfare Board</h3>
              <p>
                Empowering Kerala's head load workers through comprehensive digital
                solutions and welfare services.
              </p>

              <div className="footer-socials">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                <a href="https://www.x.com" target="_blank" rel="noreferrer"><FaXTwitter /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
              </div>

            </div>

            {/* Column 2 */}
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Office Login</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="footer-col">
              <h3>Services</h3>
              <ul>
                <li>Worker Registration</li>
                <li>Benefits Claim</li>
                <li>Document Verification</li>
                <li>Help & Support</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="footer-col">
              <h3>Contact Info</h3>
              <ul className="footer-contact">
                <li>📍 Thiruvananthapuram, Kerala</li>
                <li>📞 +91 471 1234567</li>
                <li>✉️ info@hlwwb.kerala.gov.in</li>
                <li>⏰ Mon–Fri: 9:00 AM – 5:00 PM</li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            © 2026 Head Load Workers Welfare Board, Kerala. All rights reserved.
          </div>

        </div>
      </footer>


    </div>
>>>>>>> 297c1ee7ef3aa3c9c0627c137ee30e561b0a43fb
  );
}

export default Homepage;