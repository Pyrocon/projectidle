
function Rest() {
  if (game.stamina.current < game.stamina.maximum) {
    game.stamina.current = Math.min(game.stamina.current + game.camp.campfire, game.stamina.maximum);
    document.getElementById("result").innerHTML = "You are resting.";
  }
  else {
    document.getElementById("result").innerHTML = "You feel well rested.";
  }
}

function ExploreForest() {
  if (game.stamina.current < game.forest.difficulty) {
    document.getElementById("result").innerHTML = "You are tired and must return to camp.";
    TakeAction();
  } else {
    game.stamina.current -= game.forest.difficulty;
    if (game.forest.explore.lumber > Math.random()) {
      document.getElementById("result").innerHTML = "You found some lumber.";
      game.inventory.lumber++;
      if (game.inventory.lumber == 1) document.getElementById("lumber").innerHTML = game.inventory.lumber+" log of lumber";
      else document.getElementById("lumber").innerHTML = game.inventory.lumber+" logs of lumber";
    }
    else if (game.forest.explore.berries > Math.random()) {
      document.getElementById("result").innerHTML = "You found some berries.";
      game.inventory.berries++;
      if (game.inventory.berries == 1) document.getElementById("berries").innerHTML = game.inventory.berries+" berry";
      else document.getElementById("berries").innerHTML = game.inventory.berries+" berries";
    }
    else if (game.forest.explore.rain > Math.random()) {
      document.getElementById("result").innerHTML = "It starts to rain, making it more difficult to explore the forest right now.";
      game.forest.difficulty+=0.5;
    }
    else if (game.forest.explore.fight > Math.random()) {
      document.getElementById("result").innerHTML = "You come across a goblin and swiftly deal with the creature.";
      game.inventory.gold++;
      game.stamina.current = Math.max(0, game.stamina.current - game.forest.difficulty);
      if (game.inventory.gold == 1) document.getElementById("gold").innerHTML = game.inventory.berries+" gold coin";
      else document.getElementById("gold").innerHTML = game.inventory.berries+" gold coins";
    }
    else {
      document.getElementById("result").innerHTML = "You explore a bit, but find nothing of interest.";
    }
    game.forest.knowledge++;
  }
}

function TakeAction() {
  if (game.location == 0) {
    if (game.stamina.current >= game.stamina.maximum * 0.5) {
      document.getElementById("location").innerHTML = "You are exploring in the forest.";
      document.getElementById("action").innerHTML = "Return to Camp";
      document.getElementById("result").innerHTML = "You set out exploring.";
      game.location = 1;
    } else {
      document.getElementById("result").innerHTML = "You need to rest some more.";
    }
  }
  else if (game.location == 1){
    document.getElementById("location").innerHTML = "You are next to a campfire.";
    document.getElementById("action").innerHTML = "Explore the Forest";
    // document.getElementById("result").innerHTML = "You are resting.";
    game.stamina.maximum = 10 + Math.floor(game.forest.knowledge/10);
    game.forest.difficulty = 1;
    game.location = 0;
  }
}

var mainGameLoop = window.setInterval(function() {
  document.getElementById("stamina").innerHTML = "Stamina: "+game.stamina.current+"/"+game.stamina.maximum;
  if (game.location == 0) Rest();
  else if (game.location == 1) ExploreForest();
}, 1000)

/* Commented out until it's worth utilizing a save state.

// Save the game.
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("IdleProjectTestSave", JSON.stringify(game))
}, 15000)

// Load the game.
var savegame = JSON.parse(localStorage.getItem("IdleProjectTestSave"))
if (savegame.version == game.version) {
  game = savegame;
}

*/
