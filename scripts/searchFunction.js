const SEARCH_BOX = document.getElementById("searchBox");
const SELECT = document.getElementById("select");
let isOptionsOpen = false;
let isFilteringOn = false;

items.forEach((item, index) => {
  const option = document.createElement("div");
  option.setAttribute("class", "option");
  addAttributes(option, index);
  addEssentials(option, index);
  option.querySelector("div img").style.height = "0px";
  option.querySelector(".searchBorder").style.height = "0px";
  option.querySelector(".searchName").style.fontSize = "0px";
  option.style.height = "0px";
  option.onclick = () => selectOption(option);
  SEARCH_BOX.appendChild(option);
});

function addAttributes(option, index) {
  option.setAttribute("rarity", items[index].rarity);
  option.setAttribute("index", index);
}

function addEssentials(option, index) {
  addImage(option, index);
  addBorder(option);
  addName(option, index);
}

function addImage(option, index) {
  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("class", "searchImg");
  const img = new Image();
  img.src = "img/items/" + items[index].value + ".png";
  imgDiv.appendChild(img);
  option.appendChild(imgDiv);
}

function addBorder(option) {
  const border = document.createElement("div");
  border.setAttribute("class", "searchBorder");
  option.appendChild(border);
}

function addName(option, index) {
  const nameDiv = document.createElement("div");
  nameDiv.setAttribute("class", "searchName");
  nameDiv.innerHTML = items[index].name;
  option.appendChild(nameDiv);
}

function select(searchSelect) {
  searchSelect.querySelector(".searchName").innerText = "";
  searchSelect.setAttribute("rarity", "white");
  if (SEARCH_BOX.clientHeight > 50 || isOptionsOpen) {
    removeOptions();
  } else {
    createOptions();
  }
}

function removeOptions() {
  isOptionsOpen = false;
  SEARCH_BOX.querySelectorAll(".option").forEach((option) => {
    option.querySelector("div img").style.height = "0px";
    option.querySelector(".searchBorder").style.height = "0px";
    option.querySelector(".searchName").style.fontSize = "0px";
    option.style.height = "0px";
  });
  SEARCH_BOX.style = "height: 50px";
}

function createOptions() {
  isOptionsOpen = true;
  SEARCH_BOX.querySelectorAll(".option").forEach((option) => {
    option.querySelector("div img").style.height = "calc(100% - 5px)";
    option.querySelector(".searchBorder").style.height = "calc(100% - 10px)";
    option.querySelector(".searchName").style.fontSize = "20px";
    option.style.height = "50px";
  });
  SEARCH_BOX.style.height =
    SEARCH_BOX.querySelectorAll("div#select, div.option").length * 50 + "px";
}

function selectOption(option) {
  SELECT.querySelectorAll("div#select, #select div").forEach((element) =>
    element.remove()
  );
  const index = option.getAttribute("index");
  addAttributes(SELECT, index);
  addEssentials(SELECT, index);
  const selected = SELECT.querySelector(".searchName");
  const property = {
    contentEditable: true,
    spellcheck: false,
    oninput: function (event) {
      search(event.target);
    },
  };
  Object.assign(selected, property);
  removeOptions();
}

function search(div) {
  const inputElement = div.textContent.trim().toLowerCase();
  const options = document.querySelectorAll("#searchBox .option");
  let i = 1;
  options.forEach((option) => {
    const name = option.querySelector(".searchName").textContent.toLowerCase();
    if (name.includes(inputElement)) {
      option.style.height = "50px";
      option.querySelector("div img").style.height = "calc(100% - 5px)";
      option.querySelector(".searchBorder").style.height = "calc(100% - 10px)";
      option.querySelector(".searchName").style.fontSize = "20px";
      i++;
    } else {
      option.style.height = "0px";
      option.querySelector("div img").style.height = "0px";
      option.querySelector(".searchBorder").style.height = "0px";
      option.querySelector(".searchName").style.fontSize = "0px";
    }
  });
  SEARCH_BOX.style.height = i * 50 + "px";
}
