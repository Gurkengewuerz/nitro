import {GetTickerTime} from "../../../pixi-proxy";
import {Motion} from "./Motion";

export class Wait extends Motion {
  private _startTimeMs: number;
  private _waitTimeMs: number;

  constructor(k: number) {
    super(null);

    this._waitTimeMs = k;
  }

  public override get running(): boolean {
    return this._running;
  }

  public override start(): void {
    super.start();

    this._complete = false;
    this._startTimeMs = GetTickerTime();
  }

  public override tick(k: number): void {
    super.tick(k);

    this._complete = k - this._startTimeMs >= this._waitTimeMs;

    if (this._complete) this.stop();
  }
}
