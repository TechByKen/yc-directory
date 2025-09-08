"use client";

import { incrementViews } from "@/sanity/lib/actions";
import { useEffect } from "react";


export default function IncrementViews({ id }: { id: string }) {
  useEffect(() => {
    incrementViews(id);
  }, [id]);

  return null;
}
