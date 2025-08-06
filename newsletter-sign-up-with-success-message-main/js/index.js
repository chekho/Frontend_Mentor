let p = document.getElementById("invalid");
let input = document.getElementById("email");
let form = document.getElementById("form");
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("dismiss");
let ModalCard = document.getElementById("modal-card");

input.addEventListener("input", (e) => {
  if (e.target.validity.valid) {
    p.textContent = "";
    input.classList.remove("invalidInput");
    p.classList.remove("invalidText");
  } else {
    p.textContent = "Valid email required";
    input.classList.add("invalidInput");
    p.classList.add("invalidText");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

document.body.addEventListener("click", function () {
  modal.style.display = "none";
});

ModalCard.addEventListener("click", function (e) {
  e.stopPropagation();
});
