const downloadButtons = document.querySelectorAll("[data-download]");
const downloadFunction = (a) => {
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

downloadButtons.forEach((button) => {
  const a = document.createElement("a");
  a.style.display = "none";

  a.href = "./img-1.png";
  a.download = "img-1"

  button.addEventListener("click", () => downloadFunction(a));

  button.removeEventListener("click", () => downloadFunction(a));
});
