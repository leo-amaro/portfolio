document.addEventListener("DOMContentLoaded", function () {
  //
  window.setTimeout(
    document.querySelector("svg").classList.add("animated"),
    1000
  );
});

//mouse cursor
// Mouse Cursor Animation
gsap.set(".ball", { xPercent: -50, yPercent: -50 });
const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.08;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});
gsap.ticker.add(() => {
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

// hamburger menu function
let burger = document.getElementById("navTrigger"),
  nav = document.getElementById("navMenu");
burger.addEventListener("click", function (e) {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

// animate name
$(".txt").html(function (i, html) {
  var chars = $.trim(html).split("");

  return "<span>" + chars.join("</span><span>") + "</span>";
});
