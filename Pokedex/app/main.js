import { ActivePokemonController } from "./Controllers/ActivePokemonController.js";
import { CaughtPokemonController } from "./Controllers/CaughtPokemonController.js";
import { WildPokemonController } from "./Controllers/WildPokemonController.js";

class App {
  wildPokemonController = new WildPokemonController()
  caughtPokemonController = new CaughtPokemonController()
  activePokemonController = new ActivePokemonController()
}

window["app"] = new App();
