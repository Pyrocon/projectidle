
function Rest() {
  if (game.stamina.current < game.stamina.maximum) {
    game.stamina.current = Math.min(game.stamina.current + game.camp.campfire, game.stamina.maximum);
    UpdateActionLog("You are resting.");
  }
  else {
    UpdateActionLog("You feel well rested.");
  }
}

function ExploreForest() {
  if (game.stamina.current < game.forest.difficulty) {
    UpdateActionLog("You are tired and must return to camp.");
    TakeAction();
  } else {
    game.stamina.current -= game.forest.difficulty;
    if (game.forest.explore.lumber > Math.random()) {
      UpdateActionLog("You found some lumber.");
      game.inventory.lumber++;
      if (game.inventory.lumber == 1) UpdateDisplay("lumber",format(game.inventory.lumber)+" log of lumber");
      else UpdateDisplay("lumber",format(game.inventory.lumber)+" logs of lumber");
    }
    else if (game.forest.explore.berries > Math.random()) {
      UpdateActionLog("You found some berries.");
      game.inventory.berries++;
      if (game.inventory.berries == 1) UpdateDisplay("berries",format(game.inventory.berries)+" berry");
      else UpdateDisplay("berries",format(game.inventory.berries)+" berries");
    }
    else if (game.forest.explore.rain > Math.random()) {
      UpdateActionLog("It starts to rain, making it more difficult to explore the forest right now.");
      game.forest.difficulty*=1.3;
    }
    else if (game.forest.explore.fight > Math.random()) {
      UpdateActionLog("You come across a goblin and swiftly deal with the creature.");
      game.inventory.gold++;
      game.stamina.current = Math.max(0, game.stamina.current - game.forest.difficulty);
      if (game.inventory.gold == 1) UpdateDisplay("gold",format(game.inventory.gold)+" gold coin");
      else UpdateDisplay("gold",format(game.inventory.gold)+" gold coins");
    }
    else {
      UpdateActionLog("You explore a bit, but find nothing of interest.");
    }
    game.forest.knowledge++;
  }
}

function TakeAction() {
  if (game.location == 0) {
    if (game.stamina.current >= game.stamina.maximum * 0.5) {
      UpdateDisplay("location","You are exploring in the forest.");
      UpdateDisplay("action","Return to Camp");
      UpdateActionLog("You set out exploring.");
      game.location = 1;
    } else {
      UpdateActionLog("You need to rest some more.");
    }
  }
  else if (game.location == 1){
    UpdateDisplay("location","You are next to a campfire.");
    UpdateDisplay("action","Explore the Forest");
    // document.getElementById("result").innerHTML = "You are resting.";
    game.stamina.maximum = 10 + Math.floor(game.forest.knowledge/10);
    game.forest.difficulty = 1;
    game.location = 0;
  }
}

var mainGameLoop = window.setInterval(function() {
  //Adds 1 for each second offline. Doesn't do any other offline calculations at this time.
  game.offlineTickBonus += Math.floor(Date.now()-game.lastTick);
  game.lastTick = Date.now();
  UpdateDisplay("stamina","Stamina: "+format(game.stamina.current)+"/"+format(game.stamina.maximum));
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
