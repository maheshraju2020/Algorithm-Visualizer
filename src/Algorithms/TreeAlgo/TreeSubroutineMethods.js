import gsap from "gsap";

export function nodeFocusRemover(node, visited, domArray) {
	let tl = new gsap.timeline();
	if (visited.includes(node)) {
		tl.to(domArray[node.indexInArr], {
			background: "#67DE2C",
		});
	} else {
		tl.to(domArray[node.indexInArr], {
			background: "#919bdf",
		});
	}
	return tl;
}

export function nodeFocuser(node, domArray) {
	let tl = gsap.timeline();
	tl.to(domArray[node.indexInArr], {
		background: "red",
	});
	return tl;
}

export function mover(node, count, domArray, refResult) {
	let clone = domArray[node.indexInArr].cloneNode(true);
	refResult.appendChild(clone);
	let x = 40 + 80 * count - node.x;
	console.log(count);
	let y = 470 - node.y;
	let tl = gsap.timeline();
	tl.to(clone, {
		x: x,
		y: y,
		background: "#DEB42C",
	});
	return tl;
}

export function line(x0, y0, x1, y1, cur, w, lineDomsArr) {
	let curLine = lineDomsArr[[x0, y0, x1, y1]];
	let tl = gsap.timeline();
	tl.to(curLine, { strokeWidth: w, stroke: cur });
	return tl;
}
