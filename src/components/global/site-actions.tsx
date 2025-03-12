import { FC } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SearchIcon,
  Call02Icon,
  InstagramIcon,
  TiktokIcon,
} from "@hugeicons/core-free-icons";
interface ISiteActionsProps {}

export const SiteActions: FC<ISiteActionsProps> = (props) => {
  return (
    <div className="flex w-fit items-center gap-4">
      <a>
        {" "}
        <HugeiconsIcon
          icon={InstagramIcon}
          size={24}
          color="currentColor"
          strokeWidth={1.5}
        />
      </a>
      <a>
        {" "}
        <HugeiconsIcon
          icon={TiktokIcon}
          size={24}
          color="currentColor"
          strokeWidth={1.5}
        />
      </a>
    </div>
  );
};
