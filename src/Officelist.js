import "./Officelist.css";
import Navbar from "./Navbar";
import { useState } from "react";
import gmap from "./images/gmap.png";

function Officelist() {

    const [activeDistrict, setActiveDistrict] = useState(null);
    const [search, setSearch] = useState("");

    const districts = [
        "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam", "Idukki",
        "Ernakulam", "Thrissur", "Palakkad", "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
    ];

    const createDummyOffices = (district) => {

        if (district === "Thiruvananthapuram") {

            return [

                {
                    name: "Thiruvananthapuram District Office",
                    address: "Khwwb Chalai Collection Centre, Sabhavathy Temple Road, 695036",
                    phone: "9048112847",
                    mail: "wagesheadloadtvpm2023@gmail.com",
                    map: "https://maps.app.goo.gl/e42FR88L1tDurrxD8"
                },

                {
                    name: "Kattakkada Sub Office",
                    address: "Panchayath Building Kattakkada, 695572",
                    phone: "0471-2290266",
                    mail: "khwwbktda@gmail.com",
                    map: "https://maps.app.goo.gl/VTqjnXLj54u9UiT78"
                },

                {
                    name: "Kazhakuttam Sub Office",
                    address: "HR Building, Vadakkumbhagam, 695582",
                    phone: "04712417799",
                    mail: "khwwbkzm@gmail.com",
                    map: "https://maps.app.goo.gl/vbaxoaRHenacF3fY9"
                },

                {
                    name: "Kesavadasapuram Sub Office",
                    address: "TC-12/1966, Opp Mar Ivanios College Main Gate, Nalanchira, Thiruvananthapuram, 695015",
                    phone: "0471-2927902",
                    mail: "khwwbkspm@gmail.com",
                    map: "https://maps.app.goo.gl/zANSqUgsZxrjPHFj8"
                },

                {
                    name: "Nedumangadu Sub Office",
                    address: "4th Floor Old Revenue Tower, Nedumangadu, 695541",
                    phone: "0472-2960678",
                    mail: "khwwbnedumangad@gmail.com",
                    map: "https://maps.app.goo.gl/9J3knukbJ9dkma7m8"
                },

                {
                    name: "Neyyattinkara Sub Office",
                    address: "Thiruvathira Building 2nd Floor, Near Indian Overseas Bank, Neyyattinkara PO, 695121",
                    phone: "04712226117",
                    mail: "khwwbsubofficenta@gmail.com",
                    map: "https://maps.app.goo.gl/NMJ1mGLgS6qJ6emz6"
                },

                {
                    name: "Palode Sub Office",
                    address: "VVV Building, Madathara Road, Palode, 695562",
                    phone: "04722990877",
                    mail: "khwwbpalode@gmail.com",
                    map: "https://maps.app.goo.gl/HT9SgRWxjs39yfn7A"
                },

                {
                    name: "Thiruvananthapuram District Office",
                    address: "Haadi Towers, TC 24/1962, Thycaud PO, 695014",
                    phone: "0471-2577902",
                    mail: "headloadtvpm2016@gmail.com",
                    map: "https://maps.app.goo.gl/kHWrCPScM2fM6LAa7"
                },

                {
                    name: "Varkala Sub Office",
                    address: "2nd Floor Sneha Shopping Complex Near Varkala Municipality, 695141",
                    phone: "-",
                    mail: "khwwbvkla@gmail.com",
                    map: "https://maps.app.goo.gl/iKoP5NC1Gth3gpwQ8"
                },

                {
                    name: "Venjaramood Sub Office",
                    address: "Second Floor, Manikkal Mall, Near KSRTC Bus Stand, Venjaramood, 695607",
                    phone: "0472-2870758",
                    mail: "khwwvjd@gmail.com",
                    map: "https://maps.app.goo.gl/p5NFcGQAhV6vwzso6"
                }

            ];

        }

        let arr = [];

        for (let i = 1; i <= 10; i++) {
            arr.push({
                name: district + " Office " + i,
                address: "Building " + i + ", Market Road, " + district + ", Kerala - 69500" + i,
                phone: "0471 24567" + i,
                mail: "office" + i + "@example.com",
                map: "#"
            });
        }

        return arr;

    };

    const filteredDistricts = districts.filter(d =>
        d.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar />

            <div className="office-container">

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

                <div className="head-office-card">

                    <h2 className="head-title">Head Office</h2>

                    <div className="head-row">

                        <div className="head-item">
                            <a
                                href="https://maps.app.goo.gl/kXLf2G9iw5ScTKme9"
                                target="_blank"
                                rel="noreferrer"
                                className="tesla"
                            >
                                <img src={gmap} alt="Google Map" className="map-icon" />
                            </a>
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

                <div className="office-header">

                    <h2>District Offices</h2>

                    <input
                        type="text"
                        placeholder="Search district..."
                        className="search-bar"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <div className="district-container">

                    {filteredDistricts.map((district, index) => {

                        const offices = createDummyOffices(district);

                        return (

                            <div key={index}>

                                <div
                                    className="district-row"
                                    onClick={() => setActiveDistrict(activeDistrict === index ? null : index)}
                                >
                                    {district}
                                </div>

                                {activeDistrict === index && (

                                    <div className="table-wrapper">

                                        <table className="office-table">

                                            <thead>
                                                <tr>
                                                    <th>Office Name</th>
                                                    <th>Address</th>
                                                    <th>Phone</th>
                                                    <th>Mail ID</th>
                                                    <th>Location<br/>(Click Me)</th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                {offices.map((office, i) => (
                                                    <tr key={i}>
                                                        <td>{office.name}</td>

                                                        <td className="address">
                                                            {office.address}
                                                        </td>

                                                        <td>{office.phone}</td>
                                                        <td>{office.mail}</td>

                                                        <td>
                                                            {office.map && (
                                                                <a
                                                                    href={office.map}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    <img src={gmap} alt="Map" className="bmw" />
                                                                </a>
                                                            )}
                                                        </td>

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