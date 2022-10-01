const button = document.createElement("button");
document.body.appendChild(button);
button.innerText = " click button ";

button.addEventListener("click", onClick);

function onClick() {
  const h1 = document.createElement("h1");
  document.body.appendChild(h1);
  h1.innerHTML = "This is an h1 tag";
}
