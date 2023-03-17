import {RoomObjectWidgetRequestEvent} from "../../../../../events";
import {FurnitureLogic} from "./FurnitureLogic";

export class FurnitureEcotronBoxLogic extends FurnitureLogic {
  public override getEventTypes(): string[] {
    const types = [RoomObjectWidgetRequestEvent.ECOTRONBOX];

    return this.mergeTypes(super.getEventTypes(), types);
  }

  public override useObject(): void {
    if (!this.object || !this.eventDispatcher) return;

    this.eventDispatcher.dispatchEvent(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.ECOTRONBOX, this.object));
  }
}
