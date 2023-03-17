import {IMessageDataWrapper} from "../../../../../communication";
import {IRoomObjectModel} from "../../../../../room";
import {RoomObjectVariable} from "../../RoomObjectVariable";
import {IObjectData} from "../IObjectData";
import {ObjectDataBase} from "../ObjectDataBase";
import {ObjectDataKey} from "../ObjectDataKey";

export class MapDataType extends ObjectDataBase {
  public static FORMAT_KEY = ObjectDataKey.MAP_KEY;

  private static STATE: string = "state";
  private static RARITY: string = "rarity";

  private _data: {[index: string]: string};

  constructor() {
    super();

    this._data = {};
  }

  public override parseWrapper(wrapper: IMessageDataWrapper): void {
    if (!wrapper) return;

    this._data = {};

    const totalSets = wrapper.readInt();

    if (totalSets) for (let i = 0; i < totalSets; i++) this._data[wrapper.readString()] = wrapper.readString();

    super.parseWrapper(wrapper);
  }

  public override initializeFromRoomObjectModel(model: IRoomObjectModel): void {
    super.initializeFromRoomObjectModel(model);

    this._data = model.getValue<{[index: string]: string}>(RoomObjectVariable.FURNITURE_DATA) || {};
  }

  public override writeRoomObjectModel(model: IRoomObjectModel): void {
    super.writeRoomObjectModel(model);

    model.setValue(RoomObjectVariable.FURNITURE_DATA_FORMAT, MapDataType.FORMAT_KEY);
    model.setValue(RoomObjectVariable.FURNITURE_DATA, this._data);
  }

  public override getLegacyString(): string {
    if (!this._data) return "";

    const state = this._data[MapDataType.STATE];

    if (state === undefined || state === null) return "";

    return state;
  }

  public override compare(data: IObjectData): boolean {
    return false;
  }

  public getValue(key: string): string {
    return this._data[key];
  }

  public override get rarityLevel(): number {
    if (!this._data) return -1;

    const state = this._data[MapDataType.RARITY];

    if (state === undefined || state === null) return -1;

    return parseInt(state);
  }

  // TODO: How to get the keys?
  public get data() {
    return this._data;
  }
}
