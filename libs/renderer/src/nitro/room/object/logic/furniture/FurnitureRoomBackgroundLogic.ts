import {IRoomObjectModel} from "../../../../../api";
import {FurnitureRoomBrandingLogic} from "./FurnitureRoomBrandingLogic";

export class FurnitureRoomBackgroundLogic extends FurnitureRoomBrandingLogic {
  protected override getAdClickUrl(model: IRoomObjectModel): string {
    return null;
  }
}
