let button = document.getElementById("share-icon");
let tooltip = document.querySelector(".tool-tip-section");

button.addEventListener("click", function (e) {
  e.stopPropagation();
  if (tooltip.style.display === "flex") {
    tooltip.style.display = "none";
    button.querySelector("img").classList.remove("negative");
    button.classList.remove("negativeButton");
  } else {
    tooltip.style.display = "flex";
    button.querySelector("img").classList.add("negative");
    button.classList.add("negativeButton");
  }
});

document.body.addEventListener("click", function () {
  tooltip.style.display = "none";
  button.querySelector("img").classList.remove("negative");
  button.classList.remove("negativeButton");
});

tooltip.addEventListener("click", function (e) {
  e.stopPropagation();
});
