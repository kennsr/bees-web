export type MenuItem = {
  name: string;
  href: string;
  isExternal?: boolean;
};

export type ClassItem = {
  id: string;
  name: string;
  price: {
    base: number;
    promo: number | undefined;
  };
  description: string;
  benefits: string[];
  footer: string;
  image: string;
};
