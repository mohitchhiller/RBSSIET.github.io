const openMobNav = function () {
  document.getElementById("navbar").classList.toggle("show-nav");
};

const openNav = function (x) {
  document.querySelector(`.drop${x}`).classList.toggle("active-nav");
  document.querySelector(`.drop${x}`).classList.toggle("inactive-nav");
};
