import {NitroEvent} from "@nitro/renderer";

import {GetSessionDataManager} from "../../../api";
import {useEventDispatcher} from "../useEventDispatcher";

export const useSessionDataManagerEvent = <T extends NitroEvent>(type: string | string, handler: (event: T) => void) =>
  useEventDispatcher(type, GetSessionDataManager().events, handler);
