import {GroupFavoriteComposer, GroupUnfavoriteComposer, HabboGroupEntryData} from "@nitro/renderer";

import {SendMessageComposer} from "..";

export const ToggleFavoriteGroup = (group: HabboGroupEntryData) => {
  SendMessageComposer(group.favourite ? new GroupUnfavoriteComposer(group.groupId) : new GroupFavoriteComposer(group.groupId));
};
