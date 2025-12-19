const darklight =
document.getElementById("darklight");

let dark = false;

function darkOrLight() {
if (!dark) {
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
darklight.style.backgroundColor = "black";
  darklight.style.color = "white";
dark = true;
} else {
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
darklight.style.backgroundColor = "white";
    darklight.style.color = "black";
dark = false;
}

};