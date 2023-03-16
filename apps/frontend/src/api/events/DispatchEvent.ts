import {IEventDispatcher, NitroEvent} from "@nitro/renderer";

export const DispatchEvent = (eventDispatcher: IEventDispatcher, event: NitroEvent) => eventDispatcher.dispatchEvent(event);
