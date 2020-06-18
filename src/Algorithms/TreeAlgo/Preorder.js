import {
	nodeFocusRemover,
	nodeFocuser,
	line,
	mover,
} from "./TreeSubroutineMethods";
import { lineFocuser, lineFocusRemover } from "../animate";
let count = 0;
let frameNo = 0;

function attachLabel(timeline) {
	timeline.addLabel("frame-" + String(frameNo++));
}

export default function preorder(tl, node, doms, edges, refRes, lineDoms) {
	if (frameNo === 0) {
		tl.add(lineFocuser(lineDoms[0]));
		attachLabel(tl);
		tl.add(lineFocusRemover(lineDoms[0]));
	}
	tl.add(lineFocusRemover(lineDoms[3]));
	tl.add(lineFocusRemover(lineDoms[4]));
	tl.add(lineFocuser(lineDoms[1]));
	if (node === null) {
		attachLabel(tl);
	}
	let visited = [];
	if (node) {
		visited.push(node);
		tl.add(nodeFocuser(node, doms));
		attachLabel(tl);
		tl.add(nodeFocusRemover(node, visited, doms));
		tl.add(lineFocusRemover(lineDoms[1]));
		tl.add(lineFocuser(lineDoms[2]));
		tl.add(mover(node, count++, doms, refRes));
		attachLabel(tl);
		tl.add(lineFocusRemover(lineDoms[2]));
		tl.add(lineFocuser(lineDoms[3]));
		if (node.left) {
			tl.add(line(node.x, node.y, node.left.x, node.left.y, "red", 12, edges));
		}
		attachLabel(tl);
		preorder(tl, node.left, doms, edges, refRes, lineDoms);
		tl.add(lineFocuser(lineDoms[4]));
		if (node.right) {
			tl.add(nodeFocuser(node, doms));
			attachLabel(tl);
			tl.add(nodeFocusRemover(node, visited, doms));
			tl.add(
				line(node.x, node.y, node.right.x, node.right.y, "red", 12, edges)
			);
			tl.add(lineFocuser(lineDoms[4]));
			attachLabel(tl);
		}
		tl.add(lineFocuser[lineDoms[1]]);
		attachLabel(tl);
		tl.add(lineFocusRemover(lineDoms[1]));
		preorder(tl, node.right, doms, edges, refRes, lineDoms);
		tl.add(nodeFocuser(node, doms));
		attachLabel(tl);
		tl.add(nodeFocusRemover(node, visited, doms));
		tl.add(
			line(node.parent.x, node.parent.y, node.x, node.y, "green", 8, edges)
		);
	} else {
		tl.add(lineFocusRemover(lineDoms[1]));
	}
}
