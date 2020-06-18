import React from "react";
import prev from "../Images/prev.svg";
import pause from "../Images/pause.svg";
import next from "../Images/next.svg";
import "./CSS/MediaControlButton.css";
import { SliderBackgroundUpdator } from "../HelperFunctions/sliderSubroutines";

export default function MediaControlButtons(props) {
	const tl = props.timeline;
	function prevButtonHandler() {
		props.playPauseChanger(false);
		let cur = tl.currentLabel();
		if (Number(cur.split("-")[1]) !== 0) {
			tl.seek(tl.previousLabel());
			let res = tl.progress() * 100;
			props.refRangeSlider.current.value = res;
			SliderBackgroundUpdator(props.refRangeSlider, "#7D8EE5", res);
		}
	}

	function forwardButtonHandler() {
		props.playPauseChanger(false);
		tl.seek(tl.nextLabel());
		let res = tl.progress() * 100;
		props.refRangeSlider.current.value = res;
		SliderBackgroundUpdator(props.refRangeSlider, "#7D8EE5", res);
	}

	const prevButton = (
		<div className="icon" onClick={prevButtonHandler}>
			<img src={prev} alt="" id="prev"></img>
		</div>
	);
	const pausePlayButton = (
		<div className="icon" onClick={props.playPauseChanger}>
			<img src={pause} alt="" id="pause" ref={props.refPauseButton} />
		</div>
	);
	const forwardButton = (
		<div className="icon" onClick={forwardButtonHandler}>
			<img src={next} alt="" id="next"></img>
		</div>
	);
	return (
		<div id="icons" ref={props.refMediaControlButtons}>
			{prevButton}
			{pausePlayButton}
			{forwardButton}
		</div>
	);
}
