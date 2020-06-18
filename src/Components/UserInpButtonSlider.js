import React from "react";
import UserInpSliderOpenArrow from "../Images/InputSliderOpenArr.svg";
import "./CSS/UserInputSlider.css";

export default function UserInpButtonSlider(props) {
	function OpenPopup() {
		props.popupPage.current.style.display = "block";
	}
	return (
		<div id="custom_slider" ref={props.refCustomButtonSlider}>
			<div id="input_slider" onClick={props.UserInpSlider}>
				<img
					src={UserInpSliderOpenArrow}
					alt="lol"
					id="barrow"
					ref={props.refUserInpSliderArrow}
				/>
			</div>
			<div id="custom_button" onClick={OpenPopup}>
				Custom Input
			</div>
		</div>
	);
}
