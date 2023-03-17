import {IAssetData, RoomObjectVariable} from "../../../../../api";
import {RoomObjectWidgetRequestEvent} from "../../../../../events";
import {FurnitureMultiStateLogic} from "./FurnitureMultiStateLogic";

export class FurnitureCustomStackHeightLogic extends FurnitureMultiStateLogic {
  public override getEventTypes(): string[] {
    const types = [RoomObjectWidgetRequestEvent.STACK_HEIGHT];

    return this.mergeTypes(super.getEventTypes(), types);
  }

  public override initialize(asset: IAssetData): void {
    super.initialize(asset);

    if (this.object && this.object.model) this.object.model.setValue(RoomObjectVariable.FURNITURE_ALWAYS_STACKABLE, 1);
  }

  public override useObject(): void {
    if (!this.object || !this.eventDispatcher) return;

    this.eventDispatcher.dispatchEvent(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.STACK_HEIGHT, this.object));

    super.useObject();
  }
}
