"use client";

import Link from "next/link";
import { Suspense } from "react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-6">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Link
          href="/"
          className="hover:[var(--foreground)/10] rounded bg-[var(--foreground)] px-4 py-2 text-[var(--background)]"
        >
          Return to Home
        </Link>
      </Suspense>
    </div>
  );
}
