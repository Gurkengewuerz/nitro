import {NitroEvent} from "@nitro/renderer";

export class CatalogPurchaseSoldOutEvent extends NitroEvent {
  public static SOLD_OUT: string = "CPSOE_SOLD_OUT";

  constructor() {
    super(CatalogPurchaseSoldOutEvent.SOLD_OUT);
  }
}
