// let drinkBnt = document.querySelectorAll(".bnt");

// drinkBnt.forEach(function (img) {
//   img.addEventListener("click", function () {
//     console.log(this.alt);
//   });
// });

let drinkBnt = document.querySelectorAll(".bnt");

drinkBnt.forEach(function (img) {
  img.addEventListener("click", logRes);
});

function logRes() {
  console.log(this.alt);
}

// this.addEventListener("click", logRes);

// function logRes(drinkBnt) {
//   if ((alt = `${"pepsi"}`)) {
//     console.log("alkoholdfri");
//   } else {
//     console.log("indeholder alkohold");
//   }
// }
