import {IMessageEvent, MessageEvent} from "@nitro/renderer";
import {useEffect} from "react";

import {GetCommunication} from "../../api";

export const useMessageEvent = <T extends IMessageEvent>(eventType: typeof MessageEvent, handler: (event: T) => void) => {
  useEffect(() => {
    //@ts-ignore
    const event = new eventType(handler);

    GetCommunication().registerMessageEvent(event);

    return () => GetCommunication().removeMessageEvent(event);
  }, [eventType, handler]);
};
