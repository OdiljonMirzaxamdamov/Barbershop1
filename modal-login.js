const link = document.querySelector(".login-link");
const popup = document.querySelector(".modal-login");
const close = document.querySelector(".modal-close");

const form = popup.querySelector("form");
const login = popup.querySelector("[name=login]");
const password = popup.querySelector("[name=password]");

let isStorageSupport = true;
let storage = "";


try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}


link.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});


close.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});


form.addEventListener("submit", function (evt){
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});


window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});