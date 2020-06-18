import React from "react";
import "./CSS/StartButton.css";

export default function StartButton(props) {
	return (
		<div
			id="start"
			className="button"
			onClick={props.startButtonClickHandler}
			ref={props.refStartButton}
		>
			Start
		</div>
	);
}
