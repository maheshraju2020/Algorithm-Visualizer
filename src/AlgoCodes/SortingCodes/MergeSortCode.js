import React from "react";
import "./code.css";

export default function BubbleSortCode(props) {
	function domsPusher(dom) {
		props.lineDoms.push(dom);
	}
	const style1 = {
		marginTop: "20px",
		padding: "20px 0px",
	};
	const style2 = {
		lineHeight: "17px",
	};
	let temp1 = "while i < n1 and j < n2:";
	let temp2 = "if ar1[i] < ar2[j]:";
	return (
		<div className="code" style={style1}>
			<p style={style2} className="zero" ref={(dom) => domsPusher(dom)}>
				function mergeSort(arr):
			</p>
			<p style={style2} className="one" ref={(dom) => domsPusher(dom)}>
				n = len(arr)
			</p>
			<p style={style2} className="one" ref={(dom) => domsPusher(dom)}>
				if n == 1:
			</p>
			<p style={style2} className="two" ref={(dom) => domsPusher(dom)}>
				return arr
			</p>
			<p style={style2} className="one" ref={(dom) => domsPusher(dom)}>
				else:
			</p>
			<p style={style2} className="two" ref={(dom) => domsPusher(dom)}>
				mid = n // 2
			</p>
			<p style={style2} className="two" ref={(dom) => domsPusher(dom)}>
				ar1 = mergeSort(arr[:mid])
			</p>
			<p style={style2} className="two" ref={(dom) => domsPusher(dom)}>
				ar2 = mergeSort(arr[mid:])
			</p>
			<p style={style2} className="two" ref={(dom) => domsPusher(dom)}>
				return merger(ar1, ar2)
			</p>
			<p style={style2} className="gap" ref={(dom) => domsPusher(dom)}></p>
			<p style={style2} className="zero" ref={(dom) => domsPusher(dom)}>
				function merger(ar1, ar2):
			</p>
			<p style={style2} className="one" ref={(dom) => domsPusher(dom)}>
				n1, n2 = len(ar1), len(ar2)
			</p>
			<p style={style2} className="one" ref={(dom) => domsPusher(dom)}>
				c, i, j = [], 0, 0
			</p>
			<p style={style2} className="one" ref={(dom) => domsPusher(dom)}>
				{temp1}
			</p>
			<p style={style2} className="two" ref={(dom) => domsPusher(dom)}>
				{temp2}
			</p>
			<p style={style2} className="three" ref={(dom) => domsPusher(dom)}>
				c.append(ar1[i])
			</p>
			<p style={style2} className="three" ref={(dom) => domsPusher(dom)}>
				i += 1
			</p>
			<p style={style2} className="two" ref={(dom) => domsPusher(dom)}>
				else:
			</p>
			<p style={style2} className="three" ref={(dom) => domsPusher(dom)}>
				c.append(ar2[j])
			</p>
			<p style={style2} className="three" ref={(dom) => domsPusher(dom)}>
				j += 1
			</p>
			<p style={style2} className="one" ref={(dom) => domsPusher(dom)}>
				return c + ar1[i:] + ar2[j:]
			</p>
		</div>
	);
}
