console.log("funziona?");
const header = document.getElementsByClassName("navBar")[0];
const button = document.getElementsByClassName("navButton")[0];
console.log(header);
window.addEventListener("scroll", function () {
  console.log("tutto ok?");

  if (this.scrollY >= 350) {
    header.classList.add("whiteHeader");
    button.classList.add("greenButton");
  } else {
    header.classList.remove("whiteHeader");
    button.classList.remove("greenButton");
  }
});
