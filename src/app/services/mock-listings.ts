export interface Listing {
  id: string;
  title: string;
  category: 'Electronics' | 'Furniture' | 'Clothing' | 'Books' | 'Home' | 'Other';
  price: number;
  status: 'active' | 'sold';
  views: number;
  wishlistSaves: number;
  listedDate: string; // YYYY-MM-DD
  soldDate?: string;  // Only present if status === 'sold'
}

export const MOCK_LISTINGS: Listing[] = [
  { id: '1', title: 'Mechanical Keyboard', category: 'Electronics', price: 1200, status: 'sold', views: 145, wishlistSaves: 18, listedDate: '2026-08-02', soldDate: '2026-08-10' },
  { id: '2', title: 'Study Desk Lamp', category: 'Home', price: 350, status: 'sold', views: 64, wishlistSaves: 7, listedDate: '2026-08-05', soldDate: '2026-08-14' },
  { id: '3', title: 'Wireless Headphones', category: 'Electronics', price: 1850, status: 'sold', views: 210, wishlistSaves: 31, listedDate: '2026-09-01', soldDate: '2026-09-09' },
  { id: '4', title: 'Ergonomic Office Chair', category: 'Furniture', price: 3200, status: 'sold', views: 190, wishlistSaves: 24, listedDate: '2026-09-04', soldDate: '2026-09-18' },
  { id: '5', title: 'Denim Jacket (M)', category: 'Clothing', price: 600, status: 'sold', views: 88, wishlistSaves: 12, listedDate: '2026-09-12', soldDate: '2026-09-25' },
  { id: '6', title: 'Clean Code Book', category: 'Books', price: 280, status: 'sold', views: 52, wishlistSaves: 9, listedDate: '2026-10-03', soldDate: '2026-10-07' },
  { id: '7', title: '24-inch IPS Monitor', category: 'Electronics', price: 4100, status: 'sold', views: 310, wishlistSaves: 42, listedDate: '2026-10-06', soldDate: '2026-10-15' },
  { id: '8', title: 'Wooden Bookshelf', category: 'Furniture', price: 1500, status: 'active', views: 112, wishlistSaves: 15, listedDate: '2026-10-18' },
  { id: '9', title: 'Winter Wool Coat', category: 'Clothing', price: 950, status: 'sold', views: 134, wishlistSaves: 19, listedDate: '2026-10-20', soldDate: '2026-11-02' },
  { id: '10', title: 'Espresso Maker', category: 'Home', price: 2200, status: 'sold', views: 175, wishlistSaves: 27, listedDate: '2026-11-01', soldDate: '2026-11-08' },
  { id: '11', title: 'Bluetooth Speaker', category: 'Electronics', price: 850, status: 'active', views: 95, wishlistSaves: 11, listedDate: '2026-11-10' },
  { id: '12', title: 'Algorithms Textbook', category: 'Books', price: 320, status: 'active', views: 41, wishlistSaves: 6, listedDate: '2026-11-14' }
];