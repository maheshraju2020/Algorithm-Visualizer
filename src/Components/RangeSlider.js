import React from "react";
import { SliderBackgroundUpdator } from "../HelperFunctions/sliderSubroutines";
import { TweenLite } from "gsap";
import "./CSS/RangeSlider.css";

export default function RangeSlider(props) {
	const backColour = "#7D8EE5";
	function changeTimelineProgress(e) {
		props.playPauseChanger(false);
		let time = e.target.value;
		TweenLite.to(props.timeline, {
			progress: time / 100,
			ease: "Back.easeOut",
		});
		SliderBackgroundUpdator(props.refRangeSlider, backColour);
	}
	return (
		<input
			type="range"
			name="range"
			min="0"
			max="100"
			id="ranger"
			ref={props.refRangeSlider}
			onChange={changeTimelineProgress}
		/>
	);
}
