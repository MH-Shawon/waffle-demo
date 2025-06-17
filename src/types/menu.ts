// Define the MenuItem interface
export interface MenuItem {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

// Define the MenuCategory interface
export interface MenuCategory {
  id: string;
  name: string;
}

// Define the MenuItemsByCategory interface
export interface MenuItemsByCategory {
  [key: string]: MenuItem[];
}
