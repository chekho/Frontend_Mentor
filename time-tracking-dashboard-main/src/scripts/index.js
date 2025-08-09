const articles = document.querySelectorAll("main > article:not(:first-child)");
let fetchedData;
const container = document.getElementsByClassName("report-type")[0];

let equivalent = { daily: "day", weekly: "week", monthly: "month" };

fetch("./src/assets/data/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    fetchedData = data;
    changeData("weekly");
  });

function changeData(tipo) {
  articles.forEach((article, index) => {
    const data = fetchedData[index];
    const titleP = article.querySelector("div > div > p");
    const hoursH2 = article.querySelector("h2");
    const lastWeekP = article.querySelector("h2 + p");
    titleP.textContent = data.title;
    hoursH2.textContent = data.timeframes[tipo].current + "hrs";

    lastWeekP.textContent =
      `Last ${equivalent[tipo]} - ` + data.timeframes[tipo].previous + "hrs";
  });
}

container.addEventListener("click", (event) => {
  let clickedspan = event.target.closest("span");
  if (!clickedspan) return;
  changeData(clickedspan.textContent.toLowerCase());
  const active = document.getElementsByClassName("active")[0];
  if (active) active.classList.remove("active");
  clickedspan.classList.add("active");
});
