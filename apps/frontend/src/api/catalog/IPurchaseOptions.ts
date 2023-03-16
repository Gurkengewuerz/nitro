import {IObjectData} from "@nitro/renderer";

export interface IPurchaseOptions {
  quantity?: number;
  extraData?: string;
  extraParamRequired?: boolean;
  previewStuffData?: IObjectData;
}
