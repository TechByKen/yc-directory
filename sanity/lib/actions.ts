"use server";

import { writeClient } from "@/sanity/lib/write-client";

export async function incrementViews(id: string) {
  await writeClient
    .patch(id)
    .setIfMissing({ views: 0 })
    .inc({ views: 1 })
    .commit();
}
