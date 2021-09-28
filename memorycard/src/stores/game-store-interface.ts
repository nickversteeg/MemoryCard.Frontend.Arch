import IGame from "@/models/igame";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface IGameStore extends Object {
  item: IGame;
  items: IGame[];
  [
    selector: string
  ]: /* Needed to satisfy Record<string, unknown> type constraint */
  string | unknown[] | unknown;
}
