import {
	LeftDownMover,
	finisher,
	focusRemover,
	focusAdder,
	UpMover,
	RightMover,
	lineFocuser,
	lineFocusRemover,
} from "../animate";

let frameNo = 0;
let elementDoms = [];
let elementNum = [];
let positions = [];

function getDoms(getObjects) {
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

function attachFocus(timeline, element) {
	timeline.add(focusAdder(element));
	attachLabel(timeline);
}

export default function insertion_sort(timeline, domObjects, lineDoms) {
	initObjects();
	getDoms(domObjects);
	timeline.add(lineFocuser(lineDoms[0]));
	attachLabel(timeline);
	timeline.add(lineFocusRemover(lineDoms[0]));
	timeline.add(lineFocuser(lineDoms[1]));
	attachLabel(timeline);
	for (let i = 1; i < domObjects.length; i++) {
		timeline.add(lineFocusRemover(lineDoms[1]));
		timeline.add(lineFocuser(lineDoms[2]));
		let curElementNum = elementNum[i];
		let curElementDom = elementDoms[i];
		timeline.add(focusAdder(elementDoms[i]));
		timeline.add(UpMover(elementDoms[i]));
		attachLabel(timeline);
		let j = i - 1;
		let count = 0;
		timeline.add(lineFocusRemover(lineDoms[2]));
		timeline.add(lineFocuser(lineDoms[3]));
		attachFocus(timeline, elementDoms[j]);
		timeline.add(lineFocusRemover(lineDoms[3]));
		timeline.add(lineFocuser(lineDoms[4]));
		attachLabel(timeline);
		while (j >= 0 && elementNum[j] > curElementNum) {
			timeline.add(lineFocusRemover(lineDoms[4]));
			timeline.add(lineFocuser(lineDoms[5]));
			timeline.add(RightMover(elementDoms[j]));
			timeline.add(focusRemover(elementDoms[j]));
			elementNum[j + 1] = elementNum[j];
			elementDoms[j + 1] = elementDoms[j];
			attachLabel(timeline);
			timeline.add(lineFocusRemover(lineDoms[5]));
			timeline.add(lineFocuser(lineDoms[6]));
			j--;
			count++;
			attachFocus(timeline, elementDoms[j]);
			timeline.add(lineFocusRemover(lineDoms[6]));
			timeline.add(lineFocuser(lineDoms[4]));
			attachLabel(timeline);
		}
		timeline.add(lineFocusRemover(lineDoms[4]));
		timeline.add(lineFocuser(lineDoms[7]));
		attachLabel(timeline);
		timeline.add(focusRemover(elementDoms[j]));
		elementNum[j + 1] = curElementNum;
		elementDoms[j + 1] = curElementDom;
		timeline.add(LeftDownMover(elementDoms[j + 1], count));
		timeline.add(focusRemover(elementDoms[j + 1]));
		timeline.add(lineFocusRemover(lineDoms[7]));
		timeline.add(lineFocuser(lineDoms[1]));
		attachLabel(timeline);
	}
	timeline.add(lineFocusRemover(lineDoms[1]));
	for (let i = 0; i < domObjects.length; i++) {
		timeline.add(finisher(elementDoms[i]));
	}
	timeline.add(lineFocuser(lineDoms[8]));
	return timeline;
}
