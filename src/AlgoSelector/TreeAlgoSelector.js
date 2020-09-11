import React, { createRef, useEffect } from "react";

import SpeedBox from "../Components/SpeedBox";
import RangeSlider from "../Components/RangeSlider";
import StartButton from "../Components/StartButton";
import LeftSlider from "../Components/LeftSlider";
import PageDetails from "../Components/PageDetails";
import TreeAdder from "../Components/TreeAdder";
import MediaControlButtons from "../Components/MediaControlButtons";

import pause from "../Images/pause.svg";
import play from "../Images/play.svg";

import { gsap, TweenLite } from "gsap";
import TreeMaker from "../AlgoSelector/TreeMaker";
import { CodeSelector, algorithmSelector } from "./TreeSubroutine";
import { slideDrawer } from "../HelperFunctions/DrawerSliderSubroutine";
import { SliderBackgroundUpdator } from "../HelperFunctions/sliderSubroutines";

export function TreeAlgoSelector(props) {
    let algoName = props.location.state;
    const algoCode = CodeSelector(algoName);

    let animStatus = 0;
    let lineDoms = [];
    let currentDrawerState = [0];

    const refLines = createRef();
    const refResult = createRef();
    const refCircle = createRef();
    const refWorkArea = createRef();
    const refSpeedBox = createRef();
    const refLeftSlider = createRef();
    const refPageHistory = createRef();
    const refDrawerArrow = createRef();
    const refStartButton = createRef();
    const refRangeSlider = createRef();
    const refPauseButton = createRef();
    const refMediaControlButtons = createRef();

    let rootNode, domArray, edgeDoms;
    useEffect(() => {
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

    window.addEventListener("popstate", () => {
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
            algoName,
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
                    currentDrawerState = slideDrawer(currentDrawerState, arr);
                }}
                drawerArrow={refDrawerArrow}
                currentAlgo={algoCode}
            />
            <PageDetails
                pageHistory={refPageHistory}
                algoName={algoName
                    .split("-")
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                    .join("-")}
                algotype={"Tree Algorithms"}
            />
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
        </div>
    );
}
