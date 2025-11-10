import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { menus } from "@/constants/menu.const";
import Link from "next/link";

export const Menubar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.name}>
            {menu.isExternal ? (
              <NavigationMenuLink
                href={menu.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md md:text-lg"
              >
                {menu.name}
              </NavigationMenuLink>
            ) : (
              <Link href={menu.href} passHref legacyBehavior>
                <NavigationMenuLink className="text-md md:text-lg">
                  {menu.name}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
