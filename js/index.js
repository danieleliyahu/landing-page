const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const tab2 = document.getElementById("tab-1-content");
const tab = document.getElementById("tab-2-content");
const close = document.getElementById("closepopup");
const modal_container = document.getElementById("modal_container");
const button = document.getElementById("button");

function selectItem(e) {
  removeBorder();
  console.log(this.id);
  if (this.id === "tab-2") {
    tab.classList.remove("hiden");
    tab2.classList.add("hiden");
  } else {
    tab2.classList.remove("hiden");
    tab.classList.add("hiden");
  }
  this.classList.add("tab-border");
}
close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
button.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
window.setTimeout(function () {
  modal_container.classList.add("show");
}, 5000);

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

tabItems.forEach((item) => item.addEventListener("click", selectItem));
