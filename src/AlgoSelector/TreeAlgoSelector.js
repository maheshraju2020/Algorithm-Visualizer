import React, { createRef, useState, useEffect } from "react";

import SpeedBox from "../Components/SpeedBox";
import RangeSlider from "../Components/RangeSlider";
import StartButton from "../Components/StartButton";
import Popup from "../Components/Popup";
import LeftSlider from "../Components/LeftSlider";
import PageDetails from "../Components/PageDetails";
import TreeAdder from "../Components/TreeAdder";
import UserInpButtonSlider from "../Components/UserInpButtonSlider";
import MediaControlButtons from "../Components/MediaControlButtons";

import pause from "../Images/pause.svg";
import play from "../Images/play.svg";

import { gsap, TweenLite } from "gsap";
import TreeMaker from "../AlgoSelector/TreeMaker";
import { CodeSelector, algorithmSelector } from "./TreeSubroutine";
import { slideDrawer } from "../HelperFunctions/DrawerSliderSubroutine";
import {
	UserInpSliderSubroutine,
	SliderBackgroundUpdator,
} from "../HelperFunctions/sliderSubroutines";

export function TreeAlgoSelector(props) {
	const algoCode = CodeSelector(props.location.state);

	let animStatus = 0;
	let lineDoms = [];
	let currentInputState = 0;
	let currentDrawerState = [0];

	const refLines = createRef();
	const refResult = createRef();
	const refCircle = createRef();
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

	let rootNode, domArray, edgeDoms;
	let algoName = props.location.state;
	algoName = useEffect(() => {
		[rootNode, domArray, edgeDoms] = TreeMaker(
			refLines,
			refCircle,
			refWorkArea
		);
	}, []);

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

	const arr = [
		refLeftSlider,
		refPageHistory,
		refStartButton,
		refWorkArea,
		refRangeSlider,
		refMediaControlButtons,
		refDrawerArrow,
		true,
	];

	function HandleUserInput(userInput) {
		refRangeSlider.current.style.display = "none";
		refMediaControlButtons.current.style.display = "none";
		refStartButton.current.style.display = "block";
		refSpeedBox.current.style.display = "none";
		timeline.seek(0).pause();
		UserInpSlider();
		// changeData(userInput);
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

	function UserInpSlider() {
		currentInputState = UserInpSliderSubroutine(
			currentInputState,
			refCustomButtonSlider,
			refUserInpSliderArrow
		);
	}

	window.addEventListener("popstate", (e) => {
		animStatus = 0;
		timeline.progress(0);
		timeline.pause();
	});

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
		algorithmSelector(
			props.location.state,
			timeline,
			lineDoms,
			refResult.current,
			rootNode,
			domArray,
			edgeDoms
		);
		timeline.play();
	}

	return (
		<div id="ActivityArea">
			<LeftSlider
				leftSlider={refLeftSlider}
				lineDoms={lineDoms}
				slideDrawer={() => {
					console.log("lol");
					slideDrawer(currentDrawerState, arr);
				}}
				drawerArrow={refDrawerArrow}
				currentAlgo={algoCode}
			/>
			<PageDetails
				pageHistory={refPageHistory}
				algoName={props.location.state}
				algotype={"Tree Algorithms"}
			/>
			<Popup popupPage={refPopupPage} HandleUserInput={HandleUserInput} />
			<TreeAdder
				refCircle={refCircle}
				refWorkArea={refWorkArea}
				refResult={refResult}
				refLine={refLines}
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
			{/* <UserInpButtonSlider
				refCustomButtonSlider={refCustomButtonSlider}
				UserInpSlider={UserInpSlider}
				refUserInpSliderArrow={refUserInpSliderArrow}
				popupPage={refPopupPage}
			/> */}
		</div>
	);
}
