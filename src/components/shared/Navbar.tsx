import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { menus } from "@/constants/menu.const";

export const Menubar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.name}>
            <NavigationMenuLink
              href={menu.href}
              target={menu.isExternal ? "_blank" : "_self"}
              className="text-md md:text-lg"
            >
              {menu.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
