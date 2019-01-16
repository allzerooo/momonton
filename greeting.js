const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = documnet.querySelector(".js-greeting");

const USER_LOCAL_STORAGE = "currentUser",
    SHOWING_CLASS_NAME = "showing";

function paintGreeting(text) {
    greeting.classList.add(SHOWING_CLASS_NAME);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);

    if ( currentUser === null ) {

    } else {
        paintGreeting(currentUser);
    }
}

function init() {

}

init();