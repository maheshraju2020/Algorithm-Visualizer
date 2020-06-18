import {
	visible,
	boxAnimator,
	focusAdder,
	focusRemover,
	mergeSortUpMover,
	UpMover,
	finisher,
	lineFocuser,
	lineFocusRemover,
} from "../animate";

import { gsap } from "gsap";

let timeline;
let lineDoms;
let frameNo = 0;
function getNums(getObjects) {
	let elementNum = [];
	for (let i = 0; i < getObjects.length; i++) {
		elementNum.push(Number(getObjects[i].innerText));
	}
	return elementNum;
}

const elementAdder = (parDom, shift) => {
	let children, divs, n;
	children = parDom.children;
	n = children.length;
	divs = document.createElement("div");
	let clone;
	if (shift === "l") {
		for (let i = 0; i < Math.ceil(n / 2); i++) {
			clone = children[i].cloneNode(true);
			clone.style.float = "left";
			clone.style.left = children[i].style.left;
			divs.appendChild(clone);
		}
	} else {
		for (let i = Math.ceil(n / 2); i < n; i++) {
			clone = children[i].cloneNode(true);
			clone.style.float = "left";
			clone.style.left = children[i].style.left;
			divs.appendChild(clone);
		}
	}
	divs.style.position = "fixed";
	return divs;
};

const ChildDomGetter = (shift, parDom) => {
	let width, pleft, child, temp, ctop, cleft;
	width = parDom.offsetWidth;
	pleft = Number(parDom.style.left.slice(0, -2));
	child = elementAdder(parDom, shift);
	if (shift === "l") {
		temp = pleft - 60;
		child.style.left = temp + "px";
	} else {
		temp = pleft + width / 2 + 60;
		child.style.left = temp + "px";
	}
	cleft = temp;
	for (let t = 0; t < child.children.length; t++) {
		child.children[t].style.left = temp + "px";
		temp += 70;
	}
	ctop = Number(parDom.style.top.slice(0, -2)) + 70;
	child.style.top = ctop + "px";
	child.style.left = cleft + "px";
	child.style.opacity = 1;
	document.body.appendChild(child);
	timeline.add(visible(child, shift));
	return child;
};

function attachLabel(timeline) {
	timeline.addLabel("frame-" + String(frameNo++));
}

function mergeSort(elementNum, parDom) {
	timeline.add(lineFocusRemover(lineDoms[6]));
	timeline.add(lineFocusRemover(lineDoms[7]));
	timeline.add(lineFocusRemover(lineDoms[8]));
	timeline.add(lineFocuser(lineDoms[2]));
	attachLabel(timeline);
	if (elementNum.length === 1) {
		timeline.add(lineFocusRemover(lineDoms[2]));
		timeline.add(lineFocuser(lineDoms[3]));
		attachLabel(timeline);
		timeline.add(lineFocusRemover(lineDoms[3]));
		return parDom;
	} else {
		timeline.add(lineFocusRemover(lineDoms[2]));
		timeline.add(lineFocuser(lineDoms[4]));
		attachLabel(timeline);
		let childArr1, childArr2, childDom1, childDom2, n;
		n = elementNum.length;
		childDom1 = ChildDomGetter("l", parDom);
		childDom2 = ChildDomGetter("r", parDom);
		timeline.add(lineFocusRemover(lineDoms[4]));
		timeline.add(lineFocuser(lineDoms[5]));
		attachLabel(timeline);
		timeline.add(lineFocusRemover(lineDoms[8]));
		timeline.add(lineFocusRemover(lineDoms[5]));
		timeline.add(lineFocuser(lineDoms[6]));
		attachLabel(timeline);
		childArr1 = elementNum.slice(0, Math.ceil(n / 2));
		childArr2 = elementNum.slice(Math.ceil(n / 2), n);
		childDom1 = mergeSort(childArr1, childDom1);
		timeline.add(lineFocusRemover(lineDoms[8]));
		timeline.add(lineFocuser(lineDoms[7]));
		attachLabel(timeline);
		childDom2 = mergeSort(childArr2, childDom2);
		timeline.add(lineFocuser(lineDoms[8]));
		return merger(childDom1, childDom2, childArr1, childArr2, parDom, timeline);
	}
}

