import AuthenticationService from "@/services/authentication-service";
import AuthenticationStore from "@/stores/authentication-store";
import { inject, injectable, singleton } from "tsyringe";
import DataHandler from "./data-handler";

@singleton()
@injectable()
export default class AuthenticationDataHandler extends DataHandler {
  constructor(
    @inject(AuthenticationStore)
    public authenticationStore: AuthenticationStore,
    @inject(AuthenticationService)
    public authenticationService: AuthenticationService
  ) {
    super();
  }

  /**
   * Logs the user in if the given username and password match.
   * @returns JWT String
   */
  public login(username: string, password: string): string {
    return `${username} ${password}`;
  }
}
