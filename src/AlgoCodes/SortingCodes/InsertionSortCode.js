import React from "react";
import "./code.css";

export default function InsertionSortCode(props) {
	function domsPusher(dom) {
		props.lineDoms.push(dom);
	}
	const temp = "while j>-1 and temp < arr[j]:";
	const style = {
		marginTop: "100px",
	};
	return (
		<div className="code" style={style}>
			<p className="zero" ref={(dom) => domsPusher(dom)}>
				function insertion_sort(arr):
			</p>
			<p className="one" ref={(dom) => domsPusher(dom)}>
				for i in range(1, len(arr)):
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				temp = arr[i]
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				j = i - 1
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				{temp}
			</p>
			<p className="three" ref={(dom) => domsPusher(dom)}>
				arr[j + 1] = arr[j]
			</p>
			<p className="three" ref={(dom) => domsPusher(dom)}>
				j -= 1
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				arr[j+1] = temp
			</p>
			<p className="one" ref={(dom) => domsPusher(dom)}>
				return arr
			</p>
		</div>
	);
}
