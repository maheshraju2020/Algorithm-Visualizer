import { gsap } from "gsap";

let duration = 0.15;
let origColor = "#1C8BF9";
let focusColor = "#FF4102";
let markColor = "rgba(96, 96, 96, 0.83)";
let finishColor = "#3FCA41";

export const focusAdder = (element, time = 0) => {
	//Creating a gsap timeline and adding animation
	var tl = gsap.timeline();
	tl.to(element, {
		ease: "none",
		duration: duration,
		background: focusColor,
	});
	return tl;
};

/* focusRemover function removes the work done by focusAdder gives the element its original background colour */

export const focusRemover = (element) => {
	//Creating a gsap timeline and adding animation
	let tl = gsap.timeline();
	tl.to(element, {
		ease: "none",
		duration: duration,
		background: origColor,
	});
	return tl;
};

/* marker function adds color to the element which is marked for operation in future */

export const marker = (element) => {
	//Creating a gsap timeline and adding animation
	var tl = gsap.timeline();
	tl.to(element, {
		ease: "none",
		duration: duration,
		background: markColor,
	});
	return tl;
};

/* finisher function adds color to the element representing that all operations on this element is finished */

export const finisher = (element) => {
	//Creating a gsap timeline and adding animation
	var tl = gsap.timeline();
	tl.to(element, {
		ease: "none",
		duration: duration,
		background: finishColor,
	});
	return tl;
};

export const lineFocuser = (element) => {
	//Creating a gsap timeline and adding animation
	var tl = gsap.timeline();
	tl.to(element, {
		ease: "none",
		duration: 0.1,
		background: "#d36666",
	});
	return tl;
};

export const lineFocusRemover = (element) => {
	var tl = gsap.timeline();
	tl.to(element, {
		ease: "none",
		duration: 0.1,
		background: "#e9e8aa",
	});
	return tl;
};

export const SelectionSortSwapper = (element, x, y) => {
	let tl = gsap.timeline();
	tl.to(element, {
		ease: "none",
		y: y,
		duration: 0.25,
		delay: 0.25,
	});
	tl.to(element, {
		x: "+=" + x,
		ease: "none",
		duration: 0.15,
	});
	tl.to(element, {
		y: 0,
		ease: "none",
		duration: 0.15,
		delay: 0.15,
	});
	return tl;
};

export const UpMover = (dom, offset) => {
	if (offset === undefined) {
		offset = -150;
	}
	var tl = gsap.timeline();
	tl.to(dom, {
		ease: "none",
		y: offset,
		duration: 0.25,
	});
	return tl;
};
export const RightMover = (dom) => {
	var tl = gsap.timeline();
	tl.to(dom, 0.5, {
		ease: "none",
		x: "+=95",
		duration: 0.5,
	});
	return tl;
};

export const LeftMover = (dom) => {
	var tl = gsap.timeline();
	tl.to(dom, 0.5, {
		ease: "none",
		x: "-=95",
		duration: 0.5,
	});
	return tl;
};

export const LeftDownMover = (dom, count) => {
	var tl = gsap.timeline();
	let dist = count * 95;
	tl.to(dom, {
		x: "-=" + dist,
		ease: "none",
		duration: 0.25,
	});
	tl.to(dom, {
		y: "+=" + 150,
		ease: "none",
		duration: 0.25,
	});
	return tl;
};

export const mergeSortUpMover = (childDom1, childDom2, divs, divDom, distY) => {
	let tl = gsap.timeline();
	tl.add("parallel1");
	tl.to(
		childDom1,
		{
			opacity: 0,
			duration: 0.1,
		},
		"parallel1"
	)
		.to(
			childDom2,
			{
				opacity: 0,
				duration: 0.1,
			},
			"parallel1"
		)
		.to(
			divs,
			{
				opacity: 1,
				duration: 0.1,
			},
			"parallel1"
		)
		.add("parallel2")
		.to(
			divs,
			{
				y: distY,
				delay: 0.2,
			},
			"parallel1"
		)
		.to(
			divDom,
			{
				opacity: 0,
				delay: 0.3,
			},
			"parallel2"
		);
	return tl;
};

export const boxAnimator = (dom, dist) => {
	let t1 = gsap.timeline();
	t1.to(dom, {
		y: 90,
		x: dist,
	});
	return t1;
};

export const visible = (child, shift) => {
	let temp;
	if (shift === "l") {
		temp = 60;
	} else {
		temp = -60;
	}
	let t1 = gsap.timeline();
	t1.from(child, { x: temp, y: -100, opacity: 0 }, { opacity: 1 });
	return t1;
};
