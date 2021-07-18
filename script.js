const navMob = document.getElementById("navdesk");

const openMobNav = function () {
  console.log("fn workin");
  navMob.classList.toggle("active");
  navMob.classList.toggle("hidden");
};
const openNav = function (x) {
  document.querySelector(`.drop${x}`).classList.toggle("active-nav");
  document.querySelector(`.drop${x}`).classList.toggle("inactive-nav");
};
