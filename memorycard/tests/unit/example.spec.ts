import "reflect-metadata";
import { container } from "tsyringe";
import GameService from "@/services/game-service";
import GameStore from "@/stores/game-store";
import GameDataHandler from "@/dataHandlers/game-data-handler";

describe("game-service.ts", () => {
  it("gets games from the API", async () => {
    // arrange
    const gameService = container.resolve(GameService);

    // act
    const games = await gameService.getGamesAsync();

    // assert
    expect(games.length).toEqual(12);
  });
  it("marks a game as selected", async () => {
    // arrange
    const gameStore = container.resolve(GameStore);
    const gameService = container.resolve(GameService);
    const gameDataHandler = container.resolve(GameDataHandler);

    const spy = jest.spyOn(gameDataHandler, "setSelectedGame");

    // act
    const games = await gameService.getGamesAsync();
    gameDataHandler.setSelectedGame(games[0].id);

    // assert
    expect(spy).toBeCalledTimes(1);
    expect(gameStore.getState().selected.id).toEqual(games[0].id);
  });
});
