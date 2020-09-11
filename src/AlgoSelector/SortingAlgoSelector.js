import React, { createRef, useState } from "react";

import SpeedBox from "../Components//SpeedBox";
import RangeSlider from "../Components//RangeSlider";
import StartButton from "../Components//StartButton";
import Popup from "../Components/Popup";
import LeftSlider from "../Components/LeftSlider";
import PageDetails from "../Components/PageDetails";
import ElementAdder from "../Components/ElementAdder";
import UserInpButtonSlider from "../Components/UserInpButtonSlider";
import MediaControlButtons from "../Components/MediaControlButtons";

import pause from "../Images/pause.svg";
import play from "../Images/play.svg";

import { gsap, TweenLite } from "gsap";
import { CodeSelector } from "./SortingSubroutine";
import { algorithmSelector } from "./SortingSubroutine";
import { slideDrawer } from "../HelperFunctions/DrawerSliderSubroutine";
import {
	UserInpSliderSubroutine,
	SliderBackgroundUpdator,
} from "../HelperFunctions/sliderSubroutines";

export function SortingAlgoSelector(props) {
	const algoCode = CodeSelector(props.location.state);
	const [data, changeData] = useState([5, 4, 8, 7, 9, 6]);
	const [drawerState, flipDrawerState] = useState([0]);

	let animStatus = 0;
	let lineDoms = [];
	let domObjects = [];
	let currentInputState = 0;
	let currentDrawerState = [0];

	const parDom = createRef();
	const refWorkArea = createRef();
	const refSpeedBox = createRef();
	const refPopupPage = createRef();
	const refLeftSlider = createRef();
	const refPageHistory = createRef();
	const refDrawerArrow = createRef();
	const refStartButton = createRef();
	const refRangeSlider = createRef();
	const refPauseButton = createRef();
	const refUserInpSliderArrow = createRef();
	const refCustomButtonSlider = createRef();
	const refMediaControlButtons = createRef();
	const algoName = props.location.state
		.split("-")
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(" ");

	let timeline = gsap.timeline({
		paused: true,
		onUpdate: () => {
			if (animStatus === 1) {
				let res = timeline.progress() * 100;
				refRangeSlider.current.value = res;
				SliderBackgroundUpdator(refRangeSlider, "#7D8EE5", res);
			}
		},
		onComplete: () => {
			playPauseChanger(false);
		},
	});

	window.addEventListener("popstate", (e) => {
		animStatus = 0;
		timeline.progress(0);
		timeline.pause();
	});

	const arr = [
		refLeftSlider,
		refPageHistory,
		refStartButton,
		refWorkArea,
		refRangeSlider,
		refMediaControlButtons,
		refDrawerArrow,
		false,
	];

	function HandleUserInput(userInput) {
		refRangeSlider.current.style.display = "none";
		refMediaControlButtons.current.style.display = "none";
		refStartButton.current.style.display = "block";
		refSpeedBox.current.style.display = "none";
		timeline.seek(0).pause();
		UserInpSlider();
		changeData(userInput);
	}

	function playPauseChanger(check) {
		if (animStatus === 1) {
			refPauseButton.current.src = play;
			timeline.pause();
			animStatus = 0;
		} else if (check) {
			if (timeline.progress() === 1) {
				timeline.seek(0);
			}
			refPauseButton.current.src = pause;
			timeline.play();
			animStatus = 1;
		}
	}

	function drawerAction() {
		timeline.pause();
		timeline.progress(0);
		refRangeSlider.current.style.display = "none";
		refMediaControlButtons.current.style.display = "none";
		refStartButton.current.style.display = "block";
		refSpeedBox.current.style.display = "none";
		flipDrawerState(slideDrawer(drawerState, arr));
	}

	function UserInpSlider() {
		currentInputState = UserInpSliderSubroutine(
			currentInputState,
			refCustomButtonSlider,
			refUserInpSliderArrow
		);
	}

	function changeTimelineProgress(e) {
		playPauseChanger(false);
		TweenLite.to(timeline, {
			progress: e.target.value / 100,
			ease: "Back.easeOut",
		});
	}

	function startButtonClickHandler() {
		refRangeSlider.current.style.display = "block";
		refMediaControlButtons.current.style.display = "block";
		refStartButton.current.style.display = "none";
		refSpeedBox.current.style.display = "block";
		timeline = algorithmSelector(
			props.location.state,
			timeline,
			domObjects,
			lineDoms,
			parDom,
			refWorkArea
		);
		timeline.play();
	}

	return (
		<div id="ActivityArea">
			<LeftSlider
				leftSlider={refLeftSlider}
				lineDoms={lineDoms}
				slideDrawer={() => {
					if (props.location.state === "merge-sort") {
						drawerAction();
					} else {
						currentDrawerState = slideDrawer(currentDrawerState, arr);
					}
				}}
				drawerArrow={refDrawerArrow}
				currentAlgo={algoCode}
			/>
			<PageDetails
				pageHistory={refPageHistory}
				algoName={algoName}
				algotype={"Sorting Algorithms"}
			/>
			<Popup popupPage={refPopupPage} HandleUserInput={HandleUserInput} />
			<ElementAdder
				domObjects={domObjects}
				data={data}
				refWorkArea={refWorkArea}
				parDom={parDom}
			/>
			<SpeedBox refSpeedBox={refSpeedBox} timeline={timeline} />
			<StartButton
				refStartButton={refStartButton}
				startButtonClickHandler={() => {
					animStatus = 1;
					startButtonClickHandler();
				}}
			/>
			<RangeSlider
				changeTimelineProgress={changeTimelineProgress}
				refRangeSlider={refRangeSlider}
				playPauseChanger={playPauseChanger}
				timeline={timeline}
			/>
			<MediaControlButtons
				refMediaControlButtons={refMediaControlButtons}
				timeline={timeline}
				playPauseChanger={playPauseChanger}
				refPauseButton={refPauseButton}
				refRangeSlider={refRangeSlider}
			/>
			<UserInpButtonSlider
				refCustomButtonSlider={refCustomButtonSlider}
				UserInpSlider={UserInpSlider}
				refUserInpSliderArrow={refUserInpSliderArrow}
				popupPage={refPopupPage}
			/>
		</div>
	);
}
