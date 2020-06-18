import UserInpSliderOpenArrow from "../Images/InputSliderOpenArr.svg";
import UserInpSliderCloseArrow from "../Images/CloseInputSliderArr.svg";

export function UserInpSliderSubroutine(state, ref1, ref2) {
	if (state === 0) {
		ref1.current.style.marginLeft = "1138px";
		ref2.current.src = UserInpSliderCloseArrow;
		return 1;
	} else {
		ref1.current.style.marginLeft = "1320px";
		ref2.current.src = UserInpSliderOpenArrow;
		return 0;
	}
}

export function SliderBackgroundUpdator(refSlider, colour, value) {
	if (value === undefined) {
		value = refSlider.current.value;
	}
	let temp =
		"linear-gradient(to right, #clr 0%, #clr #value%, #EFEFF1 #value%, #EFEFF1 100%)";
	temp = temp.split("#clr").join(colour);
	temp = temp.split("#value").join(value);
	refSlider.current.style.background = temp;
}
