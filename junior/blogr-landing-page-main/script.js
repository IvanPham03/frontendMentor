const btnShowNav = document.getElementById("btn-show-nav");

const listNav = document.querySelector(".nav-items");

function showListNav() {
  listNav.classList.toggle("show");
  listNav.classList.remove("remove-show-list");

}

btnShowNav.addEventListener("click", () => {
  showListNav();
  if (listNav.classList.contains("show")) {
    document.getElementById("btn").classList.add("show-btn");
    if (document.getElementById("btn").classList.contains("show-btn")) {
      btnShowNav.childNodes[1].src = "./images/icon-close.svg";
      document.getElementById("btn").classList.remove("close-btn");
    }
  } else {
    listNav.classList.add("remove-show-list");
    document.getElementById("btn").classList.add("close-btn");
    if (document.getElementById("btn").classList.contains("close-btn")) {
      btnShowNav.childNodes[1].src = "./images/icon-hamburger.svg";
      document.getElementById("btn").classList.remove("show-btn");
    }
    // document.getElementById("btn").classList.remove("show-btn");
  }
  // if{}
  // document.getElementById('btn').classList.toggle('close-btn');
});
