import IGameStore from "./game-store-interface";
import { Store } from "./store";
import { singleton } from "tsyringe";
import Game from "@/models/game";
import IGame from "@/models/igame";

@singleton()
export default class GameStore extends Store<IGameStore> {
  /**
   * Initializes the data for the game store.
   */
  protected data(): IGameStore {
    return {
      selected: new Game(0, "", "", ""),
      games: [] as IGame[],
    };
  }

  public get selected(): IGame {
    return this.state.selected as IGame;
  }

  public set selected(value: IGame) {
    this.state.selected = value;
  }

  public get games(): IGame[] {
    return this.state.games as IGame[];
  }

  public set games(value: IGame[]) {
    this.state.games = value;
  }
}
