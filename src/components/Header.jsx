import React from "react";
import "./header.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faGlobe,
    faCartShopping,
    faHeart,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
    const [logos, setLogos] = useState([
        { icon: faGlobe, tagName: "Language" },
        { icon: faCartShopping, tagName: "Cart" },
        { icon: faHeart, tagName: "Wishlist" },
        { icon: faUser, tagName: "Login" },
    ]);
    return (
        <div>
            <div className="navbar">
                <div className="navContainer">
                    <FontAwesomeIcon icon={faBars} style={{}} />

                    <a
                        href="/"
                        style={{
                            textDecoration: "none",
                            display: "inline-block",
                        }}
                    >
                        <b>
                            <span
                                className="logo"
                                style={{
                                    fontSize: "20px",
                                    color: "black",
                                    padding: "10px",
                                }}
                            >
                                CROPWAY
                            </span>
                        </b>
                    </a>
                </div>
                <div className="search">
                    <form action="/">
                        <input
                            type="text"
                            placeholder="Search.."
                            name="search"
                        />
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
                <div className="logo">
                    <ul>
                        {logos.map((logo) => {
                            return (
                                <li key={logo.tagName}>
                                    <a href="#">
                                        <FontAwesomeIcon icon={logo.icon} />

                                        <div>{logo.tagName}</div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <ul
                className="nav nav-tabs"
                style={{ backgroundColor: "lightgreen" }}
            >
                <li className="nav-item">Home</li>
                <li className="nav-item">Agriculture Input</li>
                <li className="nav-item">Agriculture Output</li>
                <li className="nav-item">Agricutlure Services</li>
                <li className="nav-item">Farm Equipment Retail</li>
                <li className="nav-item">Sell Farm Products</li>
                <li className="nav-item">Buy Farm Products</li>
                <li className="nav-item">Resource & Insights </li>
                <li className="nav-item">Help</li>
            </ul>
        </div>
    );
}

export default Header;
