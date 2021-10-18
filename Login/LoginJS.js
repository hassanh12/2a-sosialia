const modal = document.querySelector(".app-modal");

modal.addEventListener("click", (event) => {
    const modalBody = document.querySelector(".app-modal-body");
    const isBackdropElemClick = !modalBody.contains(event.target);

    if (isBackdropElemClick) {
        toggleClass(modal, "modal-active");
    }
});

const loginButton = document.querySelector(".app-login-button");
const saveButton = document.querySelector(".app-save-button");
const modalButtons = [saveButton, loginButton];

modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        toggleClass(modal, "modal-active");
    });
});

const settingsButtons = document.querySelectorAll(".app-settings-button");

settingsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const icon = button.parentNode.querySelector(
            ".app-settings-button-icon"
        );

        toggleClass(button, "settings-button-active");
        toggleClass(icon, "settings-button-icon-active");
    });
});

const inputContainers = document.querySelectorAll(".app-input");

inputContainers.forEach((container) => {
    const input = container.querySelector("input");
    const events = ["focus", "blur"];

    events.forEach((event) => {
        input.addEventListener(event, () => {
            if (!input.value) {
                toggleClass(container, "input-active");
            }
        });
    });
});

function toggleClass(element, className) {
    const isActive = element.classList.contains(className);

    if (isActive) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}
