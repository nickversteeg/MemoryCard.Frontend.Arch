import IGame from "@/models/igame";
import GameService from "@/services/game-service";
import GameStore from "@/stores/game-store";
import { injectable, inject, singleton } from "tsyringe";
import DataHandler from "./data-handler";

@singleton()
@injectable()
export default class GameDataHandler extends DataHandler {
  constructor(
    @inject(GameStore) protected gameStore: GameStore,
    @inject(GameService) protected gameService: GameService
  ) {
    super(); /* Why is this needed in TypeScript? */
    this.gameService.getGamesAsync().then((response) => {
      this.gameStore.games = response;
    });
  }

  public setSelectedGame(value: number): void {
    const game = this.gameStore
      .getState()
      .games.find((game) => game.id == value);
    if (game) {
      this.gameStore.selected = game;
    }
  }

  public setGames(value: IGame[]): void {
    this.gameStore.games = value;
  }
}
