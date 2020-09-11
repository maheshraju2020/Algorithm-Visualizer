function numericChecker(userData) {
    for (let i = 0; i < userData.length; i++) {
        if (isNaN(userData[i])) {
            return false;
        }
    }
    return true;
}

function displayWarning(refWarner) {
    refWarner.current.style.visibility = "visible";
    setTimeout(() => (refWarner.current.style.visibility = "hidden"), 2500);
}

export function UserInputValidator(userData, props, refWarner) {
    if (!numericChecker(userData)) {
        displayWarning(refWarner);
        console.log("dhek");
        return false;
    }
    if (props.algoName === "Merge Sort" && userData.length > 6) {
        displayWarning(refWarner);
        return false;
    }
    if (userData.length < 1 || userData.length > 10) {
        displayWarning(refWarner);
        return false;
    }
    return true;
}
