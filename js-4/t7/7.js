const trigger = document.getElementById("trigger");
const target = document.getElementById("target");

trigger.addEventListener("mouseenter", function () {
  target.src = "picB.jpg";
});

trigger.addEventListener("mouseleave", function () {
  target.src = "picA.jpg";
});
