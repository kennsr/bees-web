"use client";

import { useSearchParams } from "next/navigation";
import { Background } from "./background";

export function ClientBackground() {
  const searchParams = useSearchParams();
  const shouldShowBackground = searchParams.get("nofx") !== "1";

  return shouldShowBackground ? <Background /> : null;
}
