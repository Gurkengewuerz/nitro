import {useBetween} from "use-between";

import {LocalStorageKeys} from "../../api";
import {useLocalStorage} from "../useLocalStorage";

const useUiFPSCounterState = () => useLocalStorage(LocalStorageKeys.UI_FPS_COUNTER, false);

export const useUiFPSCounter = () => useBetween(useUiFPSCounterState);
