import { MenuItem, PricingItem } from "@/types";

export const menus: MenuItem[] = [
  {
    name: "Home",
    href: "#",
    isExternal: false,
  },
  {
    name: "About",
    href: "#about",
    isExternal: false,
  },
  {
    name: "Contact",
    href: "https://www.instagram.com/bees_education/",
    isExternal: true,
  },
];

export const pricings: PricingItem[] = [
  {
    name: "Offline Private",
    price: 500000,
  },
  {
    name: "Offline Reguler",
    price: 450000,
  },
  {
    name: "Online Private",
    price: 350000,
  },
  {
    name: "Online Reguler",
    price: 150000,
  },
];