const merger = (childDom1, childDom2, childArr1, childArr2, parDom) => {
	let i, j, child1, child2, divs, dist, offset, index;
	let new_arr = [];
	offset = 60;
	i = j = index = 0;
	dist = Number(parDom.style.left.slice(0, -2));
	let kids = [];
	for (let kl = 0; kl < parDom.children.length; kl++) {
		kids.push(Number(parDom.children[kl].style.left.slice(0, -2)));
	}

	let cur = Number(childDom1.style.left.slice(0, -2));
	for (let k = 0; k < childDom1.children.length; k++) {
		childDom1.children[k].style.left = cur + "px";
		cur += 70;
	}
	cur = Number(childDom2.style.left.slice(0, -2));
	for (let k = 0; k < childDom2.children.length; k++) {
		childDom2.children[k].style.left = cur + "px";
		cur += 70;
	}
	child1 = [...childDom1.children];
	child2 = [...childDom2.children];
	divs = document.createElement("div");
	divs.style.position = "fixed";
	divs.style.left = parDom.style.left;
	divs.style.top = String(Number(parDom.style.top.slice(0, -2)) + 160) + "px";
	divs.style.opacity = "0";
	while (i < child1.length && j < child2.length) {
		timeline.add(focusAdder(child1[i]));
		timeline.add(focusAdder(child2[j]));
		if (Number(child1[i].innerText) <= Number(child2[j].innerText)) {
			new_arr.push(childArr1[i]);
			let temp = Number(child1[i].style.left.slice(0, -2));
			timeline.add(boxAnimator(child1[i], kids[index++] - temp));
			divs.appendChild(child1[i].cloneNode(true));
			timeline.add(focusRemover(child1[i]));
			i++;
			dist += offset;
		} else {
			new_arr.push(childArr2[j]);
			let temp = Number(child2[j].style.left.slice(0, -2));
			timeline.add(boxAnimator(child2[j], kids[index++] - temp));
			timeline.add(focusRemover(child2[j]));
			divs.appendChild(child2[j].cloneNode(true));
			j++;
			dist += offset;
		}
	}
	while (i < child1.length) {
		new_arr.push(childArr1[i]);
		let temp = Number(child1[i].style.left.slice(0, -2));
		timeline.add(boxAnimator(child1[i], kids[index++] - temp));
		dist += offset;
		timeline.add(focusRemover(child1[i]));
		divs.appendChild(child1[i].cloneNode(true));
		i++;
	}
	while (j < child2.length) {
		new_arr.push(childArr2[j]);
		let temp = Number(child2[j].style.left.slice(0, -2));
		timeline.add(boxAnimator(child2[j], kids[index++] - temp));
		dist += offset;
		timeline.add(focusRemover(child2[j]));
		divs.appendChild(child2[j].cloneNode(true));
		j++;
	}
	timeline.add(mergeSortUpMover(childDom1, childDom2, divs, parDom, -162));
	document.body.appendChild(divs);
	return divs;
};
const down = (dom) => {
	let t1 = gsap.timeline();
	t1.to(dom, {
		y: 20,
	});
	return t1;
};
let opdata;
export default function merge_sort(tl, domObjects, lineDom, parDom, opData) {
	timeline = tl;
	lineDoms = lineDom;
	opdata = opData.current;
	tl.add(UpMover(parDom, -170));
	console.log(parDom);
	parDom.style.left = String(parDom.getBoundingClientRect().x) + "px";
	parDom.style.top = "120px";
	let kids = parDom.children;
	for (let i = 0; i < kids.length; i++) {
		kids[i].style.left = String(kids[i].getBoundingClientRect().x) + "px";
	}
	let elementNum = getNums(domObjects);
	parDom = mergeSort(elementNum, parDom);
	tl.add(down(parDom));
	for (let i = 0; i < parDom.children.length; i++) {
		tl.add(finisher(parDom.children[i]));
	}
	return timeline;
}
