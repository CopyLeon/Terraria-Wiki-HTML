const scripts = ["filters", "searchFunction", "filterFunction"];

for (let i of scripts) {
  const x = document.createElement("script");
  x.setAttribute("src", "scripts/" + i + ".js");
  document.body.appendChild(x);
}

//Transfers the child element to the parent element
function transfer(array) {
  const keys = Object.keys(array);
  for (let i = keys.length - 1; i > 0; i--) {
    const parent = array[keys[i - 1]];
    const child = array[keys[i]];
    parent.appendChild(child);
  }
}

//Dynamic div the creates a div with the given class name
function createDiv(className, id) {
  const div = document.createElement("div");
  div.className = className;
  div.id = id;
  return div;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//Test function to test the script
function test(i) {
  const x = document.createElement("p");
  const p = document.createTextNode(i);
  x.appendChild(p);
  document.body.appendChild(x);
}
