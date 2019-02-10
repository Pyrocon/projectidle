// Update visual items.
function UpdateDisplay(id, content) {
  document.getElementById(id).innerHTML = content;
}

// Rewrite once action log is made in html.
var lastMessage = "";
function UpdateActionLog(message) {
  if (lastMessage == message) return;
  lastMessage = message;
  document.getElementById("result").innerHTML = message;
}

// Format numbers for display.
function format(number) {
  var exponent =  Math.floor(Math.log10(number));
  var mantissa = number / Math.pow(10, exponent);
  if (exponent < 3) return number.toFixed(1);
  return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3);
}

// Shows a tab.
function tab(tab) {
  // Don't have tabs yet.
}
