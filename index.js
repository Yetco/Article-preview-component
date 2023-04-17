const person = document.querySelector(".flex-group");
const shareButton = document.getElementById("share");
const desk = document.querySelector(".drawer-image");
const removeShares = document.querySelector("#shares");
const smallIcons = document.querySelector(".si");
const smic = document.querySelector(".sm-ic");
const triangle = document.querySelector(".triangle-down");

shareButton.addEventListener("click", () => {
  smallIcons.classList.toggle("clicked");
  triangle.classList.toggle("hide");
});

// shareButton.addEventListener("click", () => {
// triangle.classList.toggle("hide");
// triangle.style.display = "block";
// });

removeShares.addEventListener("click", () => {
  smallIcons.classList.remove("clicked");
});

//Adding the hide and remove class
//shareButton.addEventListener("click", () => {
//person.classList.add("hide");
// person.style.display = "none";
//smic.classList.remove("hide");
// smallIcons.classList.add("si");
// smallIcons.style.display = "block";
//});

//Adding the hide and remove class
/*shares.addEventListener("click", () => {
  smic.classList.add("hide");
  person.classList.remove("hide");
});*/

//Just trying out the smooth scroll button
/*function scrollF() {
  let e = document.getElementById("share");
  let f = document.getElementById("shares");
  e,
    f.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
}*/
