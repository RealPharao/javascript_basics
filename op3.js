let getNumber = Math.round(Math.random() * 11);

console.log(getNumber);

// Vørdien defineres af brugeren, skal derfor være inde i funktionen der kaldes af brugeren.
// let inp = document.getElementById("random").value;

document.getElementById("bnt").addEventListener("click", rand);

function rand() {
  let inp = document.getElementById("random").value;
  if (inp == getNumber) {
    alert("Tilykke det var det rigtige tal");
  } else if (inp > getNumber) {
    alert("Du har gættet for høj, prøv at sænke værdien");
  } else {
    alert("du har gættet for lavt, prøv at hæve værdien.");
  }
}
