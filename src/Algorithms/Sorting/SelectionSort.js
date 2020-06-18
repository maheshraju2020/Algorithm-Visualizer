import {
	SelectionSortSwapper,
	finisher,
	marker,
	focusRemover,
	focusAdder,
	lineFocuser,
	lineFocusRemover,
} from "../animate";

let frameNo = 0;
let elementDoms = [];
let elementNum = [];
let positions = [];

function getDom(getObjects) {
	getObjects.map((dom) => {
		elementDoms.push(dom);
		elementNum.push(Number(dom.innerText));
		positions.push(Number(dom.getBoundingClientRect().x));
	});
}

function initObjects() {
	frameNo = 0;
	elementDoms = [];
	elementNum = [];
	positions = [];
}

function attachLabel(timeline) {
	timeline.addLabel("frame-" + String(frameNo++));
}

function attachFocus(timeline, element, delay) {
	let temp = "+=" + String(delay);
	timeline.add(focusAdder(element), temp);
	attachLabel(timeline);
}

function attachFinisher(timeline, element) {
	timeline.add(finisher(element));
	attachLabel(timeline);
}

function swap(arr, index1, index2) {
	[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

export default function selection_sort(timeline, domObjects, lineDoms) {
	initObjects();
	getDom(domObjects);
	timeline.add(lineFocuser(lineDoms[0]));
	attachLabel(timeline);
	timeline.add(lineFocusRemover(lineDoms[0]));
	timeline.add(lineFocuser(lineDoms[1]));
	attachLabel(timeline);
	timeline.add(lineFocusRemover(lineDoms[1]));
	timeline.add(lineFocuser(lineDoms[2]));
	attachLabel(timeline);
	for (let i = 0; i < domObjects.length; i++) {
		let small = i;
		timeline.add(lineFocusRemover(lineDoms[2]));
		timeline.add(lineFocuser(lineDoms[3]));
		attachFocus(timeline, elementDoms[i], 0.3);
		timeline.add(lineFocusRemover(lineDoms[3]));
		timeline.add(lineFocuser(lineDoms[4]));
		for (let j = i + 1; j < domObjects.length; j++) {
			attachFocus(timeline, elementDoms[j], 0.3);
			attachLabel(timeline, lineDoms, 4);
			timeline.add(lineFocusRemover(lineDoms[4]));
			timeline.add(lineFocuser(lineDoms[5]));
			attachLabel(timeline);
			if (elementNum[small] > elementNum[j]) {
				if (small !== i) {
					timeline.add(focusRemover(elementDoms[small]));
				}
				timeline.add(lineFocusRemover(lineDoms[5]));
				timeline.add(lineFocuser(lineDoms[6]));
				small = j;
				timeline.add(marker(elementDoms[small]));
				attachLabel(timeline);
				timeline.add(lineFocusRemover(lineDoms[6]));
			} else {
				timeline.add(lineFocusRemover(lineDoms[5]), "+=0.2");
				timeline.add(focusRemover(elementDoms[j]), "+=0.2");
			}
			timeline.add(lineFocuser(lineDoms[4]));
		}
		timeline.add(lineFocusRemover(lineDoms[4]));
		timeline.add(lineFocuser(lineDoms[7]));
		attachLabel(timeline);
		if (small !== i) {
			let dist = positions[i] - positions[small];
			timeline.add(lineFocusRemover(lineDoms[7]));
			timeline.add(SelectionSortSwapper(elementDoms[i], -dist, 100));
			timeline.add(SelectionSortSwapper(elementDoms[small], dist, -100), "-=1");
			timeline.add(lineFocuser(lineDoms[8]), "-=1");
			swap(elementNum, small, i);
			timeline.add(focusRemover(elementDoms[i]));
			attachFinisher(timeline, elementDoms[small]);
			timeline.add(lineFocusRemover(lineDoms[8]));
			swap(elementDoms, small, i);
		} else {
			attachFinisher(timeline, elementDoms[small]);
		}
		timeline.add(lineFocusRemover(lineDoms[7]));
		timeline.add(lineFocuser(lineDoms[2]));
		attachLabel(timeline);
	}
	timeline.add(lineFocusRemover(lineDoms[2]));
	timeline.add(lineFocuser(lineDoms[9]));
	attachLabel(timeline);
	return timeline;
}
