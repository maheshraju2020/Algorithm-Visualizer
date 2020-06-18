import React from "react";
import { CardsJSX } from "./CardsJSX";
import preorder from "./Gifs/preorder.gif";
import inorder from "./Gifs/inorder.gif";
import postorder from "./Gifs/postorder.gif";
import levelorder from "./Gifs/levelorder.gif";

export default function TreePage() {
	const cardNames = [
		["In-order", inorder],
		["Pre-order", preorder],
		["Post-order", postorder],
		["Level-Order", levelorder],
	];
	const cardsJsx = CardsJSX(cardNames);
	return (
		<div id="body">
			<div id="algo_text">Tree Algorithms</div>
			<hr />
			<div id="cardsDiv">{cardsJsx}</div>
		</div>
	);
}
