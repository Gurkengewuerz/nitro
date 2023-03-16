import {NitroEvent} from "@nitro/renderer";

import {GetRoomSessionManager} from "../../../api";
import {useEventDispatcher} from "../useEventDispatcher";

export const useRoomSessionManagerEvent = <T extends NitroEvent>(type: string | string[], handler: (event: T) => void) =>
  useEventDispatcher(type, GetRoomSessionManager().events, handler);
