import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { menus } from "@/constants/menu";
import { FC } from "react";
interface IMenuProps {}

export const Menubar: FC<IMenuProps> = (props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.name}>
            <NavigationMenuLink href={menu.href} className="text-lg">
              {menu.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
