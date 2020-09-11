import React, { createRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";
import back from "../Images/back_button.svg";
import "./CSS/Navbar.css";

export function NavbarComponent(props) {
    let history = useHistory();
    let refBack = createRef();
    return (
        <div className="navbar">
            <ul>
                {/* <li
                    ref={refBack}
                    onClick={() => {
                        history.goBack();
                    }}
                    style={{
                        float: "left",
                    }}
                >
                    <img id="back_button" alt="" src={back}></img>
                </li> */}
                <li
                    style={{
                        float: "left",
                    }}
                >
                    <img id="logo" alt="" src={logo}></img>
                </li>
                <li>
                    <Link to="/about"> ABOUT </Link>
                </li>
                <li>
                    <Link to="/"> HOME </Link>
                </li>
            </ul>
        </div>
    );
}
