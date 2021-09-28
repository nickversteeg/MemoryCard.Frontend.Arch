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
    const game = new Game(0, "", "", "");
    return {
      item: game,
      items: [game],
    };
  }

  public get selected(): IGame {
    return this.state.item;
  }

  public set selected(value: IGame) {
    this.state.item = value;
  }

  public get games(): IGame[] {
    return this.state.items;
  }

  public set games(value: IGame[]) {
    this.state.items = value;
  }
}
