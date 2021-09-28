import IGame from "./igame";

export default class Game implements IGame {
  constructor(
    public id: number,
    public name: string,
    public summary: string,
    public image_url: string
  ) {}
}
