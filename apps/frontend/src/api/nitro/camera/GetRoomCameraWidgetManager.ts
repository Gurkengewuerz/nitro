import {IRoomCameraWidgetManager} from "@nitro/renderer";

import {GetNitroInstance} from "../GetNitroInstance";

export function GetRoomCameraWidgetManager(): IRoomCameraWidgetManager {
  return GetNitroInstance().cameraManager;
}
