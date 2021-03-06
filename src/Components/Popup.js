import React, { createRef } from "react";
import { UserInputValidator } from "../HelperFunctions/UserInputValidator";
import "./CSS/Popup.css";

export default function Popup(props) {
    const refUserInput = createRef();
    const refWarner = createRef();
    let num = 10;
    if (props.algoName === "Merge Sort") {
        num = 6;
    }
    function ClosePopup() {
        props.popupPage.current.style.display = "none";
    }

    function UserInputHandler() {
        let userData = refUserInput.current.value;
        userData = userData.split(" ");
        if (UserInputValidator(userData, props, refWarner)) {
            refUserInput.current.value = "";
            props.HandleUserInput(userData);
            ClosePopup();
        }
    }
    const warning = (
        <div id="warning">
            <div className="message">*Numbers should be less than 100</div>
            <div className="message">*Maximum {num} numbers allowed</div>
        </div>
    );
    return (
        <div className="modal" ref={props.popupPage}>
            <div id="PopupInput">
                <div id="close" onClick={ClosePopup}>
                    +
                </div>
                <div id="popup_head">Enter Space Seperated Numbers</div>
                <input
                    id="user_input"
                    type="text"
                    placeholder="Enter Here..."
                    ref={refUserInput}
                ></input>
                <div id="submit" onClick={UserInputHandler}>
                    Submit
                </div>
                <div className="giveWarning" ref={refWarner}>
                    *Invalid Input
                </div>
                {warning}
            </div>
        </div>
    );
}
