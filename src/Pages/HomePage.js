import React from "react";
import "./CSS/HomePage.css";
import "./CSS/Cards.css";
import selectionsort from "./Gifs/selectionsort.gif";
import levelorder from "./Gifs/levelorder.gif";
import { CardsJSX } from "./CardsJSX";

export default function HomePage(props) {
    const cardNames = [
        ["Sorting Algorithms", selectionsort],
        ["Tree Algorithms", levelorder],
    ];
    const cardsJsx = CardsJSX(cardNames);
    return (
        <div id="body">
            <div id="algo_text">Algorithms</div>
            <hr />
            <div id="cardsDiv">{cardsJsx}</div>
        </div>
    );
}
