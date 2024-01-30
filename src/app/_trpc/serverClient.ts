import { httpBatchLink } from "@trpc/client";

import { appRouter } from "@/server";
import { getBaseUrl } from "@/utils";
import { createCaller } from "@/server/trpc";

const caller = createCaller(appRouter);

export const serverClient = caller({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
