import React from "react";
import { Link } from "react-router-dom";

export function CardsJSX(cardNames) {
	const cardsJsx = cardNames.map((current, index) => (
		<Link
			to={{
				pathname: current[0].split(" ").join("-").toLowerCase(),
				state: current[0].split(" ").join("-").toLowerCase(),
			}}
		>
			<div className="card" key={index}>
				<div className="image">
					<img className="gifs" src={current[1]} alt="" srcset="" />
				</div>
				<div className="text_box">
					<div className="text">{current[0]}</div>
				</div>
			</div>
		</Link>
	));
	return cardsJsx;
}
