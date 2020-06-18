import React from "react";
import "./CSS/ActivityArea.css";

export default function ElementAdder(props) {
	const elements = props.data.map((ele, ind) => {
		let temp = "box bx" + ind;
		return (
			<div className={temp} key={ind} ref={(dom) => props.domObjects.push(dom)}>
				<span id="digit">{ele}</span>
			</div>
		);
	});
	return (
		<div className="container" ref={props.refWorkArea}>
			<div className="operation_data">
				<div className="elements" ref={props.parDom}>
					{elements}
				</div>
			</div>
		</div>
	);
}
