let contactButton = document.querySelector(".contacts__button");
let writeUs = document.querySelector(".write-us");
let closeWriteUs = writeUs.querySelector(".write-us__button--close-button");
let form = writeUs.querySelector("form");
let mapPopupButton = document.querySelector(".contacts__link-map");
let mapPopup = document.querySelector(".map-popup");
let closeMapPopupButton = mapPopup.querySelector(
  ".map-popup__button--close-button"
);

let inputName = form.querySelector("#write-us-form__name-input");
let inputEmail = form.querySelector("#write-us-form__email-input");
let inputText = form.querySelector("#write-us-form__textarea-input");

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.add("popup-show");
  let inputName = writeUs.querySelector("#write-us-form__name-input");
  inputName.focus();
});
closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.remove("popup-show");
  contactButton.focus();
});

mapPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
  closeMapPopupButton.focus();
});
closeMapPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
  contactButton.focus();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUs.classList.contains("popup-show")) {
      writeUs.classList.remove("popup-show");
    }
    if (mapPopup.classList.contains("popup-show")) {
      mapPopup.classList.remove("popup-show");
      writeUs.classList.remove("popup-error");
    }
  }
});

form.addEventListener("submit", function (e) {
  if (!inputName.value || !inputEmail.value || !inputText.value) {
    e.preventDefault();
    writeUs.classList.remove("popup-error");
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add("popup-error");
  }
});
