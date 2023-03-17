import {MapDataType, RoomObjectVariable} from "../../../../../api";
import {RoomObjectWidgetRequestEvent} from "../../../../../events";
import {RoomObjectUpdateMessage} from "../../../../../room";
import {ObjectDataUpdateMessage} from "../../../messages";
import {FurnitureLogic} from "./FurnitureLogic";

export class FurnitureMannequinLogic extends FurnitureLogic {
  private static GENDER: string = "GENDER";
  private static FIGURE: string = "FIGURE";
  private static OUTFIT_NAME: string = "OUTFIT_NAME";

  public override getEventTypes(): string[] {
    const types = [RoomObjectWidgetRequestEvent.MANNEQUIN];

    return this.mergeTypes(super.getEventTypes(), types);
  }

  public override processUpdateMessage(message: RoomObjectUpdateMessage): void {
    super.processUpdateMessage(message);

    if (message instanceof ObjectDataUpdateMessage) {
      message.data.writeRoomObjectModel(this.object.model);

      this.processObjectData();
    }
  }

  private processObjectData(): void {
    if (!this.object || !this.object.model) return;

    const data = new MapDataType();

    data.initializeFromRoomObjectModel(this.object.model);

    this.object.model.setValue(RoomObjectVariable.FURNITURE_MANNEQUIN_GENDER, data.getValue(FurnitureMannequinLogic.GENDER));
    this.object.model.setValue(RoomObjectVariable.FURNITURE_MANNEQUIN_FIGURE, data.getValue(FurnitureMannequinLogic.FIGURE));
    this.object.model.setValue(RoomObjectVariable.FURNITURE_MANNEQUIN_NAME, data.getValue(FurnitureMannequinLogic.OUTFIT_NAME));
  }

  public override useObject(): void {
    if (!this.object || !this.eventDispatcher) return;

    this.eventDispatcher.dispatchEvent(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.MANNEQUIN, this.object));
  }
}
