"use client";

import { useSearchParams } from "next/navigation";
import { Background } from "./background";
import { Suspense } from "react";

export function ClientBackground() {
  const searchParams = useSearchParams();
  const shouldShowBackground = searchParams.get("nofx") !== "1";

  return shouldShowBackground ? (
    <Suspense>
      <Background />
    </Suspense>
  ) : null;
}
