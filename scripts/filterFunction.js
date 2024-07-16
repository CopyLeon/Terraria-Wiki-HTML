const FILTER = document.querySelector("#filters");
const FILTER_CLOSE = document.querySelector("#filterClose");
const FILTER_OPEN = document.querySelector("#filterOpen");
let isFilterOpen = false;
let amountFiltersHeight = 0;

filters.forEach((filterType) => {
  const filter = createDiv("filter", filterType[0].toLowerCase());
  filter.innerHTML = filterType[0];
  FILTER_OPEN.appendChild(filter);
});

function filter() {
  isFilterOpen ? hideFilters() : showFilters();
}

function showFilters() {
  isFilterOpen = true;
  FILTER.style.width = "300px";
  FILTER.style.height = "172px";
  FILTER_CLOSE.style.display = "none";
  setTimeout(() => {
    FILTER_OPEN.style.display = "block";
  }, 500);
}

function hideFilters() {
  isFilterOpen = false;
  FILTER.style.width = "50px";
  FILTER.style.height = "50px";
  FILTER_OPEN.style.display = "none";
  setTimeout(() => {
    FILTER_CLOSE.style.display = "block";
  }, 500);
}
