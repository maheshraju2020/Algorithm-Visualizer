import React, { createRef, useEffect } from "react";
import { SliderBackgroundUpdator } from "../HelperFunctions/sliderSubroutines";
import "./CSS/SpeedBox.css";

export default function SpeedBox(props) {
	useEffect(() => {
		refCurrentSpeed.current.innerHTML = "1x";
		refSpeedRangeSlider.current.value = 3;
		SliderBackgroundUpdator(refSpeedRangeSlider, backColour, 29);
	});
	const refCurrentSpeed = createRef();
	const refSpeedRangeSlider = createRef();
	const backColour = "#e04949d0";
	const speedArr = [0.5, 0.75, 1, 2, 3, 4, 5];
	function speedSliderOnChange() {
		const refSlider = refSpeedRangeSlider.current;
		const speed = speedArr[refSlider.value - 1];
		refCurrentSpeed.current.innerHTML = String(speed) + "x";
		let value = (refSlider.value / 7) * 100 - 1;
		SliderBackgroundUpdator(refSpeedRangeSlider, backColour, value);
		props.timeline.timeScale(speed);
	}
	return (
		<div id="speeddiv" ref={props.refSpeedBox}>
			<div id="speedNum" ref={refCurrentSpeed}>
				1x
			</div>
			<input
				type="range"
				name="range"
				min="1"
				max="7"
				defaultValue="3"
				id="speed"
				ref={refSpeedRangeSlider}
				onChange={speedSliderOnChange}
			/>
		</div>
	);
}
