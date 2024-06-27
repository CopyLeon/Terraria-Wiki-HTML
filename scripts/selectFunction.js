const selectBox = document.getElementById("selectBox");
const ITEMS = Object.keys(items);
let SELECTED_BOX = document.getElementById("select");
let SELECTED_NAME_BOX = document.querySelector(".optionBox.name");
let isOptionsOpen = false;
let array = ["items"];
let completedArray = array.join("");
let func = [];
let item;
let input = "";
let prevInput = "";
let property;
let value;
let path;

function updater() {
    SELECTED_NAME_BOX = document.querySelector("#select .optionBox.name");
    SELECTED_BOX = document.getElementById("select");
}

function search() {
    input = SELECTED_NAME_BOX.textContent;
    input = input.trim();
    input = input.toLowerCase();
    closeOptions();
    openOptions();
    const z = selectBox.querySelectorAll("div.option");
    for (let x = 0; x < z.length; x++) {
        if (!z[x].getAttribute("name").toLowerCase().includes(input)) {
            z[x].remove()
        }
    }
}

function optionSelected(option) {
    const select = document.getElementById("select");
    option.setAttribute("class", "");
    option.setAttribute("id", "select");
    option.setAttribute("onclick", "select()");
    option.setAttribute("tabindex", "-1");
    option.setAttribute("aria-hidden", "true");
    option.querySelector("img").setAttribute("class", "selectorImg");
    selectBox.replaceChild(option, select);
    closeOptions();
}

function select() {
    updater();
    SELECTED_BOX.setAttribute("rarity", "white")
    SELECTED_NAME_BOX.innerHTML = "";
    if (!isOptionsOpen) {
        openOptions();

    } else {
        closeOptions();
    }
}

function openOptions() {
    isOptionsOpen = true
    createOptions();
}

function closeOptions() {
    isOptionsOpen = false;
    const option = document.querySelectorAll(".option");
    for (let x = 0; x < option.length; x++) {
        option[x].remove();
    }
}

function createOptions() {
    for (let i = 0; i < ITEMS.length; i++) {
        updateFunc(i);
        const option = document.createElement("div");
        option.setAttribute("class", "option");
        option.setAttribute("onclick", "optionSelected(this)");
        addItem(option);
        selectBox.appendChild(option)
        deleteItem();
    }
}

function addItem(option) {
    updateItem();
    for (let z = 0; z < eval(func[1]); z++) {
        updateFunc(z);
        updateProperty();
        updateValue();
        option.setAttribute(property, value);
        deleteProperty();
        deleteValue();        
    }    
    addImg(option);
    addName(option);
}

function addImg(option) {
    const imgBox = document.createElement("div");
    imgBox.setAttribute("class", "optionBox img");
    const img = document.createElement("img");
    img.setAttribute("class", "option optionImg");
    img.setAttribute("src", "img/items/" + option.getAttribute("value") + ".png");
    imgBox.appendChild(img);
    option.appendChild(imgBox);
}

function addName(option) {
    const nameBox = document.createElement("div");
    nameBox.setAttribute("class", "optionBox name");
    nameBox.setAttribute("contenteditable", "true");
    nameBox.setAttribute("spellcheck", "false");
    nameBox.setAttribute("oninput", "search()");
    const x = document.createTextNode(option.getAttribute("name"));
    nameBox.appendChild(x);
    option.appendChild(nameBox);
}

function updateFunc(i) {
    func[0] = "Object.keys(" + completedArray + ")[" + i + "];";
    func[1] = "Object.keys(" + completedArray + ").length;";
}

function updateArray() {
    for (let x = 0; x < array.length; x++) {
        if (array[x] !== "" && array[x] !== "items" && !array[x].startsWith(".") ) {
            array[x] = "." + array[x];
        }
    }
    completedArray = array.join("");
}

function updateItem() {
    item = eval(func[0]);
    updaterItem()
}

function deleteItem() {
    item = "";
    updaterItem();
}

function updaterItem() {
    array[1] = item;
    updateArray();
}

function updateProperty() {
    property = eval(func[0]);
    updaterProperty();
}

function deleteProperty() {
    property = "";
    updaterProperty();
}

function updaterProperty() {
    array[2] = property;
    updateArray();
}

function updateValue() {
    value = eval(completedArray);
}

function deleteValue() {
    value = "";
}