import {RoomObjectWidgetRequestEvent} from "../../../../../events";
import {FurnitureLogic} from "./FurnitureLogic";

export class FurniturePlaceholderLogic extends FurnitureLogic {
  public override getEventTypes(): string[] {
    const types = [RoomObjectWidgetRequestEvent.PLACEHOLDER];

    return this.mergeTypes(super.getEventTypes(), types);
  }

  public override useObject(): void {
    if (!this.object || !this.eventDispatcher) return;

    this.eventDispatcher.dispatchEvent(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.PLACEHOLDER, this.object));
  }
}
