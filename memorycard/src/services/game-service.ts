import Game from "@/models/game";
import IGame from "@/models/igame";
import axios from "axios";
import { injectable } from "tsyringe";

@injectable()
export default class GameService {
  async getGamesAsync(): Promise<IGame[]> {
    try {
      const response = await axios({
        method: "POST",
        baseURL: `${process.env.VUE_APP_M3C_API_URL}`,
        url: "/games",
        headers: {
          Authorization: `${process.env.VUE_APP_M3C_AUTH_KEY}`,
          "Client-ID": `${process.env.VUE_APP_M3C_CLIENT_ID}`,
        },
        data: "fields *, screenshots.*; limit 12;",
      });

      const games: IGame[] = [];
      response.data.forEach((element: any) => {
        games.push(
          new Game(
            element.id,
            element.name,
            element.summary,
            element.screenshots
              ? `${element.screenshots[0].url}`
              : "//via.placeholder.com/150x300"
          )
        );
        console.log(games[games.length - 1]);
      });

      return games;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getGameImageDataAsync(image_url: string): Promise<string> {
    try {
      const response = await axios({
        method: "POST",
        baseURL: image_url,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return "";
    }
  }
}
