import {RoomObjectFurnitureActionEvent} from "../../../../../events";
import {FurnitureLogic} from "./FurnitureLogic";

export class FurnitureHabboWheelLogic extends FurnitureLogic {
  public override getEventTypes(): string[] {
    const types = [RoomObjectFurnitureActionEvent.USE_HABBOWHEEL];

    return this.mergeTypes(super.getEventTypes(), types);
  }

  public override useObject(): void {
    if (!this.object || !this.eventDispatcher) return;

    this.eventDispatcher.dispatchEvent(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.USE_HABBOWHEEL, this.object));
  }
}
