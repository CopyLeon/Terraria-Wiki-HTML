const scripts = [
    "items", "selectFunction"
]

const p = document.querySelector("p");
p.innerHTML = "No Output";

for (let i of scripts) {
    const x = document.createElement("script");
    x.setAttribute("src", "scripts/" + i + ".js");
    document.body.appendChild(x);
}

function test(i) {
    const x = document.createElement("p");
    const p = document.createTextNode(i);
    x.appendChild(p);
    document.body.appendChild(x);
}