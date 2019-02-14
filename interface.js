// Update visual items.
function UpdateDisplay(id, content) {
  document.getElementById(id).innerHTML = content;
}

// Rewrite once action log is made in html.
function UpdateActionLog(message) {
  if (document.getElementById("actionLogRowOne").innerHTML == message) return;
  document.getElementById("actionLogRowFifteen").innerHTML = document.getElementById("actionLogRowFourteen").innerHTML;
  document.getElementById("actionLogRowFourteen").innerHTML = document.getElementById("actionLogRowThirteen").innerHTML;
  document.getElementById("actionLogRowThirteen").innerHTML = document.getElementById("actionLogRowTwelve").innerHTML;
  document.getElementById("actionLogRowTwelve").innerHTML = document.getElementById("actionLogRowEleven").innerHTML;
  document.getElementById("actionLogRowEleven").innerHTML = document.getElementById("actionLogRowTen").innerHTML;
  document.getElementById("actionLogRowTen").innerHTML = document.getElementById("actionLogRowNine").innerHTML;
  document.getElementById("actionLogRowNine").innerHTML = document.getElementById("actionLogRowEight").innerHTML;
  document.getElementById("actionLogRowEight").innerHTML = document.getElementById("actionLogRowSeven").innerHTML;
  document.getElementById("actionLogRowSeven").innerHTML = document.getElementById("actionLogRowSix").innerHTML;
  document.getElementById("actionLogRowSix").innerHTML = document.getElementById("actionLogRowFive").innerHTML;
  document.getElementById("actionLogRowFive").innerHTML = document.getElementById("actionLogRowFour").innerHTML;
  document.getElementById("actionLogRowFour").innerHTML = document.getElementById("actionLogRowThree").innerHTML;
  document.getElementById("actionLogRowThree").innerHTML = document.getElementById("actionLogRowTwo").innerHTML;
  document.getElementById("actionLogRowTwo").innerHTML = document.getElementById("actionLogRowOne").innerHTML;
  document.getElementById("actionLogRowOne").innerHTML = message;
}

// Initialize buttons at top of the page.
function FadeInElement(element) {
  if (document.getElementById(element).classList.contains("hidden")) {
    document.getElementById(element).classList.remove("hidden");
    document.getElementById(element).classList.add("fadeIn");
  }
}

// Format numbers for display.
function format(number) {
  var exponent =  Math.floor(Math.log10(number));
  var mantissa = number / Math.pow(10, exponent);
  if (exponent < 3) return number.toFixed(0);
  return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3);
}

// Shows a tab.
function tab(tab) {
  document.getElementById("gameMenu").style.display = "none";
  document.getElementById("inventoryMenu").style.display = "none";
  document.getElementById("skillsMenu").style.display = "none";
  document.getElementById("optionsMenu").style.display = "none";

  document.getElementById(tab).style.display = "inline-block";
}

//Configures options
function optionsConfigure(option, value) {
  var element = document.getElementById(option);

  if (option == "optionsAutoExplore") {
    if (document.getElementById(option).checked) {
      game.camp.autoExplore = true;
      element.checked = true;
    } else {
      game.camp.autoExplore = false;
      element.checked = false;
    }
  }
}
