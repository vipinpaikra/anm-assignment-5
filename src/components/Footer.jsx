import React from "react";
import { useState } from "react";
import "./footer.css";

import "font-awesome/css/font-awesome.min.css";

function Footer() {
    const [logos, setLogos] = useState([
        {
            icon: "fab fa-linkedin",
            alt: "linkedin",
        },
        {
            icon: "fab fa-instagram",
            alt: "insta",
        },
        {
            icon: "fab fa-github",
            alt: "github",
        },
        {
            icon: "fab fa-facebook",
            alt: "facebook",
        },
    ]);

    const [facilities, setFacilities] = useState([
        {
            heading: "SUPPORT",
            arr: [{ p: " Returns and Exchanges" }],
        },
        { heading: "COMPANY", arr: [{ p: "About Us" }, { p: "Contact Us" }] },
        {
            heading: "LEGAL",
            arr: [{ p: "Privacy Policy" }, { p: "Terms and Conditions" }],
        },
        {
            heading: "SELL WITH US",
            arr: [{ p: "Sell On Cropway" }, { p: "Await Services" }],
        },
    ]);
    console.log(facilities[0].arr.map((p) => p));

    return (
        <div className="container-fluid">
            <footer style={{ backgroundColor: "hsl(338, 62%, 81%)" }}>
                <section
                    className="text-center mb-5"
                    style={{ padding: "20px" }}
                >
                    {logos.map((logo) => (
                        <a key={logo.alt} href="" className="text-white me-4">
                            <i
                                className={logo.icon}
                                style={{
                                    fontSize: "27px",
                                    padding: "5px",
                                    border: "2px solid white",
                                }}
                            ></i>
                        </a>
                    ))}
                </section>
                <p
                    style={{
                        textAlign: "center",
                        paddingTop: "10px",
                        color: "white",
                    }}
                >
                    Cropway ampowers farmers by making technology accessible to
                    all
                </p>
                <div className="container p-4">
                    <div className="row">
                        {facilities.map((facility) => {
                            let { arr } = facility;
                            return (
                                <div
                                    className="col-lg-3 col-md-6 mb-4"
                                    key={facility.heading}
                                >
                                    <h5
                                        className="mb-3"
                                        style={{
                                            letterSpacing: "2px",
                                            color: "black",
                                        }}
                                    >
                                        <b>{facility.heading}</b>
                                    </h5>
                                    <ul className="list-unstyled mb-0">
                                        {arr.map((obj, index) => (
                                            <li key={index} className="mb-1">
                                                <a
                                                    href="#!"
                                                    style={{
                                                        color: " white",
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    {obj.p}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
                >
                    © 2020 Copyright:
                    <a
                        className="text-dark"
                        href="https://mdbootstrap.com/"
                    ></a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
