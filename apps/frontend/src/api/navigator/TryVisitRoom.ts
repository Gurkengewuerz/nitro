import {GetGuestRoomMessageComposer} from "@nitro/renderer";

import {SendMessageComposer} from "../nitro";

export function TryVisitRoom(roomId: number): void {
  SendMessageComposer(new GetGuestRoomMessageComposer(roomId, false, true));
}
