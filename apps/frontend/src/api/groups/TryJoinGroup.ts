import {GroupJoinComposer} from "@nitro/renderer";

import {SendMessageComposer} from "..";

export const TryJoinGroup = (groupId: number) => SendMessageComposer(new GroupJoinComposer(groupId));
