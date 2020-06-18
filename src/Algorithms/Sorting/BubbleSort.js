import {
	finisher,
	focusRemover,
	focusAdder,
	LeftMover,
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

function swap(arr, index1, index2) {
	[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

export default function bubble_sort(timeline, domObjects, lineDoms) {
	let n = domObjects.length;
	initObjects();
	getDoms(domObjects);
	timeline.add(lineFocuser(lineDoms[0]));
	attachLabel(timeline);
	timeline.add(lineFocusRemover(lineDoms[0]));
	timeline.add(lineFocuser(lineDoms[1]));
	attachLabel(timeline);
	timeline.add(lineFocusRemover(lineDoms[1]));
	timeline.add(lineFocuser(lineDoms[2]));
	attachLabel(timeline);
	for (let i = 0; i < n; i++) {
		timeline.add(lineFocusRemover(lineDoms[2]));
		timeline.add(lineFocuser(lineDoms[3]));
		attachLabel(timeline);
		timeline.add(lineFocusRemover(lineDoms[3]));
		let swapped = 0;
		timeline.add(lineFocuser(lineDoms[4]));
		attachLabel(timeline);
		for (let j = 0; j < n - i - 1; j++) {
			timeline.add(lineFocusRemover(lineDoms[4]));
			timeline.add(lineFocuser(lineDoms[5]));
			timeline.add(focusAdder(elementDoms[j], 0.5));
			timeline.add(focusAdder(elementDoms[j + 1], 0.5), "-=0.5");
			attachLabel(timeline);
			if (elementNum[j] > elementNum[j + 1]) {
				timeline.add(lineFocusRemover(lineDoms[5]));
				timeline.add(lineFocuser(lineDoms[6]));
				swapped = 1;
				attachLabel(timeline);
				timeline.add(lineFocusRemover(lineDoms[6]));
				timeline.add(lineFocuser(lineDoms[7]));
				swap(elementNum, j, j + 1);
				swap(elementDoms, j, j + 1);
				timeline.add(RightMover(elementDoms[j + 1]));
				timeline.add(LeftMover(elementDoms[j]), "-=0.5");
				attachLabel(timeline);
				timeline.add(lineFocusRemover(lineDoms[7]));
			}
			timeline.add(lineFocusRemover(lineDoms[5]));
			timeline.add(focusRemover(elementDoms[j]));
			timeline.add(focusRemover(elementDoms[j + 1]));
			timeline.add(lineFocuser(lineDoms[4]));
			attachLabel(timeline);
		}
		timeline.add(lineFocusRemover(lineDoms[4]));
		timeline.add(lineFocuser(lineDoms[8]));
		attachLabel(timeline);
		if (swapped === 0) {
			timeline.add(lineFocusRemover(lineDoms[8]));
			timeline.add(lineFocuser(lineDoms[9]));
			attachLabel(timeline);
			for (let k = n - i - 1; k >= 0; k--) {
				timeline.add(finisher(elementDoms[k]));
			}
			timeline.add(lineFocusRemover(lineDoms[9]));
			break;
		} else {
			timeline.add(finisher(elementDoms[n - i - 1]));
		}
		timeline.add(lineFocusRemover(lineDoms[8]));
		timeline.add(lineFocuser(lineDoms[2]));
		attachLabel(timeline);
	}
	timeline.add(lineFocusRemover(lineDoms[9]));
	timeline.add(lineFocuser(lineDoms[10]));
	attachLabel(timeline);
	return timeline;
}
