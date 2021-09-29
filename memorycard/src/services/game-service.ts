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
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };
}
