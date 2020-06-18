import React from "react";
import { CardsJSX } from "./CardsJSX";
import selectionsort from "./Gifs/selectionsort.gif";
import bubblesort from "./Gifs/selectionsort.gif";
import insertionsort from "./Gifs/insertionsort.gif";
import mergesort from "./Gifs/mergesort.gif";

export default function SortingPage() {
	const cardNames = [
		["Selection Sort", selectionsort],
		["Bubble Sort", bubblesort],
		["Insertion Sort", insertionsort],
		["Merge Sort", mergesort],
	];
	const cardsJsx = CardsJSX(cardNames);
	return (
		<div id="body">
			<div id="algo_text">Sorting Algorithms</div>
			<hr />
			<div id="cardsDiv">{cardsJsx}</div>
		</div>
	);
}
