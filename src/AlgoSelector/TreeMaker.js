let node, body, line;
let edgeDoms = {};
class Node {
	constructor(value, x, y, index) {
		this.x = x;
		this.y = y;
		this.value = value;
		this.left = null;
		this.right = null;
		this.indexInArr = index;
		this.visited = false;
		this.parent = null;
	}
}

const TreeConnector = (nodes) => {
	nodes[0].parent = nodes[0];
	nodes[0].left = nodes[1];
	nodes[0].right = nodes[2];
	nodes[1].left = nodes[3];
	nodes[1].right = nodes[4];
	nodes[2].right = nodes[5];
	nodes[4].left = nodes[6];
	nodes[4].right = nodes[7];
	nodes[5].left = nodes[8];
	nodes[1].parent = nodes[2].parent = nodes[0];
	nodes[3].parent = nodes[4].parent = nodes[1];
	nodes[6].parent = nodes[7].parent = nodes[4];
	nodes[8].parent = nodes[5];
	nodes[5].parent = nodes[2];
};

const TreeDrawer = (NodeArray) => {
	let domArray = [];
	for (let i = 0; i < NodeArray.length; i++) {
		let cur = NodeArray[i];
		let dom = circleDrawer(cur, node, body);
		domArray.push(dom);
		if (cur.left) {
			NodeConnector(cur.x, cur.y, cur.left.x, cur.left.y);
		}
		if (cur.right) {
			NodeConnector(cur.x, cur.y, cur.right.x, cur.right.y);
		}
	}
	return domArray;
};

const circleDrawer = (cur, node, body) => {
	let clone = node.cloneNode(true);
	clone.style.left = cur.x - 32 + "px";
	clone.style.top = cur.y - 32 + "px";
	clone.className = "circle " + String(cur.indexInArr);
	clone.style.visibility = "visible";
	clone.innerHTML = cur.value;
	body.appendChild(clone);
	return clone;
};
function NodeConnector(x0, y0, x1, y1) {
	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1", x0);
	l.setAttribute("y1", y0);
	l.setAttribute("x2", x1);
	l.setAttribute("y2", y1);
	l.setAttribute("stroke", "black");
	l.setAttribute("stroke-width", "5");
	line.appendChild(l);
	edgeDoms[[x0, y0, x1, y1]] = l;
}

const NodeMaker = (TreeNodes) => {
	let NodeArray = [];
	for (let i = 0; i < TreeNodes.length; i++) {
		let temp = [...TreeNodes[i]];
		temp = new Node(temp[0], temp[1], temp[2], i);
		NodeArray.push(temp);
	}
	return NodeArray;
};

export default function TreeMaker(refLine, refCircle, refWorkArea) {
	node = refCircle.current;
	line = refLine.current;
	body = refWorkArea.current;
	let domArray;
	let TreeNodes = [
		[0, 341, 46, 0],
		[1, 256, 138, 1],
		[2, 434, 135, 2],
		[3, 151, 252, 3],
		[4, 308, 250, 4],
		[5, 542, 239, 5],
		[6, 241, 363, 6],
		[7, 370, 363, 7],
		[8, 502, 363, 8],
	];

	let NodeArray = NodeMaker(TreeNodes);
	TreeConnector(NodeArray);
	domArray = TreeDrawer(NodeArray);
	return [NodeArray[0], domArray, edgeDoms];
}
