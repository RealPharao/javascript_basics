new Date().getHours();

let currentTime = new Date().getHours();

let gretting = "";

if (currentTime > 4 && currentTime < 11) {
  console.log("Godmorgen");
  gretting = "Godmorgen";
} else if (currentTime > 9 && currentTime < 19) {
  console.log("Goddag");
  gretting = "Goddag";
} else if (currentTime == 0 || (currentTime > 0 && currentTime < 6)) {
  console.log("Godnat");
  gretting = "Godnat";
} else {
  console.log("God aften");
  gretting = "God aften";
}

// alert("kl:" + currentTime + " " + gretting);

alert(`KL:${currentTime} ${gretting}`);
