import React from "react";
import "./code.css";

export default function BubbleSortCode(props) {
	function domsPusher(dom) {
		props.lineDoms.push(dom);
	}
	const style = {
		marginTop: "80px",
	};
	return (
		<div className="code" style={style}>
			<p className="zero" ref={(dom) => domsPusher(dom)}>
				function bubble_sort(arr):
			</p>
			<p className="one" ref={(dom) => domsPusher(dom)}>
				n = len(arr)
			</p>
			<p className="one" ref={(dom) => domsPusher(dom)}>
				for j in range(n):
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				swapped = False
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				for i in range(n - 1 - j):
			</p>
			<p className="three" ref={(dom) => domsPusher(dom)}>
				if (arr[i] &gt; arr[i + 1]):
			</p>
			<p className="four" ref={(dom) => domsPusher(dom)}>
				swapped = True
			</p>
			<p className="four" ref={(dom) => domsPusher(dom)}>
				swap(arr[i], arr[i + 1])
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				if swapped == False:
			</p>
			<p className="three" ref={(dom) => domsPusher(dom)}>
				break
			</p>
			<p className="one" ref={(dom) => domsPusher(dom)}>
				return arr
			</p>
		</div>
	);
}
