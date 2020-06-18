import { gsap, TweenLite } from "gsap";
import "./ActivityAreaCSS/ActivityArea.css";
import React, { createRef, useState, useEffect } from "react";

import pause from "../Images/pause.svg";
import play from "../Images/play.svg";

import Popup from "./Popup";
import SpeedBox from "./SpeedBox";
import LeftSlider from "./LeftSlider";
import RangeSlider from "./RangeSlider";
import StartButton from "./StartButton";
import ElementAdder from "./ElementAdder";
import CurrentPageDetails from "./CurrentPageDetails";
import UserInpButtonSlider from "./UserInpButtonSlider";
import MediaControlButtons from "./MediaControlButtons";
import SliderBackgroundUpdator from "./SliderHelperFunctions";
import {
	slideDrawerSubroutine,
	UserInpSliderSubroutine,
} from "./sliderSubroutines";
import { CodeSelector, algorithmSelector } from "./AlgorithmSelector";
import TreeMaker from "./TreeMaker";
import TreeAdder from "./TreeAdder";

export default function ActivityArea(props) {
	console.log(props);
	const [data, changeData] = useState([5, 4, 8, 7, 9, 6]);
	let domObjects, lineDoms;
	[domObjects, lineDoms] = [[], []];
	let animStatus, currentDrawerState, currentInputState;
	[animStatus, currentDrawerState, currentInputState] = [0, 0, 0];
	const popupPage = createRef();
	const leftSlider = createRef();
	const refSpeedBox = createRef();
	const pageHistory = createRef();
	const drawerArrow = createRef();
	const refPauseButton = createRef();
	const refRangeSlider = createRef();
	const refStartButton = createRef();
	const refWorkArea = createRef();
	const refUserInpSliderArrow = createRef();
	const refCustomButtonSlider = createRef();
	const refMediaControlButtons = createRef();
	const refCanvas = createRef();
	const parDom = createRef();
	const refResult = createRef();
	const refCircle = createRef();
	const refLine = createRef();
	const algoName = props.location.state;
	const currentAlgo = CodeSelector(algoName);
	let rootNode, domArray, lineDomsArr;
	useEffect(() => {
		[rootNode, domArray, lineDomsArr] = TreeMaker(
			refLine,
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

	const slideDrawer = () => {
		const arr = [
			leftSlider,
			pageHistory,
			refStartButton,
			refWorkArea,
			refRangeSlider,
			refMediaControlButtons,
			drawerArrow,
			false,
		];
		currentDrawerState = slideDrawerSubroutine(currentDrawerState, arr);
		// HandleUserInput(data);
	};

	function UserInpSlider() {
		currentInputState = UserInpSliderSubroutine(
			currentInputState,
			refCustomButtonSlider,
			refUserInpSliderArrow
		);
	}

	function startButtonClickHandler() {
		console.log("lol");
		refRangeSlider.current.style.display = "block";
		refMediaControlButtons.current.style.display = "block";
		refStartButton.current.style.display = "none";
		refSpeedBox.current.style.display = "block";
		timeline = algorithmSelector(
			algoName,
			timeline,
			domObjects,
			lineDoms,
			parDom,
			refCanvas,
			refCircle,
			refResult,
			refWorkArea,
			rootNode,
			domArray,
			lineDomsArr
		);
		animStatus = 1;
		timeline.play();
	}

	function changeTimelineProgress(e) {
		playPauseChanger(false);
		TweenLite.to(timeline, {
			progress: e.target.value / 100,
			ease: "Back.easeOut",
		});
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

	function HandleUserInput(userInput) {
		refRangeSlider.current.style.display = "none";
		refMediaControlButtons.current.style.display = "none";
		refStartButton.current.style.display = "block";
		refSpeedBox.current.style.display = "none";
		timeline.seek(0).pause();
		changeData(userInput);
		UserInpSlider();
	}

	return (
		<div id="ActivityArea" onKeyPress={startButtonClickHandler}>
			<SpeedBox refSpeedBox={refSpeedBox} timeline={timeline} />
			<LeftSlider
				leftSlider={leftSlider}
				lineDoms={lineDoms}
				slideDrawer={slideDrawer}
				drawerArrow={drawerArrow}
				currentAlgo={currentAlgo}
			/>
			<ElementAdder
				domObjects={domObjects}
				data={data}
				refWorkArea={refWorkArea}
				parDom={parDom}
			/>
			{/* <TreeAdder
				refCircle={refCircle}
				refWorkArea={refWorkArea}
				refResult={refResult}
				refLine={refLine}
			/> */}
			<CurrentPageDetails pageHistory={pageHistory} algoName={algoName} />
			<StartButton
				refStartButton={refStartButton}
				startButtonClickHandler={startButtonClickHandler}
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
			<Popup popupPage={popupPage} HandleUserInput={HandleUserInput} />
			<UserInpButtonSlider
				refCustomButtonSlider={refCustomButtonSlider}
				UserInpSlider={UserInpSlider}
				refUserInpSliderArrow={refUserInpSliderArrow}
				popupPage={popupPage}
			/>
		</div>
	);
}
