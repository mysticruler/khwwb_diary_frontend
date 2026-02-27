import { useEffect, useState, useRef } from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";



import "./Homepage.css";
import PVS from "./images/PVS.png";
import VSK from "./images/VSK.png";
import KSL from "./images/KSL.png";
import AR from "./images/AR.png";
import BGintro from "./images/BGintro.mp4";
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






function Homepage() {
  const [showLogin, setShowLogin] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);

  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
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


  useEffect(() => {
    document.body.classList.add("intro-active");

    // Start fading video
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    // Show PNG when fade starts
    const overlayTimer = setTimeout(() => {
      setShowOverlay(true);
    }, 3500);

    // Remove video completely
    const removeTimer = setTimeout(() => {
      setShowIntro(false);
      document.body.classList.remove("intro-active");
    }, 4500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(overlayTimer);
      clearTimeout(removeTimer);
    };
  }, []);





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
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);




  useEffect(() => {
    const wrapper = wrapperRef.current;
    const ticker = tickerRef.current;

    if (!wrapper || !ticker) return;

    const GAP = 30; // space before restart (px)
    const SPEED = 2; // pixels per frame (adjust)

    let y = wrapper.offsetHeight;

    function animate() {
      y -= SPEED;

      // when ALL news + gap is gone → restart
      if (y <= -ticker.offsetHeight - GAP) {
        y = wrapper.offsetHeight;
      }

      ticker.style.transform = `translateY(${y}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  useEffect(() => {
    if (!hasScrolled) return;

    const section = graphRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("animate");
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasScrolled]);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setHasScrolled(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);





  return (
    <div className="homepage">



      {showIntro && (
        <div className={`video-intro ${fadeOut ? "hide" : ""}`}>
          <video
            src={BGintro}
            autoPlay
            muted
            playsInline
          />
        </div>
      )}

      <h6 className="emg">
        TOLL FREE NUMBER : 0484-2401990 | Language :
        <a href="/en" className="lang-link"> English </a> |
        <a href="/ml" className="lang-link"> മലയാളം </a>
      </h6>

      {/* NAVBAR */}
      <nav className="navbar glass">
        <div className="logo">
          <img src={logo} alt="KHWWB Logo" className="logo-img" />
          <span className="shiny-text">KERALA HEADLOAD WORKERS WELFARE BOARD</span>
        </div>


        <ul className="nav-links">
          <li className="nav-item">Home</li>

          <li className="nav-item dropdown">
            About Us
            <div className="dropdown-menu glass">
              <span>Board</span>
              <span><Link to="/governing-body">Governing Body</Link></span>
              <span>Who is Who?</span>

              {/* Schemes with submenu */}
              <div className="submenu-wrapper">
                <span className="submenu-title">Schemes ▸</span>
                <div className="submenu glass">
                  <span>Unattached Scheme</span>
                  <span>Scattered Scheme</span>
                  <span>Attached Scheme</span>
                </div>
              </div>

              <span>Office Details</span>
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

            </div>
          </li>

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
              <span>Complaint Management System</span>
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
              </div>
            </div>

            {/* Worker Request */}
            <div className="quick-card glass motion-tile">
              <div className="icon-wrap worker">
                👷
              </div>
              <div className="tile-text">
                <span>Worker</span>
                <strong>Request</strong>
              </div>
            </div>

            {/* Online Payment */}
            <div className="quick-card glass motion-tile">
              <div className="icon-wrap payment">
                💳
              </div>
              <div className="tile-text">
                <span>Online</span>
                <strong>Payment</strong>
              </div>
            </div>

            {/* Office Locator */}
            <div className="quick-card glass motion-tile">
              <div className="icon-wrap locator">
                📍
              </div>
              <div className="tile-text">
                <span>Office</span>
                <strong>Locator</strong>
              </div>
            </div>

            {/* Application Status */}
            <div className="quick-card glass motion-tile">
              <div className="icon-wrap status">
                📄
                <span className="dot d1"></span>
                <span className="dot d2"></span>
                <span className="dot d3"></span>
              </div>
              <div className="tile-text">
                <span>Application</span>
                <strong>Status</strong>
              </div>
            </div>

          </div>
        </section>


      </section>

      {/* SERVICES */}
      <section>
        <h2>OUR SERVICES</h2>

        {/* HEADERS */}
        <div className="service-header">
          <div className="h workers">Workers</div>
          <div className="h employees">Employer</div>
          <div className="h public">Public</div>
        </div>

        {/* GRID */}
        <div className="service-grid">
          {/* ROW 1 */}
          <div className="service-card workers glass">New Worker Registration</div>
          <div className="service-card workers glass">Worker Login</div>
          <div className="service-card employees glass">New Employer Registration</div>
          <div className="service-card public glass">Complaint Management System</div>



          {/* ROW 2 */}
          <div className="service-card workers glass">Marriage Benefits</div>
          <div className="service-card workers glass">Loan & Advance</div>
          <div className="service-card employees glass">Employer Login</div>
          <div className="service-card public glass">Worker Request</div>



          {/* ROW 3 */}
          <div className="service-card workers glass">Pension</div>
          <div className="service-card workers glass">Medical</div>
          <div className="service-card employees glass">Online Payment</div>
          <div className="service-card public glass">Locate US</div>


        </div>
      </section>




      <section className="leaders">
        <h2>OUR LEADERS</h2>

        <div className="leaders-main">

          <div className="leader-tile">
            <div className="leader-img-wrap">
              <img src={PVS} alt="Shri. P. V. Suresh" className="leader-img" />
            </div>
            <div className="leader-info">
              <h4>Shri. Pinarayi Vijayan</h4>
              <p>Chief minister of Kerala</p>
            </div>
          </div>

          <div className="leader-tile">
            <div className="leader-img-wrap">
              <img src={VSK} alt="Shri. V. S. Kumar" className="leader-img" />
            </div>
            <div className="leader-info">
              <h4>Shri. V. Sivankutty</h4>
              <p>Minister for Education and Labour</p>
            </div>
          </div>

          <div className="leader-tile">
            <div className="leader-img-wrap">
              <img src={AR} alt="Shri. A. Raghavan" className="leader-img" />
            </div>
            <div className="leader-info">
              <h4>Shri.Attingal Ramachandran</h4>
              <p>KHWWB CHAIRMAN</p>
            </div>
          </div>

          <div className="leader-tile">
            <div className="leader-img-wrap">
              <img src={KSL} alt="Shri. K. S. Lal" className="leader-img" />
            </div>
            <div className="leader-info">
              <h4>Shri. K. Sree. Lal</h4>
              <p>Chief executive officer KHWWB</p>
            </div>
          </div>

        </div>
      </section>



      {/* KHWWB ABOUT */}
      <section className="about-board">
        <h2>KHWWB</h2>
        <p className="about-desc">The Head Load Workers Welfare Board (HLWWB) is a statutory body established by the Government of Kerala to ensure the welfare and social security of head load workers across the state.

          Our digital platform revolutionizes the way welfare services are delivered, making them more accessible, efficient, and transparent for all stakeholders.

          We are committed to empowering Kerala's head load workers through technology-driven solutions that enhance their quality of life and ensure their rights are protected.
        </p>

        <div className="stats">
          <div className="stat-card glass">
            <AnimatedNumber value={123} showPlus={false} />
            <p>Offices</p>
          </div>

          <div className="stat-card glass">
            <AnimatedNumber value={16000} />
            <p>Registered Employers</p>
          </div>

          <div className="stat-card glass">
            <AnimatedNumber value={38000} />
            <p>Unattached Workers</p>
          </div>

          <div className="stat-card glass">
            <AnimatedNumber value={9000} />
            <p>Scattered Workers</p>
          </div>

          <div className="stat-card glass">
            <AnimatedNumber value={15000} />
            <p>Pensioners</p>
          </div>
        </div>

      </section>




      <section className="mottos-section" id="mottos">
        <h2 className="mottos-title">OUR MOTTO</h2>

        <div className="mottos-list">
          <div className="motto-wrap left">
            <div className="motto-card glass">
              Empowering Workers Through Technology
            </div>
          </div>

          <div className="motto-wrap right">
            <div className="motto-card glass">
              Transparency in Welfare Delivery
            </div>
          </div>

          <div className="motto-wrap left">
            <div className="motto-card glass">
              Efficiency, Equity & Accountability
            </div>
          </div>

          <div className="motto-wrap right">
            <div className="motto-card glass">
              Securing the Future of Labour
            </div>
          </div>
        </div>
      </section>








      {/* GRAPH SECTION */}
      <section ref={graphRef} className="graph-section">
        <h2 className="graph-title">PERFORMANCE OVERVIEW</h2>

        <div className="graph-grid">

          {/* BAR GRAPH */}
          <div className="graph-card glass">
            <h4>Worker Distribution</h4>

            <div className="bar-graph">
              <span style={{ "--h": "70%" }} />
              <span style={{ "--h": "50%" }} />
              <span style={{ "--h": "85%" }} />
              <span style={{ "--h": "60%" }} />
              <span style={{ "--h": "40%" }} />
            </div>
          </div>

          {/* ARROW BAR GRAPH */}
          <div className="graph-card glass">
            <h4>Welfare Distribution</h4>

            <div className="arrow-bar-graph">
              <div className="bars">
                <span style={{ "--h": "40%" }} />
                <span style={{ "--h": "55%" }} />
                <span style={{ "--h": "70%" }} />
                <span style={{ "--h": "85%" }} />
                <span style={{ "--h": "100%" }} />
              </div>

              <svg className="trend-arrow" viewBox="0 0 300 150">
                <polyline
                  points="10,120 70,90 130,100 190,60 250,30"
                />
                <polygon points="245,20 275,30 255,50" />
              </svg>
            </div>
          </div>

          {/* DONUT GRAPH */}
          <div className="graph-card glass">
            <h4>Welfare Split-Up</h4>

            <div className="donut-graph">
              <span />
              <div className="donut-center">100%</div>
            </div>
          </div>

        </div>
      </section>



      {/* MEDIA + NEWS */}
      <section className="media-news">
        <MediaShowcase />



        <div className="news-right glass">
          <h3>LATEST NEWS</h3>

          <div className="news-ticker-wrapper" ref={wrapperRef}>
            <ul className="news-ticker" ref={tickerRef}>
              {newsItems.map((item, index) => (
                <li key={index} className="news-item">
                  {item.isNew && <span className="new-badge">NEW</span>}
                  <span className="news-text">
                    {item.text}
                    {item.isNew && <span className="news-alert">NEW</span>}
                  </span>

                </li>
              ))}
            </ul>

          </div>
        </div>


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
  );
}

export default Homepage;
