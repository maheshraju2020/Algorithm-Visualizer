import React from "react";
import "./code.css";

export default function PostorderCode(props) {
	function domsPusher(dom) {
		props.lineDoms.push(dom);
	}
	const style = {
		marginTop: "130px",
	};
	return (
		<div className="code" style={style}>
			<p className="zero" ref={(dom) => domsPusher(dom)}>
				function postorder(node):
			</p>
			<p className="one" ref={(dom) => domsPusher(dom)}>
				if node:
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				preorder(node.left)
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				preorder(node.right)
			</p>
			<p className="two" ref={(dom) => domsPusher(dom)}>
				print(node.value)
			</p>
		</div>
	);
}
