import {
	nodeFocusRemover,
	nodeFocuser,
	line,
	mover,
} from "./TreeSubroutineMethods";
import { lineFocuser, lineFocusRemover } from "../animate";
let count = 0;
let frameNo = 0;

function attachLabel(tl) {
	tl.addLabel("frame-" + String(frameNo++));
}

export default function levelOrder(tl, node, doms, edges, refRes, lineDoms) {
	tl.add(lineFocuser(lineDoms[0]));
	attachLabel(tl);
	tl.add(lineFocusRemover(lineDoms[0]));
	tl.add(lineFocuser(lineDoms[1]));
	attachLabel(tl);
	tl.add(lineFocusRemover(lineDoms[1]));
	tl.add(lineFocuser(lineDoms[2]));
	attachLabel(tl);
	tl.add(lineFocusRemover(lineDoms[2]));
	let visited = [];
	let queue = [node];
	while (queue.length !== 0) {
		let cur = queue.shift();
		tl.add(lineFocuser(lineDoms[3]));
		attachLabel(tl);
		tl.add(lineFocusRemover(lineDoms[3]));
		visited.push(cur);
		if (cur.parent !== 1) {
			tl.add(line(cur.parent.x, cur.parent.y, cur.x, cur.y, "red", 12, edges));
		}
		tl.add(nodeFocuser(cur, doms));
		tl.add(nodeFocusRemover(cur, visited, doms));
		tl.add(lineFocuser(lineDoms[4]));
		tl.add(mover(cur, count++, doms, refRes));
		attachLabel(tl);
		tl.add(lineFocusRemover(lineDoms[4]));
		tl.add(lineFocuser(lineDoms[5]));
		attachLabel(tl);
		if (cur.left) {
			tl.add(lineFocusRemover(lineDoms[5]));
			tl.add(lineFocuser(lineDoms[6]));
			attachLabel(tl);
			queue.push(cur.left);
			tl.add(lineFocusRemover(lineDoms[6]));
		}
		tl.add(lineFocusRemover(lineDoms[5]));
		tl.add(lineFocuser(lineDoms[7]));
		attachLabel(tl);
		if (cur.right) {
			tl.add(lineFocusRemover(lineDoms[7]));
			tl.add(lineFocuser(lineDoms[8]));
			attachLabel(tl);
			queue.push(cur.right);
			tl.add(lineFocusRemover(lineDoms[8]));
		}
		tl.add(lineFocusRemover(lineDoms[7]));
	}
	return tl;
}
