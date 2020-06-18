import React from "react";
import "./code.css";
// import "./levelorder.css";

export default function LevelorderCode(props) {
	function domsPusher(dom) {
		props.lineDoms.push(dom);
	}
	const style = {
		marginTop: "100px",
	};
	return (
		<div className="code" style={style}>
			<p className="zero" ref={(dom) => domsPusher(dom)}>
				function levelorder(node):
			</p>
			<p className="one" ref={(dom) => domsPusher(dom)}>
				queue = [node]
			</p>
			<p className="one" ref={(dom) => domsPusher(dom)}>
				while len(queue):
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				cur = queue.pop(0)
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				print(cur.value)
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				if cur.left:
			</p>
			<p className="three" ref={(dom) => domsPusher(dom)}>
				queue.append(cur.left)
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				if cur.right:
			</p>
			<p className="three" ref={(dom) => domsPusher(dom)}>
				queue.append(cur.right)
			</p>
		</div>
	);
}
