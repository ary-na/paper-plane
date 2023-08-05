const switchElement = document.querySelector("sl-switch");
const htmlElement = document.querySelector("html");

// Code sourced and adapted from:
// https://shoelace.style/getting-started/usage#events

// Create a change event listener on the switch element.
switchElement.addEventListener('sl-change', evt => {
    // Condition: the checked property is true
    if (evt.target.checked) {
        // Add the switch-on class to the switch and the dark theme class to the html.
        evt.target.classList.remove("switch-off");
        evt.target.classList.add("switch-on");
        htmlElement.classList.add("sl-theme-dark");
    } else {
        // Add the switch-off class from the switch and remove the dark theme class from the html.
        evt.target.classList.remove("switch-on");
        evt.target.classList.add("switch-off");
        htmlElement.classList.remove("sl-theme-dark");
    }
});

