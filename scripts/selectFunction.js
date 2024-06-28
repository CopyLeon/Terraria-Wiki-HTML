const SEARCH_BOX = document.getElementById("searchBox");
const SELECT = document.getElementById("select");
let isOptionsOpen = false;
let isFilterOn = false

function search(div) {
    let input = div.textContent;
    input = input.trim();
    input = input.toLowerCase();
    removeOptions();
    createOptions();
    const option = SEARCH_BOX.querySelectorAll("div.option");
    for (let x = 0; x < option.length; x++) {
        if (!option[x].getAttribute("name").toLowerCase().includes(input) && option[x].getAttribute("name") !== "None") {
            option[x].remove()
        }
    }
}

function selectOption(x) {
    const option = x;
    const div = SELECT.querySelectorAll("div");
    for (let x = 0; x < div.length; x++) {
        div[x].remove();
    }
    for (let x = 0; x < items.length; x++) {
        if (Object.values(items[x])[0] === option.getAttribute("value")) {
            addAttributes(x, SELECT);
            addEssensials(SELECT);
        }
    }
    const select = SELECT.querySelector(".searchName");
    select.setAttribute("contenteditable", "true");
    select.setAttribute("spellcheck", "false");
    select.setAttribute("oninput", "search(this)");
    removeOptions();
}

function select(x) {
    const searchSelect = x;
    searchSelect.querySelector(".searchName").innerText = "";
    searchSelect.setAttribute("rarity", "white")
    if (!isOptionsOpen) {
        createOptions();

    } else {
        removeOptions();
    }
}

function removeOptions() {
    isOptionsOpen = false;
    const option = SEARCH_BOX.querySelectorAll("div.option");
    for (let x = 0; x < option.length; x++) {
        option[x].remove();
    }
}

function createOptions() {
    isOptionsOpen = true;
    for (let x = 0; x < items.length; x++) {
        const option = createDiv("option");
        option.setAttribute("onclick", "selectOption(this)")
        addAttributes(x, option);
        addEssensials(option);
        transfer({SEARCH_BOX, option});
    }

}

function createDiv(className) {
    const x = document.createElement("div");
    x.setAttribute("class", className);
    return x
}

function addEssensials(option) {
    addSearchImage(option);
    addSearchBorder(option);
    addSearchName(option);
}

function addSearchImage(option) {
    const x = createDiv("searchImg");
    const name = option.getAttribute("value");
    const img = createImg(name)
    transfer({ option, x, img });
}

function addSearchBorder(option) {
    const x = createDiv("searchBorder");
    transfer({ option, x })
}

function addSearchName(option) {
    const x = createDiv("searchName");
    const name = option.getAttribute("name");
    const text = document.createTextNode(name);
    transfer({ option, x, text });
}

function addAttributes(item, option) {
    for (let x = 0; x < Object.keys(items[item]).length; x++) {
        const property = getProperty(item, x);
        const value = getValue(item, x);
        addAttribute(property, value, option)
    }
}

function addAttribute(property, value, option) {
    option.setAttribute(property, value);
}

function createImg(value) {
    const x = document.createElement("img");
    x.setAttribute("src", "img/items/" + value + ".png")
    return x;
}

function createTextNode(value) {
    const x = document.createTextNode(name);
    return x;
}

function getProperty(item, number) {
    const x = Object.keys(items[item])[number];
    return x;
}

function getValue(item, number) {
    const x = Object.values(items[item])[number];
    return x;
}

function transfer(array) {
    for (let x = Object.keys(array).length - 1; x > 0; x--) {
        Object.values(array)[x - 1].appendChild(Object.values(array)[x]);
    }
}