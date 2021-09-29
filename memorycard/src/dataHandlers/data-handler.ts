export default abstract class DataHandler {
  protected isOnline(): boolean {
    return navigator.onLine;
  }
}
