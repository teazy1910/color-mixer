const sliderContainer = document.querySelector(".container-mixer");
sliderContainer.addEventListener("input", mixColors);

function mixColors() {
  const green = document.querySelector("#g").value;
  const red = document.querySelector("#r").value;
  const blue = document.querySelector("#b").value;
  const color = "rgb(" + red + "," + green + "," + blue + ")";
  document.querySelector("#bg").style.backgroundColor = color;

  // RGB Color zu Hex konvertieren
  const rHex = convertStringToHex(red);
  const gHex = convertStringToHex(green);
  const bHex = convertStringToHex(blue);
  const hexValue = "#" + rHex + gHex + bHex;
  document.querySelector("#hex").textContent = hexValue;
}

// Zahl einstellig in String zu vorangestellter "0" konvertieren
function convertStringToHex(numberAsString) {
  let numberAsStringWithLeadingZero = parseInt(numberAsString).toString(16);
  if (numberAsStringWithLeadingZero.length === 1) {
    numberAsStringWithLeadingZero = "0" + numberAsStringWithLeadingZero;
  }
  return numberAsStringWithLeadingZero;
}

mixColors();
