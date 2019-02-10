function initGame() {
  var theData = {
    // Keep at 0.0.1 until satisfied with making public in some fashion.
    version: "0.0.1",
    interval: 1000,

    // To track accumulated offline time
    lastTick: Date.now(),
    offlineTickBonus: 0,

    // Keep track of how far player can progress in a given run.
    stamina: {
      current: 10,
      maximum: 10
    },

    // ID of the player's current location.
    // Camp: 0
    // Forest: 1
    location: 0,

    camp: {
      campfire: 1
    },

    inventory: {
      lumber: 0,
      berries: 0,
      gold: 0
    },

    forest: {
      // Baseline stamina cost to explore.
      difficulty: 1,
      // Determines what happens when player explores in the forest.
      // Each probability roll is seperate, with nothing found if all fail.
      explore: {
        lumber: .08,
        berries: .08,
        rain: .03,
        fight: .08
      },

      knowledge: 0
    },

    enemy: {
      hitpoints: 0,
      damage: 0,
      accuracy: 0,
      reward: 0
    }
  }
  return theData;
}

var game = initGame();
