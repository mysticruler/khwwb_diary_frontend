import "./Whoiswho.css";
import Navbar from "./Navbar";
import { FaWhatsapp } from "react-icons/fa";

function Whoiswho() {

    const fruitDistricts = [

        {
            name: "Thiruvananthapuram",
            chairman: "SANAL A SALAM",
            chairmanPhone: "9447270813",
            secretary: "REKHA T K",
            secretaryPhone: "9847623269",
            ao: "JAYALAKSHMI K R",
            aoPhone: "9895560135"
        },

        {
            name: "Kollam",
            chairman: "DEEPA P",
            chairmanPhone: "9400522157",
            secretary: "BAIJU BABU",
            secretaryPhone: "9496039628",
            ao: "SINDHU S S",
            aoPhone: "9846730260"
        },

        {
            name: "Pathanamthitta",
            chairman: "SURAJ S",
            chairmanPhone: "9497106367",
            secretary: "SURESH G",
            secretaryPhone: "9495360638",
            ao: "SRIJA S",
            aoPhone: "9961598989"
        },

        {
            name: "Alappuzha",
            chairman: "PADMAGIRISH G",
            chairmanPhone: "8075353081",
            secretary: "SASI R",
            secretaryPhone: "8590292405",
            ao: "SIMI JOHNSON K",
            aoPhone: "9526869306"
        },

        {

            name: "Kottayam",
            chairman: "SUJITHLAL K S",
            chairmanPhone: "9895473444",
            secretary: "SALINI RADHA S NAIR",
            secretaryPhone: "9400621783",
            ao: "GEETHA B",
            aoPhone: "7012187027"

        },

        {
            name: "Idukki",
            chairman: "SREEDEVI S",
            chairmanPhone: "7907319895",
            secretary: "PRAVEEN P SREEDHAR",
            secretaryPhone: "8156873432",
            ao: "ELISHA T R",
            aoPhone: "7560948648"
        },

        {
            name: "Ernakulam",
            chairman: "BIJUMON P N",
            chairmanPhone: "9400334334",
            secretary: "VANAJA V R (IN CHARGE)",
            secretaryPhone: "9495227699",
            ao: "VANAJA V R (A O/HG)",
            aoPhone: "9495227699"
        },

        {
            name: "Thrissur",
            chairman: "RESHMI V V",
            chairmanPhone: "8547655268",
            secretary: "SEENATH T K",
            secretaryPhone: "9747717003",
            ao: "C N SALEESH KUMAR",
            aoPhone: "8921480364"
        },



        {
            name: "Malappuram",
            chairman: "JAYAPRAKASH NARAYANAN K",
            chairmanPhone: "8547655273",
            secretary: "RAGHAVAN",
            secretaryPhone: "8547655294",
            ao: "RAJESH S",
            aoPhone: "9539311490"
        },

        {
            name: "Kozhikode",
            chairman: "SINI M",
            chairmanPhone: "8547596850",
            secretary: "ANILKUMAR P D",
            secretaryPhone: "8547607673",
            ao: "J JAYAPRAKASH",
            aoPhone: "9446014523"
        },

        {
            name: "Wayanad",
            chairman: "SHYJEESH N V",
            chairmanPhone: "9746362935",
            secretary: "BASHEER S P",
            secretaryPhone: "9446778439",
            ao: "DILEEP CHANDRAN C",
            aoPhone: "9446444522"
        },

        {
            name: "Kannur",
            chairman: "JAYESH G",
            chairmanPhone: "9745008880",
            secretary: "SAJITH CHIRAYIL",
            secretaryPhone: "9495880669",
            ao: "LILLY PUTHUSSERY KOROTH",
            aoPhone: "9633919999"
        },

        {
            name: "Kasaragod",
            chairman: "SABISHA V",
            chairmanPhone: "9544266529",
            secretary: "MANOJ K",
            secretaryPhone: "9947744345",
            ao: "LILLY PUTHUSSERY KOROTH",
            aoPhone: "9633919999"
        },

        {
            name: "Cochin Port Trust (CPT)",
            chairman: "MAHESH T PAI",
            chairmanPhone: "9188959939",
            secretary: "NEELIMA V K",
            secretaryPhone: "9497809090",
            ao: "NEELIMA V K",
            aoPhone: "9497809090"
        }

    ];

    return (

        <>

            <Navbar />

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

                        <div className="officer-cell">

                            <p className="orange-name">
                                T N MUHAMMAD SHAFEEK <br />
                                JOINT SECRETARY, FINANCE
                            </p>

                            <div className="phone-row">

                                <span className="phone">9876543210</span>

                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp"
                                >
                                    <FaWhatsapp />
                                </a>

                            </div>

                        </div>

                        <p className="grape-desc">

                            The Finance Officer, appointed by Government not below the rank of Deputy Secretary in the Finance Department, manages all financial and accounting matters of the Board under the supervision of the Chief Executive Officer and prepares budgets and ensures proper financial control and accountability and transparency.
                        </p>

                    </div>

                    <div className="kiwi-card">

                        <h3>Secretary</h3>

                        <div className="officer-cell">

                            <p className="orange-name">VINOD KUMAR P G</p>

                            <p className="designation">DEPUTY LABOUR COMMISSIONER</p>

                            <div className="phone-row">

                                <span className="phone">9747253999</span>

                                <a
                                    href="https://wa.me/919747253999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp"
                                >
                                    <FaWhatsapp />
                                </a>

                            </div>

                        </div>

                        <p className="grape-desc">

                            The Secretary, appointed by Government not below the rank of Deputy Labour Commissioner in the Labour Department, supervises implementation of schemes under the Act, assists the Chief Executive Officer in administration of the Board and District Committees, and exercises delegated administrative and financial powers.
                        </p>

                    </div>

                </div>


                {/* AO SECTION */}

                <div className="papaya-section">

                    <h2 className="peach-heading">Accounts Officers</h2>

                    <p className="grape-desc plum-text">
                        Accounts Officers from the Board service act as supervisory officers of various sections at the Head Office. Accounts Officers manage the Establishment, Finance, Schemes, Audit, Scattered, Pension, Welfare, ECC and Accounts sections.
                    </p>

                    <div className="berry-row">

                        <div className="coconut-tile">

                            <p>AO Establishment</p>

                            <p className="orange-name">SHANUJA SS</p>

                            <div className="phone-row">

                                <span className="phone">8848882521</span>

                                <a
                                    href="https://wa.me/918848882521"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp"
                                >
                                    <FaWhatsapp />
                                </a>

                            </div>

                        </div>


                        <div className="coconut-tile">

                            <p>AO Finance</p>

                            <p className="orange-name">JANCY PT</p>

                            <div className="phone-row">

                                <span className="phone">9495932199</span>

                                <a
                                    href="https://wa.me/919495932199"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp"
                                >
                                    <FaWhatsapp />
                                </a>

                            </div>

                        </div>


                        <div className="coconut-tile">

                            <p>AO Scattered</p>

                            <p className="orange-name">BINDU KA</p>

                            <div className="phone-row">

                                <span className="phone">9544806556</span>

                                <a
                                    href="https://wa.me/919544806556"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp"
                                >
                                    <FaWhatsapp />
                                </a>

                            </div>

                        </div>


                        <div className="coconut-tile">

                            <p>AO Schemes</p>

                            <p className="orange-name">SAIYED SINNY SA VAHEED</p>

                            <div className="phone-row">

                                <span className="phone">9048085233</span>

                                <a
                                    href="https://wa.me/919048085233"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp"
                                >
                                    <FaWhatsapp />
                                </a>

                            </div>

                        </div>


                        <div className="coconut-tile">

                            <p>AO Audit</p>

                            <p className="orange-name">MALINI J V</p>

                            <div className="phone-row">

                                <span className="phone">9846472047</span>

                                <a
                                    href="https://wa.me/919846472047"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp"
                                >
                                    <FaWhatsapp />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>



                {/* DISTRICT SECTION */}

                <div className="dragonfruit-section">

                    <h2 className="peach-heading">District Offices</h2>

                    <p className="dragon-intro">
                        The Administrative Head of the District Office is the Chairman. Usually, the District Labour Officer of the Labour Department, notified by the Government, functions as the Chairman of the District Committee. A Deputy Labour Officer, notified by the Government from time to time, acts as the Secretary of the District Office. Accounts Officers from the Board service manage the District and Sub Offices under the supervision of the Chairman and Secretary.                    </p>

                    <div className="district-table-wrapper">

                        <table className="district-table">

                            <thead>

                                <tr>

                                    <th>District</th>
                                    <th>Chairman</th>
                                    <th>Secretary</th>
                                    <th>Accounts Officer</th>

                                </tr>

                            </thead>

                            <tbody>

                                {fruitDistricts.map((d, index) => (

                                    <tr key={index}>

                                        <td className="district-name">{d.name}</td>

                                        <td>

                                            <div className="officer-cell">

                                                <p className="officer-name">{d.chairman}</p>

                                                <p className="phone">{d.chairmanPhone}</p>

                                                <a
                                                    href={`https://wa.me/91${d.chairmanPhone}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="whatsapp"
                                                >

                                                    <FaWhatsapp />

                                                </a>

                                            </div>

                                        </td>

                                        <td>

                                            <div className="officer-cell">

                                                <p className="officer-name">{d.secretary}</p>

                                                <p className="phone">{d.secretaryPhone}</p>

                                                <a
                                                    href={`https://wa.me/91${d.secretaryPhone}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="whatsapp"
                                                >

                                                    <FaWhatsapp />

                                                </a>

                                            </div>

                                        </td>

                                        <td>

                                            <div className="officer-cell">

                                                <p className="officer-name">{d.ao}</p>

                                                <p className="phone">{d.aoPhone}</p>

                                                <a
                                                    href={`https://wa.me/91${d.aoPhone}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="whatsapp"
                                                >

                                                    <FaWhatsapp />

                                                </a>

                                            </div>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Whoiswho;