import SelectionSortCode from "../AlgoCodes/SortingCodes/SelectionSortCode";
import InsertionSortCode from "../AlgoCodes/SortingCodes/InsertionSortCode";
import BubbleSortCode from "../AlgoCodes/SortingCodes/BubbleSortCode";
import MergeSortCode from "../AlgoCodes/SortingCodes/MergeSortCode";
import selection_sort from "../Algorithms/Sorting/SelectionSort";
import insertion_sort from "../Algorithms/Sorting/InsertionSort";
import bubble_sort from "../Algorithms/Sorting/BubbleSort";
import merge_sort from "../Algorithms/Sorting/MergeSort";

export function CodeSelector(algoName) {
	if (algoName === "selection-sort") {
		return SelectionSortCode;
	} else if (algoName === "insertion-sort") {
		return InsertionSortCode;
	} else if (algoName === "bubble-sort") {
		return BubbleSortCode;
	} else if (algoName === "merge-sort") {
		return MergeSortCode;
	} else if (algoName === "preorder-traversal") {
		return MergeSortCode;
	}
}

export function algorithmSelector(
	algoName,
	tl,
	domObjects,
	lineDoms,
	parDom,
	WorkArea
) {
	if (algoName === "selection-sort") {
		tl = selection_sort(tl, domObjects, lineDoms);
	} else if (algoName === "insertion-sort") {
		tl = insertion_sort(tl, domObjects, lineDoms);
	} else if (algoName === "bubble-sort") {
		tl = bubble_sort(tl, domObjects, lineDoms);
	} else {
		for (let i = 0; i < domObjects.length; i++) {
			domObjects[i].classList.remove("box");
			domObjects[i].classList.add("boxms");
		}
		tl = merge_sort(tl, domObjects, lineDoms, parDom.current, WorkArea);
	}
	return tl;
}
