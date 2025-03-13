"use client";
import { FC, Suspense } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SearchIcon,
  Call02Icon,
  InstagramIcon,
  TiktokIcon,
} from "@hugeicons/core-free-icons";
import { Sparkles } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
} from "@radix-ui/react-tooltip";
interface ISiteActionsProps {}

export const SiteActions: FC<ISiteActionsProps> = (props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isSparkles = searchParams.get("nofx") !== "1";
  return (
    <Suspense>
      <div className="flex w-fit items-center gap-2 md:gap-4">
        <div className="mr-8 flex w-fit gap-2 md:gap-4">
          <a href="https://www.instagram.com/bees_education/" target="_blank">
            {" "}
            <HugeiconsIcon
              icon={InstagramIcon}
              size={24}
              color="currentColor"
              strokeWidth={1.5}
            />
          </a>
          <a
            className=""
            target="_blank"
            href="https://www.tiktok.com/@bees_education"
          >
            {" "}
            <HugeiconsIcon
              icon={TiktokIcon}
              size={24}
              color="currentColor"
              strokeWidth={1.5}
            />
          </a>
        </div>

        <TooltipProvider>
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  router.push(!isSparkles ? "/" : "/?nofx=1");
                }}
                className="cursor-pointer"
              >
                <Sparkles />
              </a>
            </TooltipTrigger>
            <TooltipContent
              className="z-50 rounded-full bg-[var(--foreground)] px-2 py-1 text-[var(--background)]"
              sideOffset={5}
              side="bottom"
              align="center"
              alignOffset={0}
            >
              <TooltipArrow
                className="fill-[var(--foreground)]"
                width={10}
                height={5}
              />
              <p>Laggy? Turn off effects</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Suspense>
  );
};
