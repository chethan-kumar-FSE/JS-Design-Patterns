/* The Facade Design Pattern provides a simplified interface (a "facade") to a complex subsystem, making it easier to use. 
Instead of interacting with many complicated classes or functions directly, you interact with a single interface that takes care of the complexities for you. */

class MusicSystem {
  playSongs(songs) {
    songs.forEach((song) => {
      console.log("Playing:", song);
    });
  }
}

class LightingSystem {
  turnOn() {
    console.log("Lights are ON.");
  }
}

class FoodService {
  start() {
    console.log("Food service has started.");
  }
}

class Party {
  constructor() {
    this.musicSystem = new MusicSystem();
    this.lightingSystem = new LightingSystem();
    this.foodService = new FoodService();
  }

  startParty() {
    console.log("Party is starting...");
    this.lightingSystem.turnOn();
    this.foodService.start();
    this.musicSystem.playSongs(["Song1", "Song2"]);
    console.log("Enjoy the party!");
  }
}
const party = new Party();
party.startParty();
