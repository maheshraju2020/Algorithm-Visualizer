import React from "react";
import "./CSS/TreeAdder.css";

export default function TreeStructure(props) {
	return (
		<div id="container">
			<div id="WorkArea" ref={props.refWorkArea}>
				<svg ref={props.refLine} width="750" height="550"></svg>
				<div id="result" ref={props.refResult}></div>
			</div>
			<div className="circle" ref={props.refCircle}></div>
		</div>
	);
}
