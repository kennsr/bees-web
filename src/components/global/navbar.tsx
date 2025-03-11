import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { menus } from "@/constants/menu";
import { FC } from "react";
interface INavbarProps {};

export const Navbar: FC<INavbarProps> = (props) => {
    return (
      <NavigationMenu>
      <NavigationMenuList>
          {
            menus.map((menu)=>(
              <NavigationMenuItem key={menu.name}>
                <NavigationMenuLink href={menu.href}>{menu.name}</NavigationMenuLink>
              </NavigationMenuItem>
            ))
          }
      </NavigationMenuList>
    </NavigationMenu>
    );
}
