import React from "react";
import "./CSS/PageDetails.css";

export default function PageDetails(props) {
	return (
		<div id="pageHistory" ref={props.pageHistory}>
			{props.algotype} &gt; {props.algoName}
		</div>
	);
}
