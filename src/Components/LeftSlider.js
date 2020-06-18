import React from "react";
import close from "../Images/DrawerCloseArrow.png";
import "./CSS/LeftSlider.css";

export default function LeftSlider(props) {
	return (
		<div className="left_slider" ref={props.leftSlider}>
			<div className="innerleft">
				<props.currentAlgo lineDoms={props.lineDoms} />
			</div>
			<div className="rightleft" onClick={props.slideDrawer}>
				<img id="arrow" src={close} ref={props.drawerArrow} alt="" />
			</div>
		</div>
	);
}
