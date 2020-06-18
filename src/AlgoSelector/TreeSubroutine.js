import PreorderCode from "../AlgoCodes/TreeCodes/PreorderCode";
import InorderCode from "../AlgoCodes/TreeCodes/InorderCode";
import PostorderCode from "../AlgoCodes/TreeCodes/PostorderCode";
import LevelorderCode from "../AlgoCodes/TreeCodes/LevelorderCode";
import preorder from "../Algorithms/TreeAlgo/Preorder";
import inorder from "../Algorithms/TreeAlgo/Inorder";
import postorder from "../Algorithms/TreeAlgo/PostOrder";
import levelorder from "../Algorithms/TreeAlgo/Levelorder";

export function CodeSelector(algoName) {
	if (algoName === "pre-order") {
		return PreorderCode;
	} else if (algoName === "in-order") {
		return InorderCode;
	} else if (algoName === "post-order") {
		return PostorderCode;
	} else {
		return LevelorderCode;
	}
}

export function algorithmSelector(
	algoName,
	tl,
	lineDoms,
	refResult,
	rootNode,
	doms,
	edgeDoms
) {
	if (algoName === "pre-order") {
		tl = preorder(tl, rootNode, doms, edgeDoms, refResult, lineDoms);
	} else if (algoName === "in-order") {
		tl = inorder(tl, rootNode, doms, edgeDoms, refResult, lineDoms);
	} else if (algoName === "post-order") {
		tl = postorder(tl, rootNode, doms, edgeDoms, refResult, lineDoms);
	} else {
		tl = levelorder(tl, rootNode, doms, edgeDoms, refResult, lineDoms);
	}
	return tl;
}
