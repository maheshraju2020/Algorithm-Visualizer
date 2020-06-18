import React from "react";
import "./code.css";

export default function SelectionSortCode(props) {
	function domsPusher(dom) {
		props.lineDoms.push(dom);
	}
	const style = {
		marginTop: "80px",
	};
	return (
		<div className="code" style={style}>
			<p className="zero" ref={(dom) => domsPusher(dom)}>
				function selection_sort(arr):
			</p>
			<p className="one" ref={(dom) => domsPusher(dom)}>
				n = len(arr)
			</p>
			<p className="one" ref={(dom) => domsPusher(dom)}>
				for i in range(n):
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				small = i
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				for j in range(i + 1, n):
			</p>
			<p className="three" ref={(dom) => domsPusher(dom)}>
				if arr[small] &gt; arr[j]:
			</p>
			<p className="four" ref={(dom) => domsPusher(dom)}>
				small = j
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				if small != i:
			</p>
			<p className="three" ref={(dom) => domsPusher(dom)}>
				swap(arr[small], arr[i])
			</p>
			<p className="one" ref={(dom) => domsPusher(dom)}>
				return arr
			</p>
		</div>
	);
}
