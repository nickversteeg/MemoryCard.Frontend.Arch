import { singleton } from "tsyringe";
import IAuthenticationStore from "./authentication-store-interface";
import { Store } from "./store";

@singleton()
export default class AuthenticationStore extends Store<IAuthenticationStore> {
  protected data(): IAuthenticationStore {
    throw new Error("Method not implemented.");
  }



}