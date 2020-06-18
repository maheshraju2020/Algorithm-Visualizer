import React from "react";
import logo from "../Images/logo.svg";
import back from "../Images/back_button.svg";
import "./CSS/Navbar.css";

export function NavbarComponent(props) {
	return (
		<div className="navbar">
			<ul>
				{/* <li style={{ float: "left" }}>
					<img id="back_button" alt="" src={back}></img>
				</li> */}
				<li style={{ float: "left" }}>
					<img id="logo" alt="" src={logo}></img>
				</li>
				<li>
					<a href="#about">CONTACT US</a>
				</li>
				<li>
					<a href="#contact">ABOUT US</a>
				</li>
				<li>
					<a href="#news">HOME</a>
				</li>
			</ul>
		</div>
	);
}
