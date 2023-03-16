import {INitroCore} from "@nitro/renderer";

import {GetNitroInstance} from "..";

export function GetNitroCore(): INitroCore {
  return GetNitroInstance().core;
}
