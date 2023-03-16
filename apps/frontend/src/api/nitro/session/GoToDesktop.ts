import {DesktopViewComposer} from "@nitro/renderer";

import {SendMessageComposer} from "..";

export function GoToDesktop(): void {
  SendMessageComposer(new DesktopViewComposer());
}
