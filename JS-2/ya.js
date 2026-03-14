let header = document.createElement("header");

let div = document.createElement("div");
let textdiv = document.createTextNode("ELZERO");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let a1 = document.createElement("a");
let a2 = document.createElement("a");
let a3 = document.createElement("a");
let texta1 = document.createTextNode("Home");
let texta2 = document.createTextNode("About");
let texta3 = document.createTextNode("Content");
let divparent = document.createElement("div");
a1.appendChild(texta1);
a2.appendChild(texta2);
a3.appendChild(texta3);

div.appendChild(textdiv);
header.appendChild(div);
header.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(a1);
ul.appendChild(a2);
ul.appendChild(a3);
//style
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
div.style.color = "green";
div.style.fontFamily = "system-ui";
a2.style.margin = "0px 20px";
document.body.appendChild(header);
for (let i = 1; i <= 15; i++) {
  let div2 = document.createElement("div");
  div2.textContent = "Product " + i;
  div2.style.backgroundColor = "#ffffff";
  div2.style.padding = "20px";
  div2.style.width = "150px";
  div2.style.alignContent = "center";
  div2.style.marginBottom = "10px";
  div2.style.marginLeft = "10px";
  divparent.appendChild(div2);
}
divparent.setAttribute("class", "yasser");
divparent.style.textAlign = "center";
divparent.style.display = "grid";
divparent.style.justifyContent = "space-around";
divparent.style.padding = "15px";

divparent.style.backgroundColor = "#eee";
divparent.style.gridTemplateColumns = "repeat(3, auto)";
let footer = document.createElement("div");
footer.textContent = "yasser";
document.body.appendChild(divparent);
document.body.appendChild(footer);
footer.style.cssText =
  "background-color: #18996e ; text-align: center;   padding: 7px; color: white";
