let state = {
    count: 0
}

function onButtonPress() {
    state.count++;
    buttonComponentReRender()
}

function buttonComponentReRender() {
    document.getElementById("buttonParent").innerHTML = "";
    const componet = buttonComponent(state.count);
    document.getElementById("buttonParent").appendChild(componet);
}

function buttonComponent(count) {
    const button = document.createElement("button");
    button.innerHTML = `Counter ${count}`;
    button.setAttribute("onclick", `onButtonPress()`);
    return button;
}

buttonComponentReRender();