import open from "../Images/DrawerOpenArrow.png";
import close from "../Images/DrawerCloseArrow.png";

export function slideDrawer(currentDrawerState, arr) {
	console.log(arr);
	if (currentDrawerState[0] === 0) {
		arr[0].current.classList.add("slide-in");
		arr[1].current.classList.add("slide-in");
		arr[2].current.style.marginLeft = "665px";
		if (arr[arr.length - 1] === true) {
			arr[3].current.style.marginLeft = "520px";
		} else {
			arr[3].current.style.marginLeft = "265px";
		}
		arr[4].current.style.marginLeft = "350px";
		arr[5].current.style.marginLeft = "900px";
		arr[6].current.src = open;
		currentDrawerState[0] = 1;
	} else {
		arr[0].current.classList.remove("slide-in");
		arr[1].current.classList.remove("slide-in");
		arr[2].current.style.marginLeft = "815px";
		if (arr[arr.length - 1] === true) {
			arr[3].current.style.marginLeft = "750px";
		} else {
			arr[3].current.style.marginLeft = "405px";
		}
		arr[4].current.style.marginLeft = "500px";
		arr[5].current.style.marginLeft = "1050px";
		arr[6].current.src = close;
		currentDrawerState[0] = 0;
	}
}
