import {ICommunicationManager, IConfigurationManager, INitroCore} from "../api";
import {NitroVersion} from "./NitroVersion";
import {Disposable} from "./common";
import {CommunicationManager} from "./communication";
import {ConfigurationManager} from "./configuration";

export class NitroCore extends Disposable implements INitroCore {
  private _configuration: IConfigurationManager;
  private _communication: ICommunicationManager;

  constructor() {
    super();

    NitroVersion.sayHello();

    this._configuration = new ConfigurationManager();
    this._communication = new CommunicationManager();
  }

  protected override onDispose(): void {
    if (this._communication) {
      this._communication.dispose();

      this._communication = null;
    }
  }

  public get configuration(): IConfigurationManager {
    return this._configuration;
  }

  public get communication(): ICommunicationManager {
    return this._communication;
  }
}
