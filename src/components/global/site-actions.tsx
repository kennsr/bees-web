import { FC } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SearchIcon, Call02Icon } from "@hugeicons/core-free-icons";
interface ISiteActionsProps {}

export const SiteActions: FC<ISiteActionsProps> = (props) => {
  return (
    <div className="flex w-fit items-center gap-6">
      <a>
        {" "}
        <HugeiconsIcon
          icon={SearchIcon}
          size={24}
          color="currentColor"
          strokeWidth={1.5}
        />
      </a>
      <a>
        {" "}
        <HugeiconsIcon
          icon={Call02Icon}
          size={24}
          color="currentColor"
          strokeWidth={1.5}
        />
      </a>
    </div>
  );
};
